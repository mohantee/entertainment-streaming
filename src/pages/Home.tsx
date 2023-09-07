import useShowsStore from "../store/shows";
import MediaGrid from "../components/MediaGrid/MediaGrid";
import "./Home.css";
import MediaCard from "../components/MediaCard/MediaCard";

const Home = () => {
  const shows = useShowsStore((state) => state.shows);
  const trendingShows = shows.filter((show) => show.isTrending);

  return (
    <div className="flow home-layout">
      <h2 className="fs-700">Trending</h2>
      <MediaGrid slider>
        {trendingShows.map((show) => (
          <MediaCard key={show.title} size="lg" show={show} />
        ))}
      </MediaGrid>
      <h2 className="fs-700">Recommended for you</h2>
      <MediaGrid>
        {shows.map((show) => (
          <MediaCard key={show.title} size="md" show={show} />
        ))}
      </MediaGrid>
    </div>
  );
};

export default Home;
