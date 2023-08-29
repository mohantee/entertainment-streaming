import { useEffect } from "react";
import useShowsStore from "../store/shows";

// populates the store on intial load
const useInitializeStore = () => {
  const fetchShows = useShowsStore((state) => state.fetchShows);

  useEffect(() => {
    fetchShows().catch(() => console.log("error"));
  }, [fetchShows]);
};

export default useInitializeStore;
