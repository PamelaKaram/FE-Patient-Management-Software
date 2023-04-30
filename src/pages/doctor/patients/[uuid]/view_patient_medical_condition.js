import React, { useState, useEffect } from "react";
import axios from "axios";
import Styles from "../styles/ViewPatientMedicalCondition.module.css";

const ViewPatientMedicalCondition = ({ userId }) => {
  const [textData, setTextData] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [userId]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`API_URL/users/\${userId}/medical_condition`, { responseType: "text" }); // Replace with API URL
      setTextData(response.data);
    } catch (error) {
      setError("Failed to fetch data from the API.");
    }
  };

  return (
    <div className={Styles.container}>
      {error ? (
        <p className={Styles.error}>{error}</p>
      ) : (
        <div className={Styles.textData}>
          <pre>{textData}</pre>
        </div>
      )}
    </div>
  );
};

export default ViewPatientMedicalCondition;
