import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Show } from "../components/PreviewGrid/PreviewGrid";

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
