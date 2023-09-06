import { Show } from "../../store/shows";
import "./MediaMeta.css";
import MovieIcon from "../../assets/icon-category-movie.svg";
import TVSeriesIcon from "../../assets/icon-category-tv.svg";

interface MediaMetaProps {
  show: Show;
}

const MediaMeta = (props: MediaMetaProps) => {
  return (
    <div className="media-meta">
      <h3 className="title" id="show-title" aria-hidden="true">
        {props.show.title}
      </h3>
      <dl>
        <dt className="sr-only">Year Released</dt>
        <dd className="year">{props.show.year}</dd>
        <span aria-hidden="true">•</span>
        <dt className="sr-only">Category</dt>
        {props.show.category === "Movie" ? <MovieIcon /> : <TVSeriesIcon />}
        <dd className="category">{props.show.category}</dd>
        <span aria-hidden="true">•</span>
        <dt className="sr-only">Rating</dt>
        <dd className="rating">{props.show.rating}</dd>
      </dl>
    </div>
  );
};

export default MediaMeta;
