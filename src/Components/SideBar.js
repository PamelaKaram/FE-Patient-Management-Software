import React from 'react';
import Image from "next/image";
import profileIcon from '../icons/profileIcon.svg'
import AppointmentButton from "./AppointmentButton"
import SideStyles from '../styles/SideBar.module.css'

const Sidebar = () => {
    return (
        <div className={SideStyles.container}>
            <Image 
            src={profileIcon.src} 
            alt="profile" 
            width={100}
            height={100}
            className={SideStyles.image}
            />
            <div className={SideStyles.textsContainer}>
                <h3 className={SideStyles.text}>Check Your Condition</h3>
                <p className={SideStyles.text}>Request an Appointment with</p>
                <p className={SideStyles.drName}>Dr. Abou Karam</p>
            </div>
            <AppointmentButton className={SideStyles.app} name="Request Appointment Now" path=""/>
        </div>
    );
};

export default Sidebar;