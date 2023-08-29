import "./SearchBox.css";
import IconSearch from "../../assets/icon-search.svg";

const SearchBox = () => {
  return (
    <div className="search-box-group">
      <img src={IconSearch} className="search-icon" />
      <label htmlFor="search" className="sr-only">
        Search for Movies or TV series
      </label>
      <input
        id="search"
        type="text"
        className="bg-dark search-box"
        placeholder="Search for movies or TV series"
      />
    </div>
  );
};

export default SearchBox;
