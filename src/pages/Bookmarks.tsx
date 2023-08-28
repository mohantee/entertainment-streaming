import PreviewGrid from "../components/PreviewGrid/PreviewGrid";
import useFetchShows from "../hooks/useFetchShows";

const Bookmarks = () => {
  const shows = useFetchShows();

  const bookmarkedMovies = shows.filter(
    (show) => show.isBookmarked && show.category === "Movie",
  );
  const bookmarkedTVSeries = shows.filter(
    (show) => show.isBookmarked && show.category === "TV Series",
  );

  if (!shows) return <h1>Loading...</h1>;

  return (
    <>
      <PreviewGrid heading="Bookmarked Movies" shows={bookmarkedMovies} />
      <PreviewGrid heading="Bookmarked TV Series" shows={bookmarkedTVSeries} />
    </>
  );
};

export default Bookmarks;
