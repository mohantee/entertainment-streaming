import { Show } from "../ShowsList/ShowsList";

interface propTypes {
  details: Show;
}

const PreviewCard = (props: propTypes) => {
  return <div className="preview-card">{props.details.title}</div>;
};

export default PreviewCard;
