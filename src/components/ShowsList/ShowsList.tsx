import PreviewCard from "../PreviewCard/PreviewCard";

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
  text: string;
}

const ShowsList = (props: propTypes) => {
  console.log(props.text);
  return (
    <div className="shows-grid">
      {props.shows.map((show) => {
        return <PreviewCard key={show.title} details={show} />;
      })}
    </div>
  );
};

export default ShowsList;
