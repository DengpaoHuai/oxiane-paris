import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import type { Movie } from "./get-movies";

export const movieSchema = z.object({
  title: z.string().min(2, "Trop court"),
  description: z.string().min(1),
  rating: z.coerce.number().min(1).max(5),
});

//export type Movie = z.infer<typeof movieSchema>;

export const createMovie = async (movie: Omit<Movie, "_id">) => {
  await fetch(`${import.meta.env.VITE_API_URL}/movies`, {
    method: "POST",
    body: JSON.stringify(movie),
  });
};

export const useCreateMovie = () => {
  return useMutation({
    mutationFn: createMovie,
  });
};
