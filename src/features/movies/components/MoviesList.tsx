import { Fragment } from "react";
import { Link } from "react-router";
import useDeleteMovie from "../api/delete-movie";
import { useMovies } from "../api/get-movies";

const MoviesList = () => {
  const { data, isLoading, error } = useMovies({
    staleTime: 1000,
  });

  const { mutate } = useDeleteMovie();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Link to="/">Home</Link>
      {data?.map((movie) => (
        <Fragment key={movie._id}>
          <div key={movie._id}>{movie.title}</div>
          <button onClick={() => mutate(movie._id)}>Delete</button>
        </Fragment>
      ))}
    </div>
  );
};

export default MoviesList;
