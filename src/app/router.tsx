import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useMemo, lazy } from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";
import Home from "./(dashboard)/home";
import StarWars from "./(dashboard)/star-wars";
import CreateMovie from "./(dashboard)/movies/create";
import ListMovies from "./(dashboard)/movies/list";
import {
  getMovies,
  queryMoviesOptions,
} from "../features/movies/api/get-movies";

export const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: "/",
      Component: Home,
    },
    {
      path: "/about",
      //lazy import
      Component: lazy(() => import("./(dashboard)/about")),
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
      loader: async () => {
        await queryClient.fetchQuery(queryMoviesOptions);
        // await queryClient.prefetchQuery(queryMoviesOptions);
      },
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};
