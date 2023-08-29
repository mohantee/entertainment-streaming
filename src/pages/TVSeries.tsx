import PreviewGrid from "../components/PreviewGrid/PreviewGrid";
import useShowsStore from "../store/shows";

const TVSeries = () => {
  const shows = useShowsStore((state) => state.shows);

  const tvSeries = shows.filter((show) => show.category === "TV Series");

  if (!shows) {
    return <h1>Loading...</h1>;
  }

  return <PreviewGrid shows={tvSeries} heading="TV Series" />;
};

export default TVSeries;
