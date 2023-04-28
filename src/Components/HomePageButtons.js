import React from 'react';
import Card from '../Components/Card.js';
import buttonStyles from '../styles/HomeCards.module.css';
import back from '../icons/drImage.jpg';
import Image from 'next/image';
import homeImage from '../icons/backImage.jpg';
const CardList = () => {

  return (
    <header className={buttonStyles.headerContainer}>
      <div className={buttonStyles.blueRectangle}>
        <h1 className={buttonStyles.title}>
          Trust your health to the best specialists 
      
          <span> Dr. Abou Karam</span>
          </h1>
       
     
      </div>
      <div className={buttonStyles.cardsContainer}>

        <Card title="Stay up to date with the latest articles on health." buttonColor="primary" buttonText="Blogs & Articles" />
        <Card title="Good Health Good Wealth." buttonColor="secondary" buttonText="Tips" />
        <Card title="Are you looking for a cardiologist?" buttonColor="tertiary" buttonText="About" />
      </div>
    </header>
  );
};

export default CardList;



