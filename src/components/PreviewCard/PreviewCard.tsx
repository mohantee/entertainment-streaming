import { Show } from "../PreviewGrid/PreviewGrid";
import "./PreviewCard.css";
import CategoryMovie from "../../assets/icon-category-movie.svg";
import CategoryTV from "../../assets/icon-category-tv.svg";
import PlayIcon from "../../assets/icon-play.svg";
import BookmarkEmpty from "../../shared/SVGs/BookmarkEmpty";
import BookmarkFull from "../../shared/SVGs/BookmarkFull";

interface PreviewCardProps {
  details: Show;
}

const PreviewCard = (props: PreviewCardProps) => {
  const { isBookmarked, title, year, thumbnail, category, rating } =
    props.details;
  return (
    <div className="preview-card">
      <div
        className="image-container"
        style={{ backgroundImage: `url(${thumbnail.regular.large})` }}
      >
        <div className="play-button">
          <img src={PlayIcon} className="play-icon" />
          <p>Play</p>
        </div>
        {isBookmarked ? <BookmarkFull /> : <BookmarkEmpty />}
      </div>
      <div className="category-container">
        <span className="year">{year} • </span>
        <img
          className="category-icon"
          src={category === "Movie" ? CategoryMovie : CategoryTV}
        />
        <span className="category">{category} • </span>
        <span className="rating">{rating}</span>
      </div>
      <span className="title">{title}</span>
    </div>
  );
};

export default PreviewCard;
