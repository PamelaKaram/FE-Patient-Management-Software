import React from 'react';
import Card from '../Components/Card.js';
import buttonStyles from '../styles/HomeCards.module.css';
import back from '../icons/headerBack.svg';
const CardList = () => {

  return (
    <header className= {buttonStyles.headerContainer}>
      <h1> Trust your health to the best specialists</h1>
      <h2>Dr. Abou Karam </h2>
    <div className={buttonStyles.cardsContainer}>
   
      <Card title="Stay up to date with the latest articles on health." buttonColor="primary" buttonText="Blogs & Articles" />
      <Card title="Good Health Good Wealth." buttonColor="secondary" buttonText="Tips" />
      <Card title="Are you looking for a cardiologist?" buttonColor="tertiary" buttonText="About" />
    </div>
    </header>
  );
};

export default CardList;



