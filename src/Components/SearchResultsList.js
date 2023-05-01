import SideStyles from "../styles/SearchResultsList.module.css";
import { SearchResult } from "./SearchResult";

const SearchResultsList = ({ results }) => {
  return (
    <div className={SideStyles.resultsList}>
      {results.map((result, id) => {
        return <SearchResult result={result.name} key={id} />;
      })}
    </div>
  );
};

export default SearchResultsList;