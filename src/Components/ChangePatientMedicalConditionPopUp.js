import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Styles from '../styles/ChangePatientMedicalConditionPopup.module.css';

const ChangePatientMedicalConditionPopup = ({ isOpen, onClose, patientId }) => {
  const [textInput, setTextInput] = useState('');
  const [message, setMessage] = useState('');

  const postData = async (data) => {
    try {
      await axios.put(`/api/endpoint/\${patientId}`, data);
      setMessage('Success: Data submitted successfully.');
    } catch (error) {
      console.error('Error submitting data:', error);
      setMessage('Fail: Error submitting data.');
    }
  };

  const handleSubmit = () => {
    postData({ text: textInput }).then(() => {
      setTextInput('');
    });
  };

  const handleClose = () => {
    setTextInput('');
    setMessage('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={Styles.overlay}>
      <div className={Styles.popup}>
        <h3 className={Styles.title}>Change Patient Medical Condition</h3>
        <button className={Styles.closeButtonX} onClick={handleClose}>X</button>
        <textarea className={Styles.textBox} value={textInput} placeholder="Write the changes..." onChange={(e) => setTextInput(e.target.value)} />
        {message && <div className={Styles.message}>{message}</div>}
        <div className={Styles.buttonsContainer}>
          <button className={Styles.customButton} onClick={handleSubmit}>Submit</button>
          <button className={Styles.closeButton} onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

ChangePatientMedicalConditionPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  patientId: PropTypes.string.isRequired,
};

export default ChangePatientMedicalConditionPopup;
