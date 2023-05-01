import { useState } from "react";
import SearchIcon from "../icons/coloredSearchIcon.svg";
import SearchBar from './PharmSearchBar';
import SearchResultsList from './PharmSearchResultsList';
import SideStyles from "../styles/finalSearchBar.module.css"

export default function Searchbar() {
  const [results, setResults] = useState([]);

  return (
    <div className={SideStyles.App}>
      <div className={SideStyles.searchBarContainer2}>
        <SearchBar setResults={setResults} iconUrl={SearchIcon}/>
        {results && results.length > 0 && <SearchResultsList results={results} setResults={setResults}/>}
      </div>
    </div>
  );
}