import React from 'react';
import Card from '../Components/Card.js';
import buttonStyles from '../styles/HomeCards.module.css';
import back from '../icons/headerBack.svg';
import Image from 'next/image';
const CardList = () => {

  return (
    <header className= {buttonStyles.headerContainer}>
 <div className={buttonStyles.blueRectangle}>
        <Image
          className={buttonStyles.img}
          src={back.src}
          alt="Dr image"
          loading="lazy"
          width={100}
          height={100}
        />
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



