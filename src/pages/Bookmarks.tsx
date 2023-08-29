import PreviewGrid from "../components/PreviewGrid/PreviewGrid";
import useShowsStore from "../store/shows";
import { FiAlertCircle } from "react-icons/fi";
import "./Bookmarks.css";

const Bookmarks = () => {
  const bookmarks = useShowsStore((state) =>
    state.shows.filter((show) => show.isBookmarked),
  );
  const bookmarkedMovies = bookmarks.filter(
    (bookmark) => bookmark.category === "Movie",
  );
  const bookmarkedTVSeries = bookmarks.filter(
    (bookmark) => bookmark.category === "TV Series",
  );

  const UIEmptyBookmarksAlert = (
    <div className="bookmarks-empty">
      <FiAlertCircle size={35} />
      <h3 className="empty-alert">Add bookmarks to see them here</h3>
    </div>
  );

  const UIShowBookmarks = (
    <>
      {bookmarkedMovies.length ? (
        <PreviewGrid heading="Bookmarked Movies" shows={bookmarkedMovies} />
      ) : null}
      {bookmarkedTVSeries.length ? (
        <PreviewGrid
          heading="Bookmarked TV Series"
          shows={bookmarkedTVSeries}
        />
      ) : null}
    </>
  );

  return !bookmarks.length ? UIEmptyBookmarksAlert : UIShowBookmarks;
};

export default Bookmarks;
