// import PreviewGrid from "../components/PreviewGrid/PreviewGrid";
import MediaGrid from "../components/MediaGrid/MediaGrid";
import MediaCard from "../components/MediaCard/MediaCard";
import useShowsStore from "../store/shows";
import { FiAlertCircle } from "react-icons/fi";
import { useOutletContext } from "react-router-dom";
import "./Bookmarks.css";

const Bookmarks = () => {
  const bookmarks = useShowsStore((state) =>
    state.shows.filter((show) => show.isBookmarked),
  );

  const [searchValue] = useOutletContext<[searchValue: string]>();

  const filteredBookmarkedMovies = bookmarks.filter(
    (bookmark) =>
      bookmark.title.toLowerCase().includes(searchValue.toLowerCase()) &&
      bookmark.category === "Movie",
  );

  const filteredBookmarkedTVSeries = bookmarks.filter(
    (bookmark) =>
      bookmark.title.toLowerCase().includes(searchValue.toLowerCase()) &&
      bookmark.category === "TV Series",
  );

  const UIEmptyBookmarksAlert = (
    <div className="bookmarks-empty">
      <FiAlertCircle size={35} />
      <h3 className="empty-alert">Add bookmarks to see them here</h3>
    </div>
  );

  if (!bookmarks.length) return UIEmptyBookmarksAlert;

  if (!filteredBookmarkedMovies.length && !filteredBookmarkedTVSeries.length) {
    return (
      <div className="search-empty">
        <FiAlertCircle size={35} />
        <h3 className="empty-alert">No results</h3>
      </div>
    );
  }

  const UIBookmarks = (
    <>
      {filteredBookmarkedMovies.length ? (
        <div className="flow bookmark-layout">
          <h2 className="fs-700">Bookmarked Movies</h2>
          <MediaGrid>
            {filteredBookmarkedMovies.map((show) => (
              <MediaCard key={show.title} size="md" show={show} />
            ))}
          </MediaGrid>
        </div>
      ) : null}
      {filteredBookmarkedTVSeries.length ? (
        <div className="flow bookmark-layout">
          <h2 className="fs-700">Bookmarked TV Series</h2>
          <MediaGrid>
            {filteredBookmarkedTVSeries.map((show) => (
              <MediaCard key={show.title} size="md" show={show} />
            ))}
          </MediaGrid>
        </div>
      ) : null}
    </>
  );

  return !bookmarks.length ? UIEmptyBookmarksAlert : UIBookmarks;
};

export default Bookmarks;
