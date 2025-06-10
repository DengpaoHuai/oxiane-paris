import { createBrowserRouter } from "react-router";

import Home from "../pages/home";
import About from "../pages/about";
import StarWars from "../pages/star-wars";
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
]);

export default router;
