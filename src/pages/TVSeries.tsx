import PreviewGrid from "../components/PreviewGrid/PreviewGrid";
import useFetchShows from "../hooks/useFetchShows";

const TVSeries = () => {
  const shows = useFetchShows();

  const tvSeries = shows.filter((show) => show.category === "TV Series");

  if (!shows) {
    return <h1>Loading...</h1>;
  }

  return <PreviewGrid shows={tvSeries} heading="TV Series" />;
};

export default TVSeries;
