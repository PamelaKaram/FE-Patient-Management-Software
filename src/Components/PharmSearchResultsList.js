import SearchResult from "./PharmSearchResults";
import SideStyles from "../styles/SearchResultsList.module.css";

const SearchResultsList = ({ results, setResults }) => {
  return (
    <div className={SideStyles.resultsList}>
      {results.map((result, id) => {
        return (
          <SearchResult
            result={result}
            key={id}
            setResults={setResults}
            results={results}
          />
        );
      })}
    </div>
  );
};

export default SearchResultsList;