import "./SearchBox.css";
import IconSearch from "../../assets/icon-search.svg";

const SearchBox = ({ text }: { text: string }) => {
  console.log(text); // shows undefined in browser??
  return (
    <div className="search-box-group">
      <img src={IconSearch} className="search-icon" />
      <input
        type="text"
        className="bg-dark search-box"
        placeholder="Search for movies or TV series"
      />
    </div>
  );
};

export default SearchBox;
