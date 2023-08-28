import { useState, useEffect } from "react";
import { Show } from "../components/PreviewGrid/PreviewGrid";

const useFetchShows = () => {
  const [shows, setShows] = useState<Show[]>([]);

  useEffect(() => {
    fetch("../data.json")
      .then((res) => res.json())
      .then((data) => setShows(data as Show[]))
      .catch(() => console.log("error"));
  }, []);

  return shows;
};

export default useFetchShows;
