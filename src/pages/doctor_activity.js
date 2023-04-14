import React from 'react';
import ActivityButton from '../Components/ActivityButton'
import SideStyles from '../styles/DoctorActivityPage.module.css'

export default function Doctor() {
    return (
        <div className={SideStyles.container}>
            <p className={SideStyles.title}>Activities</p>
            <ActivityButton className={SideStyles.button} name="Patient Medical Condition" path="" />
            <ActivityButton className={SideStyles.button} name="Patient Medical History" path="" />   
            <ActivityButton className={SideStyles.button} name="Patient Medical Records & Tests" path="" />
            <ActivityButton className={SideStyles.button} name="Patient changes in Medical Condition" path="" />
            <ActivityButton className={SideStyles.button} name="Update Patient Medical Prescription" path="" />
        </div>
    );
}