import { Link } from "react-router-dom";
import { Show } from "../../store/shows";
import "./MediaCard.css";
import MediaMeta from "../MediaMeta/MediaMeta";
import PlayIcon from "../PlayButton/PlayButton";
import BookmarkSwitch from "../BookmarkSwitch/BookmarkSwitch";
import MediaImage from "../MediaImage/MediaImage";

interface MediaCardProps {
  show: Show;
  size: "md" | "lg";
}

const MediaCard = ({ show, size }: MediaCardProps) => {
  return (
    <article className="media-card" data-size={size} aria-label={show.title}>
      <div className="image-wrapper">
        <Link
          to=""
          aria-label={`Play ${show.title}`}
          onClick={(e) => e.currentTarget.blur()}
        >
          <MediaImage show={show} size={size} />
          <PlayIcon />
        </Link>
      </div>
      <BookmarkSwitch show={show} />
      <MediaMeta show={show} />
    </article>
  );
};

export default MediaCard;
