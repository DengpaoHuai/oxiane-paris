import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { persist, createJSONStorage } from "zustand/middleware";
import type { Movie } from "../features/movies/api/get-movies";

interface MoviesMetadata {
  movies: Movie[];
  total: number;
  page: number;
  limit: number;
}

interface MoviesState {
  moviesMetadata: MoviesMetadata;
  lastTimeFetched: number;
  setLastTimeFetched: (lastTimeFetched: number) => void;
  incrementPage: () => void;
  decrementPage: () => void;
  setMoviesMetadata: (moviesMetadata: MoviesMetadata) => void;
}

const useMoviesStore = create<MoviesState>()(
  devtools(
    persist(
      (set) => ({
        moviesMetadata: {
          movies: [],
          total: 0,
          page: 1,
          limit: 10,
        },
        lastTimeFetched: 0,
        setLastTimeFetched: (lastTimeFetched: number) =>
          set({ lastTimeFetched }),
        incrementPage: () =>
          set((state) => ({
            moviesMetadata: {
              ...state.moviesMetadata,
              page: state.moviesMetadata.page + 1,
            },
          })),
        decrementPage: () =>
          set((state) => ({
            moviesMetadata: {
              ...state.moviesMetadata,
              page: state.moviesMetadata.page - 1,
            },
          })),
        setMoviesMetadata: (moviesMetadata: MoviesMetadata) =>
          set({ moviesMetadata }),
      }),
      {
        name: "movies-metadata",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default useMoviesStore;
