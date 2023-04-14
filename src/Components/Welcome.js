import React from 'react';
import WelcomeStyles from '../styles/Welcome.module.css';

const Welcome = () => {

  return (
    <div className={WelcomeStyles.main}>
        <h1>Welcome Dr. Walid</h1>
        <div className={WelcomeStyles.card}>
        </div>
    </div>

  );
};

export default Welcome;