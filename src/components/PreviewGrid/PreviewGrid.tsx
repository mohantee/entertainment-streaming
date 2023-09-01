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
  category: "Movie" | "TV Series";
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

interface PreviewGridProps {
  shows: Show[];
  heading: string;
  isTrending?: boolean;
}

const PreviewGrid = (props: PreviewGridProps) => {
  return (
    <section className="preview-grid">
      <h2 className="preview-grid-heading">{props.heading}</h2>
      <ul className={props.isTrending ? "shows-grid trending" : "shows-grid"}>
        {props.shows.map((show) => {
          if (props.isTrending) {
            return (
              <li key={show.title}>
                <TrendingCard details={show} />
              </li>
            );
          }
          return (
            <li key={show.title}>
              <PreviewCard details={show} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default PreviewGrid;
