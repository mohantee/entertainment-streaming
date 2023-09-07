import { Show } from "../../store/shows";
interface MediaImageProps {
  show: Show;
  size: "md" | "lg";
}
const MediaImage = (props: MediaImageProps) => {
  const { regular, trending } = props.show.thumbnail;
  return props.size === "lg" ? (
    <picture>
      <source media="(min-width: 480px)" srcSet={trending?.large} />
      <source media="(min-width: 0px)" srcSet={trending?.small} />
      <img src={trending?.large} alt="" />
    </picture>
  ) : (
    <picture>
      <source media="(min-width: 768px)" srcSet={regular.large} />
      <source media="(min-width: 480px)" srcSet={regular.medium} />
      <source media="(min-width: 0px)" srcSet={regular.small} />
      <img src={regular.large} alt="" />
    </picture>
  );
};

export default MediaImage;
