import React, { useState } from "react";
import axios from "../../lib/axios.js";

import PropTypes from "prop-types";
import Styles from "../styles/ChangePatientMedicalConditionPopup.module.css";

const ChangePatientMedicalConditionPopup = ({
  isOpen,
  onClose,
  patientUUID,
}) => {
  const [textInput, setTextInput] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post("/addCondition", {
        condition: textInput,
        patientUUID,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleClose = () => {
    setTextInput("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={Styles.overlay}>
      <div className={Styles.popup}>
        <h3 className={Styles.title}>Change Patient Medical Condition</h3>
        <button className={Styles.closeButtonX} onClick={handleClose}>
          X
        </button>
        <textarea
          className={Styles.textBox}
          value={textInput}
          placeholder="Write the changes..."
          onChange={(e) => setTextInput(e.target.value)}
        />
        <div className={Styles.buttonsContainer}>
          <button className={Styles.customButton} onClick={handleSubmit}>
            Submit
          </button>
          <button className={Styles.closeButton} onClick={handleClose}>
            Close
          </button>
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
