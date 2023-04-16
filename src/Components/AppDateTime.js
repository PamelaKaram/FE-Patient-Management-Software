import React from "react";
import ClinicIcon from '../icons/clinicIcon.svg';
import SideStyles from '../styles/AppDateTime.module.css';
import Image from 'next/image';

const AppDateTime = () => {
    return (
        <div className={SideStyles.colDiv}>
            <Image 
            src={ClinicIcon} 
            alt="Clinic"  
            width={250}
            height={250}
            className={SideStyles.myImageClass} style={{ margin: "0", padding: "0" }}/>
            <div style={{ marginLeft: "20px" }}>
                <p style={{ margin: "0", marginBottom: "5px" }}>Clinic</p>
                <p style={{ margin: "0"}}>Jal El Dib</p>
            </div>
        </div>
    );
}

export default AppDateTime;