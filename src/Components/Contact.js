import React from 'react';
import SideStyles from '../styles/Contact.module.css';
import phoneIcon from "../icons/phoneIcon.svg";
import inboxIcon from "../icons/inboxIcon.svg";
import locationIcon from "../icons/locationIcon.svg";
import timeIcon from "../icons/timeIcon.svg";
import exclamationIcon from "../icons/exclamationIcon.svg";
import Image from "next/image";

export default function Contact() {
    return (
        <div className={SideStyles.container}>
            <ul className={SideStyles.sets}>
                <li className={SideStyles.item}>
                    <Image 
                    src={phoneIcon.src} 
                    alt="Phone"  
                    width={33}
                    height={33}
                    className={SideStyles.imageClass} />
                    <p className={SideStyles.textClass}> 0X-XXX XXX</p>
                </li>
                <li className={SideStyles.item}>
                    <Image 
                    src={inboxIcon.src} 
                    alt="Inbox"  
                    width={33}
                    height={33}
                    className={SideStyles.imageClass} />
                    <p className={SideStyles.textClass}> example@gmail.com</p>
                </li>
                <li className={SideStyles.item}>
                    <Image 
                    src={locationIcon.src} 
                    alt="Location"  
                    width={33}
                    height={33}
                    className={SideStyles.imageClass} />
                    <p className={SideStyles.textClass}> Arz Hospital, Zalka, Lebanon </p>
                </li>
            </ul>
