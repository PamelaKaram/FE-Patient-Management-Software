import React, { useState } from "react";
import axios from "../../lib/axios.js";

import PropTypes from "prop-types";
import Styles from "../styles/ChangePatientMedicalConditionPopup.module.css";
import useAxiosAuth from "../../lib/hooks/useAxiosAuth.js";

const AnswerQuestion = ({ isOpen, onClose, question }) => {
  const [textInput, setTextInput] = useState("");

  const axiosAuth = useAxiosAuth();

  const handleSubmit = async () => {
    try {
      await axiosAuth.post("/questions/answer", {
        questionId: question.id,
        answer: textInput,
      });
      onClose();
    } catch (e) {
      console.log(e);
    }
  };

  const handleClose = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={Styles.overlay}>
      <div className={Styles.popup}>
        <h3 className={Styles.title}>Question:</h3>
        <p>{question.question}</p>
        <button className={Styles.closeButtonX} onClick={handleClose}>
          X
        </button>
        <textarea
          className={Styles.textBox}
          value={textInput}
          placeholder="Write your Answer..."
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

AnswerQuestion.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  patientId: PropTypes.string.isRequired,
};

export default AnswerQuestion;
