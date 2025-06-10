import type { Movie } from "../types/movie";

const url = "https://crudcrud.com/api/9f81b263d5d04248adb24c023b8b2066";

export const createMovie = async (movie: Omit<Movie, "_id">) => {
  const response = await fetch(`${url}/movies`, {
    method: "POST",
    body: JSON.stringify(movie),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

export const getMovies = async () => {
  const response = await fetch(`${url}/movies`);
  return response.json();
};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const deleteMovie = async (id: string) => {
  await wait(4000);
  throw new Error("Error");
  const response = await fetch(`${url}/movies/${id}`, {
    method: "DELETE",
  });
};
