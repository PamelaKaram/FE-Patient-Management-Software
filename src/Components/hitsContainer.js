import { connectHits } from "react-instantsearch-dom";
import Link from "next/link";
import { useRouter } from "next/router";
import WelcomeStyles from "../styles/Welcome.module.css";

function HitsContainer({ hits }) {
  const router = useRouter();
  return (
    <div>
      {hits.map((hit) => (
        <div
          style={{
            cursor: "pointer",
          }}
          key={hit.objectID}
        >
          <div
            style={{
              display: "flex",
              minWidth: "350px",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.5rem",
              width: "100%",
            }}
          >
            <h2
              style={{
                width: "100%",
              }}
            >
              {hit.firstName} {hit.lastName}
            </h2>
            <button
              onClick={() => router.push(`/patients/${hit.objectID}`)}
              className={WelcomeStyles.button}
            >
              View Patient
            </button>
          </div>
        </div>
      ))}
      {hits.length === 0 && (
        <div
          style={{
            display: "flex",
            minWidth: "350px",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.5rem",
            width: "100%",
          }}
        >
          <h2
            style={{
              width: "100%",
            }}
          >
            None found
          </h2>
        </div>
      )}
    </div>
  );
}

export default connectHits(HitsContainer);
