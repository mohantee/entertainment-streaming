import useShowsStore from "../store/shows";
import MediaGrid from "../components/MediaGrid/MediaGrid";
import "./Home.css";
import MediaCard from "../components/MediaCard/MediaCard";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const unfilteredShows = useShowsStore((state) => state.shows);
  const [searchValue] = useOutletContext<[searchValue: string]>();
  const filteredShowsTrending = unfilteredShows.filter(
    (show) =>
      show.title.toLowerCase().includes(searchValue.toLowerCase()) &&
      show.isTrending,
  );

  const filteredShows = unfilteredShows.filter((show) =>
    show.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <div className="flow home-layout">
      <h2 className="fs-700">Trending</h2>
      <MediaGrid slider>
        {filteredShowsTrending.map((show) => (
          <MediaCard key={show.title} size="lg" show={show} />
        ))}
      </MediaGrid>
      <h2 className="fs-700">Recommended for you</h2>
      <MediaGrid>
        {filteredShows.map((show) => (
          <MediaCard key={show.title} size="md" show={show} />
        ))}
      </MediaGrid>
    </div>
  );
};

export default Home;
