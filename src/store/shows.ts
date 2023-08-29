import { create } from "zustand";
import { Show } from "../components/PreviewGrid/PreviewGrid";

interface ShowsState {
  shows: Show[];
  toggleBookmark: (show: Show) => void;
  fetchShows: () => Promise<void>;
}

const useShowsStore = create<ShowsState>()((set) => ({
  shows: [],

  toggleBookmark: (bookmark) =>
    set((state) => {
      const newShows = [...state.shows];
      const indexOfBookmark = newShows.findIndex(
        (show) => show.title === bookmark.title,
      );
      newShows[indexOfBookmark].isBookmarked =
        !newShows[indexOfBookmark].isBookmarked;
      // console.log(newShows[indexOfBookmark].isTrending);
      return { ...state, shows: newShows };
    }),

  fetchShows: async () => {
    const response = await fetch("./data.json");
    const data = (await response.json()) as Show[];
    set({ shows: data });
  },
}));

export default useShowsStore;
