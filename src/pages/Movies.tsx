import PreviewGrid from "../components/PreviewGrid/PreviewGrid";
import useFetchShows from "../hooks/useFetchShows";

const Movies = () => {
  const shows = useFetchShows();

  if (!shows) {
    return <h1>Loading...</h1>;
  }

  const movies = shows.filter((show) => show.category === "Movie");

  return <PreviewGrid shows={movies} heading="Movies" />;
};

export default Movies;
