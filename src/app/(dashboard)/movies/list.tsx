import { Suspense } from "react";
import MoviesList from "../../../features/movies/components/MoviesList";
import MoviesListLoader from "../../../features/movies/components/MoviesListLoader";

const ListMovies = () => {
  return (
    <div>
      <Suspense fallback={<MoviesListLoader />}>
        <MoviesList />
      </Suspense>
    </div>
  );
};

export default ListMovies;
