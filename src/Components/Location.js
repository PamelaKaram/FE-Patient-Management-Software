import React from 'react';
import Image from "next/image";
import hospitalIcon from '../icons/hospitalIcon.svg'
import clinicIcon from '../icons/clinicIcon.svg'
import SideStyles from '../styles/Location.module.css'

function Locations() {
    return (
        <div className={SideStyles.locContainer}>
            <div className={SideStyles.locbox}>
                <Image 
                src={hospitalIcon.src} 
                alt="hospital" 
                width={200}
                height={200}
                className={SideStyles.locationImage}/>
                <div className={SideStyles.text}>
                    <p><b>Arz Hospital</b></p>
                    <p className={SideStyles.greyText}>Zalka, Lebanon</p>
                </div>
            </div>
