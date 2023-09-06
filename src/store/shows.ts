import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Show {
  title: string;
  thumbnail: {
    trending?: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: "Movie" | "TV Series";
  rating: "PG" | "E" | "18+";
  isBookmarked: boolean;
  isTrending: boolean;
}

interface ShowsState {
  shows: Show[];
  toggleBookmark: (show: Show) => void;
  fetchShows: () => Promise<void>;
}

const useShowsStore = create<ShowsState>()(
  persist(
    (set) => ({
      shows: [],

      toggleBookmark: (bookmark) =>
        set((state) => {
          const newShows = [...state.shows];
          const indexOfBookmark = newShows.findIndex(
            (show) => show.title === bookmark.title,
          );
          newShows[indexOfBookmark].isBookmarked =
            !newShows[indexOfBookmark].isBookmarked;
          return { ...state, shows: newShows };
        }),

      fetchShows: async () => {
        const response = await fetch("./data.json");
        const data = (await response.json()) as Show[];
        set({ shows: data });
      },
    }),

    {
      name: "shows-storage", // name of item in the storage (must be unique)
      partialize: (state) => ({ shows: state.shows }),
    },
  ),
);

export default useShowsStore;
