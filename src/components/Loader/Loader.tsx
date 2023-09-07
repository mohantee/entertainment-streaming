import { Waveform } from "@uiball/loaders";
import "./Loader.css";
const Loader = () => {
  return (
    <div className="loader">
      <Waveform color="#FFF" size={100} />
    </div>
  );
};

export default Loader;
