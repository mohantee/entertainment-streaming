import PreviewGrid from "../components/PreviewGrid/PreviewGrid";
import useFetchShows from "../hooks/useFetchShows";

const Home = () => {
  const shows = useFetchShows();

  if (!shows) {
    return <h1>Loading...</h1>;
  }

  const trendingShows = shows.filter((show) => show.isTrending);

  return (
    <>
      <PreviewGrid shows={trendingShows} heading="Trending" isTrending />
      <PreviewGrid shows={shows} heading="Recommended for you" />
    </>
  );
};

export default Home;
