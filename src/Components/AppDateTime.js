import React from "react";
import ClinicIcon from '../icons/clinicIcon.svg';
import SideStyles from '../styles/AppDateTime.module.css';
import Image from 'next/image';
import CalendarIcon from '../icons/blueCalendarIcon.svg';
import TimeIcon from '../icons/blueClockIcon.svg';


const AppDateTime = () => {
    return (
        <div className={SideStyles.rowDiv}>
            <div>
                <Image 
                src={ClinicIcon} 
                alt="Clinic"  
                width={200}
                height={200}
                className={SideStyles.myImageClass}/>
                <div>
                    <p>Clinic</p>
                    <p className={SideStyles.details}>Jal El Dib, Lebanon</p>
                </div>
            </div>
            <div className={SideStyles.dateTime}>
                <div className={SideStyles.corres1}>
                    <Image 
                    src={CalendarIcon.src} 
                    alt="Calendar" 
                    width={50}
                    height={50}
                    className={SideStyles.infoImage}/>
                    <p><b>14 May 2023</b></p>
                </div>
                <div className={SideStyles.corres2}>
                    <Image 
                    src={TimeIcon.src} 
                    alt="time" 
                    width={50}
                    height={50}
                    className={SideStyles.infoImage}/>
                    <p><b>09.00 am</b></p>
                </div>
            </div>
        </div>
    );
}

export default AppDateTime;