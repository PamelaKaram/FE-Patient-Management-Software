import React from 'react';
import contactIcon from '../icons/pharmacyOrangeContactIcon.svg';
import inboxIcon from '../icons/pharmacyOrangeInboxIcon.svg';
import Image from "next/image";
import SideStyles from '../styles/InfoBoxes.module.css';

function InfoBoxes() {
    return (
      <div className={SideStyles.container}>
        <div className={SideStyles.contactInfo}>
            <Image 
            src={contactIcon.src} 
            alt="contact" 
            width={25}
            height={25}
            className="contactImage"/>
            <div className={SideStyles.text}>
                <p><b>Dr. Walid Bou Karam</b></p>
                <p>Cardiologist</p>
            </div>
        </div>
