import React, { useState, useEffect } from 'react';
import { connectHits } from 'react-instantsearch-dom';
import axios from 'axios';

function HitsContainer({ hits }) {
  const [accessStatus, setAccessStatus] = useState({});

  useEffect(() => {
    const initialStatus = {};
    hits.forEach((hit) => {
      initialStatus[hit.objectID] = false; // Set initial access status to false
    });
    setAccessStatus(initialStatus);
  }, [hits]);

  const toggleAccess = async (pharmacyId) => {
    const newStatus = !accessStatus[pharmacyId];
    setAccessStatus({ ...accessStatus, [pharmacyId]: newStatus });

    try {
      // Replace 'your-api-endpoint' with the actual API endpoint
      await axios.post('your-api-endpoint', {
        patientId: 'your-patient-id', // Replace with the actual patient ID
        pharmacyId,
        access: newStatus,
      });
    } catch (error) {
      console.error('Error updating access status:', error);
    }
  };

  return (
    <div>
      {hits.map((hit) => (
        <div key={hit.objectID}>
          <h2>{hit.name}</h2>
          <button onClick={() => toggleAccess(hit.objectID)}>
            {accessStatus[hit.objectID] ? 'Remove Access' : 'Grant Access'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default connectHits(HitsContainer);
