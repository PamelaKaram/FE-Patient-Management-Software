import { useState } from "react";
import SearchIcon from "../icons/orangeSearchBarIcon.svg";
import SearchBar from './SearchBar';
import SearchResultsList from './SearchResultsList';
import SideStyles from "../styles/finalSearchBar.module.css"

export default function Searchbar() {
  const [results, setResults] = useState([]);

  return (
    <div className={SideStyles.App}>
      <div className={SideStyles.searchBarContainer}>
        <SearchBar setResults={setResults} iconUrl={SearchIcon}/>
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    </div>
  );
}