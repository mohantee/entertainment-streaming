import { Link } from "react-router-dom";
import { Show } from "../../store/shows";
import "./MediaCard.css";
import MediaMeta from "../MediaMeta/MediaMeta";
import PlayIcon from "../PlayButton/PlayButton";
import BookmarkSwitch from "../BookmarkSwitch/BookmarkSwitch";

interface MediaCardProps {
  show: Show;
  size: "md" | "lg";
}

const MediaCard = ({ show, size }: MediaCardProps) => {
  let jsxToReturn;

  if (size === "lg" && show.thumbnail.trending) {
    jsxToReturn = (
      <article className="media-card" data-size={size} aria-label={show.title}>
        <Link to="" aria-label={`Play ${show.title}`}>
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={show.thumbnail.trending.large}
            />
            <img src={show.thumbnail.trending.large} alt="" />
          </picture>
          <PlayIcon />
        </Link>
        <BookmarkSwitch />
        <MediaMeta show={show} />
      </article>
    );
  } else {
    jsxToReturn = (
      <article className="media-card" data-size={size}>
        <div className="image-wrapper">
          <Link to="">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={show.thumbnail.regular.large}
              />
              <img src={show.thumbnail.regular.large} alt="" />
            </picture>
          </Link>
          <PlayIcon />
        </div>
        <BookmarkSwitch />
        <MediaMeta show={show} />
      </article>
    );
  }

  return jsxToReturn;
};

export default MediaCard;
