import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../services/movie.service";

const ListMovies = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
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
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
};

export default ListMovies;
