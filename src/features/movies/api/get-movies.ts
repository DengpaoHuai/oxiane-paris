import {
  useQuery,
  useSuspenseQuery,
  type UseQueryOptions,
} from "@tanstack/react-query";

export type Movie = {
  _id: string;
  title: string;
  description: string;
  rating: number;
};

const waitfor = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const getMovies = async () => {
  await waitfor(2000);
  const response = await fetch(`${import.meta.env.VITE_API_URL}/movies`);
  return response.json();
};

export const queryMoviesOptions = {
  queryKey: ["movies"],
  queryFn: getMovies,
  //refetchOnWindowFocus: true,
};

export const useMovies = (
  options: Omit<UseQueryOptions<Movie[]>, "queryKey">
) => {
  return useQuery<Movie[]>({
    ...queryMoviesOptions,
    ...options,
  });
};
