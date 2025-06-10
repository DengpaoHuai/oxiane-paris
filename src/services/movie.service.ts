import type { Movie } from "../types/movie";

const url = "https://crudcrud.com/api/a00f03b8251741acb13ca9068de21577";

export const createMovie = async (movie: Movie) => {
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
