import PreviewGrid from "../components/PreviewGrid/PreviewGrid";
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

  const filteredBookmarkeTVSeries = bookmarks.filter(
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

  if (!filteredBookmarkedMovies.length && !filteredBookmarkeTVSeries.length) {
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
        <PreviewGrid
          heading="Bookmarked Movies"
          shows={filteredBookmarkedMovies}
        />
      ) : null}
      {filteredBookmarkeTVSeries.length ? (
        <PreviewGrid
          heading="Bookmarked TV Series"
          shows={filteredBookmarkeTVSeries}
        />
      ) : null}
    </>
  );

  return !bookmarks.length ? UIEmptyBookmarksAlert : UIBookmarks;
};

export default Bookmarks;
