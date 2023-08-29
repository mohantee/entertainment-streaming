import PreviewGrid from "../components/PreviewGrid/PreviewGrid";
import useShowsStore from "../store/shows";

const Movies = () => {
  const shows = useShowsStore((state) => state.shows);

  if (!shows) {
    return <h1>Loading...</h1>;
  }

  const movies = shows.filter((show) => show.category === "Movie");

  return <PreviewGrid shows={movies} heading="Movies" />;
};

export default Movies;
