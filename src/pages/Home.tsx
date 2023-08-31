import { useOutletContext } from "react-router-dom";
import PreviewGrid from "../components/PreviewGrid/PreviewGrid";
import useShowsStore from "../store/shows";
import { FiAlertCircle } from "react-icons/fi";
import "./Home.css";

const Home = () => {
  const unfilteredShows = useShowsStore((state) => state.shows);
  const [searchValue] = useOutletContext<[searchValue: string]>();

  const filteredShows = unfilteredShows.filter((show) =>
    show.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  if (!filteredShows.length) {
    return (
      <div className="search-empty">
        <FiAlertCircle size={35} />
        <h3 className="empty-alert">No results</h3>
      </div>
    );
  }

  const trendingShows = filteredShows.filter((show) => show.isTrending);

  return (
    <>
      {trendingShows.length ? (
        <PreviewGrid shows={trendingShows} heading="Trending" isTrending />
      ) : null}
      {filteredShows.length ? (
        <PreviewGrid shows={filteredShows} heading="Recommended for you" />
      ) : null}
    </>
  );
};

export default Home;
