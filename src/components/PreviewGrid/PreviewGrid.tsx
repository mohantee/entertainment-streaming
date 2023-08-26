import PreviewCard from "../PreviewCard/PreviewCard";
import TrendingCard from "../TrendingCard/TrendingCard";
import "./PreviewGrid.css";

export interface Show {
  title: string;
  thumbnail: {
    trending?: {
      small: string;
      medium?: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

interface propTypes {
  shows: Show[];
  heading: string;
  isTrending?: boolean;
}

const PreviewGrid = (props: propTypes) => {
  return (
    <div className="preview-grid">
      <h2 className="preview-grid-heading">{props.heading}</h2>
      <div className={props.isTrending ? "shows-grid trending" : "shows-grid"}>
        {props.shows.map((show) => {
          if (props.isTrending) {
            return <TrendingCard key={show.title} details={show} />;
          }
          return <PreviewCard key={show.title} details={show} />;
        })}
      </div>
    </div>
  );
};

export default PreviewGrid;
