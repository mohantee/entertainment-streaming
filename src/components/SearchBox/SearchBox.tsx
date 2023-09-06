import "./SearchBox.css";
import IconSearch from "../../assets/icon-search.svg";
import { useLocation } from "react-router-dom";

interface SearchBoxProps {
  search: [
    searchValue: string,
    setSearchValue: React.Dispatch<React.SetStateAction<string>>,
  ];
}

const SearchBox = (props: SearchBoxProps) => {
  const [searchValue, setSearchValue] = props.search;
  const location = useLocation();

  let searchBoxText;

  if (location.pathname === "/home")
    searchBoxText = "Search for movies or TV series";
  if (location.pathname === "/movies") searchBoxText = "Search for movies";
  if (location.pathname === "/tv-series")
    searchBoxText = "Search for TV series";
  if (location.pathname === "/bookmarks")
    searchBoxText = "Search for bookmarks";

  return (
    <div className="search-box-group">
      <IconSearch />
      <label htmlFor="search" className="sr-only">
        Search for Movies or TV series
      </label>
      <input
        id="search"
        type="text"
        className="bg-dark search-box"
        placeholder={searchBoxText}
        autoComplete="off"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
