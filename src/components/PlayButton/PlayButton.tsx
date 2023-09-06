import PlayButtonIcon from "../../assets/icon-play.svg";
import "./PlayButton.css";

const PlayIcon = () => {
  return (
    <span className="play-icon">
      <PlayButtonIcon />
      <span>Play</span>
    </span>
  );
};

export default PlayIcon;
