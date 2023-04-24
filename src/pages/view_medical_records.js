import React, { useState, useEffect } from "react";
import axios from "axios";
import fileIcon from "../icons/greenFileIcon.svg";
import Styles from "../styles/ViewPatientMedicalRecordsTests.module.css";

const ViewPatientMedicalRecordsTests = ({ patientId }) => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [patientId]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`API_URL/patients/\${patientId}/records`); // Replace with API URL and include patientId
      setFiles(response.data);
    } catch (error) {
      setError("Failed to fetch data from the API.");
    }
  };

  const openFile = (file) => {
    window.open(file.url, "_blank");
  };

  return (
    <div className={Styles.container}>
      {error ? (
        <p>{error}</p>
      ) : (
        files.map((file, index) => (
          <div key={index} className={Styles.fileRow}>
            <img src={fileIcon} alt="File icon" className={Styles.fileIcon} />
            <button className={Styles.fileButton} onClick={() => openFile(file)}>
              {file.name}
            </button>
            <span className={Styles.fileSize}>{file.size} bytes</span>
          </div>
        ))
      )}
    </div>
  );
};

export default ViewPatientMedicalRecordsTests;