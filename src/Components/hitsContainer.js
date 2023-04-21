import { connectHits } from "react-instantsearch-dom";

function HitsContainer({ hits }) {
  console.log(hits);
  return (
    <div>
      {hits.map((hit) => (
        <div key={hit.objectID}>
          <h2>
            {hit.firstName} {hit.lastName}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default connectHits(HitsContainer);
