import React from 'react';
import buttonStyles from '../styles/Buttons.module.css';

const FirstButton = () => (
    <button className={buttonStyles.first}>Medical Records</button>
  );
  
  const SecondButton = () => (
    <button className={buttonStyles.second}>Medical Prescription</button>
  );
  
  const ThirdButton = () => (
    <button className={buttonStyles.third}>Medical Condition & History</button>
  );


  const Buttons = () => (
    <div className={buttonStyles.style}>
      <FirstButton />
      <SecondButton />
      <ThirdButton />
    </div>
  );
  
  export default Buttons;