import { connectHits } from "react-instantsearch-dom";
import Link from "next/link";
import styles from "../styles/HitsContainer.module.css";

function HitsContainer({ hits }) {
  console.log(hits);
  return (
    <div className={styles.container}>
      {hits.map((hit) => (
        <div key={hit.objectID} className={styles.hit}>
            <Link href={`/pharm_patient_medical_prescription?patientId=${hit.objectID}`}>
                <a>{hit.firstName} {hit.lastName}</a>
            </Link>
        </div>
      ))}
    </div>
  );
}

export default connectHits(HitsContainer);