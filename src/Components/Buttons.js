import React from 'react';
import buttonStyles from '../styles/Buttons.module.css';
import { useRouter } from 'next/router';

const FirstButton = () => (
  
    <button className={buttonStyles.first}><a href="/view_medical_records" className={buttonStyles.act}>
      <h2>View Medical Records</h2></a>
    </button>
  );
  
  const SecondButton = () => 
  {
    const router = useRouter();
    return (
    <button 
    onClick={() => router.push("/")} 
    className={buttonStyles.second}>Medical Prescription
    </button>

  );
    }
  const ThirdButton = () =>
  {
  return (
    <button
    onClick={() => router.push("/")} 
    className={buttonStyles.third}>Medical Condition & History
    </button>
  );

  }
  const Buttons = () => (
    <div className={buttonStyles.style}>
      <FirstButton />
      <SecondButton />
      <ThirdButton />
    </div>
  );
 
  export default Buttons;
  