import { InstantSearch, SearchBox } from "react-instantsearch-dom";
import { searchClient } from "../typesenseAdapter";

function Search({ HitsContainer }) {
  console.log(searchClient);
  return (
    <div
      style={{
        width: "full",
        height: "full",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <h1>Search Patients</h1>
      <InstantSearch searchClient={searchClient} indexName="users">
        <SearchBox />
        <HitsContainer />
      </InstantSearch>
    </div>
  );
}

export default Search;
