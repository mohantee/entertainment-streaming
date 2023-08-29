import PreviewGrid from "../components/PreviewGrid/PreviewGrid";
import useShowsStore from "../store/shows";

const Home = () => {
  const shows = useShowsStore((state) => state.shows);
  console.log(shows);

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
