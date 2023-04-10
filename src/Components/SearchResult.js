import SideStyles from "../styles/SearchResult.module.css";

const SearchResult = ({ result }) => {
  return (
    <div
      className={SideStyles.searchResult}
      onClick={(e) => alert(`You selected ${result}!`)}
    >
      {result}
    </div>
  );
};

export default SearchResult;