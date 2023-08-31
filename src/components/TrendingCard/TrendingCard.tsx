import { Show } from "../PreviewGrid/PreviewGrid";
import "./TrendingCard.css";
import CategoryMovie from "../../assets/icon-category-movie.svg";
import CategoryTV from "../../assets/icon-category-tv.svg";
import PlayIcon from "../../assets/icon-play.svg";
import useShowsStore from "../../store/shows";
import { Link } from "react-router-dom";

interface TrendingCardProps {
  details: Show;
}

const TrendingCard = (props: TrendingCardProps) => {
  const { isBookmarked, title, year, thumbnail, category, rating } =
    props.details;

  const toggleBookmark = useShowsStore((state) => state.toggleBookmark);
  return (
    <Link
      to=""
      className="trending-card"
      onClick={(e) => e.currentTarget.blur()}
    >
      <div
        className="thumbnail"
        style={{ backgroundImage: `url(${thumbnail.trending?.large})` }}
      >
        <div className="play-button">
          <img src={PlayIcon} className="play-icon" />
          <p>Play</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 32 32"
          fill="none"
          className="bookmark-icon"
          onClick={(e) => {
            toggleBookmark(props.details);
            e.currentTarget.blur();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ")
              toggleBookmark(props.details);
          }}
          tabIndex={0}
        >
          <circle
            opacity="0.500647"
            cx="16"
            cy="16"
            r="16"
            fill="#10141E"
            className="bookmark-icon-circle"
          />
          <path
            d="M20.7112 9.771L20.7215 9.77548L20.7319 9.77965C20.7992 9.80657 20.8386 9.84049 20.8705 9.88692C20.9032 9.93458 20.9167 9.97786 20.9167 10.0364V21.9636C20.9167 22.0221 20.9032 22.0654 20.8705 22.1131C20.8386 22.1595 20.7992 22.1934 20.7319 22.2203L20.7237 22.2236L20.7156 22.2271C20.7107 22.2292 20.6807 22.2407 20.6094 22.2407C20.5085 22.2407 20.4397 22.2142 20.3686 22.15L16.3572 18.2346L15.8333 17.7233L15.3095 18.2346L11.2975 22.1505C11.2129 22.2276 11.1421 22.25 11.0573 22.25C11.02 22.25 10.9882 22.2433 10.9555 22.229L10.9452 22.2245L10.9347 22.2203C10.8674 22.1934 10.8281 22.1595 10.7962 22.1131C10.7635 22.0654 10.75 22.0221 10.75 21.9636V10.0364C10.75 9.97786 10.7635 9.93458 10.7962 9.88692C10.8281 9.84049 10.8674 9.80657 10.9347 9.77965L10.9452 9.77548L10.9555 9.771C10.9882 9.75674 11.02 9.75 11.0573 9.75H20.6094C20.6466 9.75 20.6784 9.75674 20.7112 9.771Z"
            stroke="white"
            strokeWidth="1.5"
            className={`bookmark-icon-path ${isBookmarked ? "active" : ""}`}
          />
        </svg>
        <div className="position-absolute">
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
      </div>
    </Link>
  );
};

export default TrendingCard;
