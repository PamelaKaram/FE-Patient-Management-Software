import React from "react";
import ClinicIcon from '../icons/clinicIcon.svg';
import SideStyles from '../styles/AppDateTime.module.css';
import Image from 'next/image';

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
            </div>
        </div>
    );
}

export default AppDateTime;