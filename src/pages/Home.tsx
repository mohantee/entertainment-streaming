import useShowsStore from "../store/shows";
import MediaGrid from "../components/MediaGrid/MediaGrid";
import "./Home.css";
import MediaCard from "../components/MediaCard/MediaCard";

const Home = () => {
  const shows = useShowsStore((state) => state.shows);
  const trendingShows = shows.filter((show) => show.isTrending);
  const flowStyle = { "--flow-space": "4rem" } as React.CSSProperties;

  return (
    <div className="flow" style={flowStyle}>
      <MediaGrid slider>
        {trendingShows.map((show) => (
          <MediaCard key={show.title} size="lg" show={show} />
        ))}
      </MediaGrid>
      <MediaGrid>
        {shows.map((show) => (
          <MediaCard key={show.title} size="md" show={show} />
        ))}
      </MediaGrid>
    </div>
  );
};

export default Home;
