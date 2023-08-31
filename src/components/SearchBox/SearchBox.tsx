import "./SearchBox.css";
import IconSearch from "../../assets/icon-search.svg";

interface SearchBoxProps {
  search: [
    searchValue: string,
    setSearchValue: React.Dispatch<React.SetStateAction<string>>,
  ];
}

const SearchBox = (props: SearchBoxProps) => {
  const [searchValue, setSearchValue] = props.search;
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
        autoComplete="off"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
