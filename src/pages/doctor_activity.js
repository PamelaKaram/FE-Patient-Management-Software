import React from 'react';
import ActivityButton from '../Components/ActivityButton'
import SideStyles from '../styles/DoctorActivityPage.module.css'
import PharmacyPermissionPopup from '../Components/PharmacyLookupPopUp'

export default function Doctor() {
    return (
        <div className={SideStyles.container}>
            <p className={SideStyles.title}>Activities</p>
            <ActivityButton className={SideStyles.button} name="Patient Medical Condition" path="" />
            <ActivityButton className={SideStyles.button} name="View/Update Patient Medical Condition & History" path="" />   
            <ActivityButton className={SideStyles.button} name="View/Upload Patient Medical Records & Tests" path="" />
            <ActivityButton className={SideStyles.button} name="Patient changes in Medical Condition" path="" />
            <ActivityButton className={SideStyles.button} name="View/Update Patient Medical Prescription" path="" />
            <PharmacyPermissionPopup />
            {/* <ActivityButton className={SideStyles.button} name="Pharmacy/Hospital Patient Lookup Permission" path="" /> */}
        </div>
    );
}