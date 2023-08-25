import PreviewCard from "../PreviewCard/PreviewCard";
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
  type: string;
}

const PreviewGrid = (props: propTypes) => {
  return (
    <div>
      <h2 className="list-type">{props.type}</h2>
      <div className="shows-grid">
        {props.shows.map((show) => {
          return <PreviewCard key={show.title} details={show} />;
        })}
      </div>
    </div>
  );
};

export default PreviewGrid;
