import { useEffect } from "react";
import useShowsStore from "../store/shows";

// populates the store on intial load
const useInitializeStore = () => {
  const [fetchShows, shows] = useShowsStore((state) => [
    state.fetchShows,
    state.shows,
  ]);

  useEffect(() => {
    if (!shows.length)
      fetchShows().catch(() =>
        console.error("Couldn't fetch shows successfully"),
      ); // populate only if shows not already available in localStorage
  }, [fetchShows, shows.length]);
};

export default useInitializeStore;
