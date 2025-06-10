import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteMovie, getMovies } from "../../services/movie.service";
import { Fragment } from "react";
import type { Movie } from "../../types/movie";

const ListMovies = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, error, refetch } = useQuery<Movie[]>({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  const { mutate } = useMutation({
    mutationFn: deleteMovie,
    onMutate: (id: string) => {
      const queryData: Movie[] = queryClient.getQueryData(["movies"])!;

      queryClient.setQueryData(["movies"], (old: Movie[]) =>
        old.filter((movie) => movie._id !== id)
      );

      return { queryData };
    },
    onError: (err, id, context) => {
      queryClient.setQueryData(["movies"], context?.queryData);
    },
    onSettled: () => {
      // queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data?.map((movie) => (
        <Fragment key={movie._id}>
          <div key={movie._id}>{movie.title}</div>
          <button onClick={() => mutate(movie._id)}>Delete</button>
        </Fragment>
      ))}
    </div>
  );
};

export default ListMovies;
