import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import { searchClient } from "../typesenseAdapter";

function Search({ HitsContainer }) {
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
      <InstantSearch searchClient={searchClient} indexName="pharmacies">
        <SearchBox />
        <HitsContainer hitComponent={Hits} />
      </InstantSearch>
    </div>
  );
}

export default Search;