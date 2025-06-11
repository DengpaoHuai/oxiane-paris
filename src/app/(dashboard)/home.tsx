import { useEffect } from "react";
import { Link } from "react-router";
import useMoviesStore from "../../stores/useMoviesStore";
import { useQueryClient } from "@tanstack/react-query";
import { queryMoviesOptions } from "../../features/movies/api/get-movies";
const Home = () => {
  const { moviesMetadata } = useMoviesStore();
  const queryClient = useQueryClient();

  useEffect(() => {
    console.log("App mounted");

    const handleScroll = () => {
      console.log("scroll");
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "500vh" }}>
      Home
      <Link to="/about">About</Link>
      <Link to="/star-wars">Star Wars</Link>
      <Link
        onMouseOver={() => {
          queryClient.prefetchQuery(queryMoviesOptions);
        }}
        to="/movies"
      >
        Movies
      </Link>
      <p>page : {moviesMetadata.page}</p>
      <p>total : {moviesMetadata.total}</p>
    </div>
  );
};

export default Home;
