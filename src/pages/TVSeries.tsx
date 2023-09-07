import { useOutletContext } from "react-router-dom";
import MediaGrid from "../components/MediaGrid/MediaGrid";
import MediaCard from "../components/MediaCard/MediaCard";
import useShowsStore from "../store/shows";
import { FiAlertCircle } from "react-icons/fi";

const TVSeries = () => {
  const unfilteredShows = useShowsStore((state) => state.shows);
  const [searchValue] = useOutletContext<[searchValue: string]>();

  const filteredShows = unfilteredShows.filter(
    (show) =>
      show.title.toLowerCase().includes(searchValue.toLowerCase()) &&
      show.category === "TV Series",
  );

  if (!filteredShows.length) {
    return (
      <div className="search-empty">
        <FiAlertCircle size={35} />
        <h3 className="empty-alert">No results</h3>
      </div>
    );
  }

  return (
    <div className="flow">
      <h2 className="fs-700">TV Series</h2>
      <MediaGrid>
        {filteredShows.map((show) => (
          <MediaCard key={show.title} size="md" show={show} />
        ))}
      </MediaGrid>
    </div>
  );
};

export default TVSeries;
