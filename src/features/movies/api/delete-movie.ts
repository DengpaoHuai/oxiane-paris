import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Movie } from "./get-movies";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const deleteMovie = async (id: string) => {
  await wait(4000);
  //throw new Error("Error");
  await fetch(`${import.meta.env.VITE_API_URL}/movies/${id}`, {
    method: "DELETE",
  });
};

const useDeleteMovie = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteMovie,
    onMutate: (id: string) => {
      const queryData: Movie[] = queryClient.getQueryData(["movies"])!;

      queryClient.setQueryData(["movies"], (old: Movie[]) =>
        old.filter((movie) => movie._id !== id)
      );

      return { queryData };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(["movies"], context?.queryData);
    },
    onSettled: () => {
      // queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
  });
};

export default useDeleteMovie;
