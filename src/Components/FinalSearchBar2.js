import { useState } from "react";

import SearchBar2 from './SearchBar2';
import SearchResultsList from './SearchResultsList';
import SideStyles from "../styles/FinalSearchBar2.module.css"

export default function Searchbar() {
  const [results, setResults] = useState([]);

  return (
    <div className={SideStyles.App}>
      <div className={SideStyles.searchBarContainer}>
        <SearchBar2 setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    </div>
  );
}