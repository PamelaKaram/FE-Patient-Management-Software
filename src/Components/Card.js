import React from 'react';
import buttonStyles from '../styles/HomeCards.module.css';
const Card = ({ title, buttonColor, buttonText, onClick }) => {
  return (
    <div className={`${buttonStyles.card} ${buttonStyles[buttonColor]}`} onClick={onClick}>
      <h3>{title}</h3>
      <button className={`${buttonStyles.button} ${buttonStyles[buttonColor]}`}>
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
