import { createBrowserRouter } from "react-router";

import Home from "../pages/home";
import About from "../pages/about";
import StarWars from "../pages/star-wars";
import CreateMovie from "../pages/movies/create";
import ListMovies from "../pages/movies/list";
let router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about/:id",
    Component: About,
  },
  {
    path: "/star-wars",
    Component: StarWars,
  },
  {
    path: "/movies/create",
    Component: CreateMovie,
  },
  {
    path: "/movies",
    Component: ListMovies,
  },
]);

export default router;
