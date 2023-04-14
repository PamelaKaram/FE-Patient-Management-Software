import Searchbar from '../Components/finalSearchBar';
import React from 'react';
import ActivityButton from '../Components/ActivityButton';
import { BrowserRouter, Link } from 'react-router-dom';
import DoctorStyles from "../styles/DoctorPage.module.css"
import Sidebar from '../Components/Sidenav1';
import Welcome from "../Components/Welcome";
import AppointmentsList from '../Components/AppointmentList';

export default function Doctor() {
  return (
      <div className={DoctorStyles.body}>
        <Sidebar/>
        <div>
          <div className={DoctorStyles.imageContainer}>
            <div className={DoctorStyles.bottomCenter}>
              <Searchbar />
            </div>
          </div>
        </div>
        
        <div className={DoctorStyles.header}>
          <Welcome />
          <div className={AppointmentsList.apt}>
            <AppointmentsList />
          </div>
        </div>

        {/*<Link to="/patient_registration">
          <ActivityButton name="Register Patient" path="/patient_registration" />
        </Link> */}
        {/* <div className={SideStyles.container}>
          <ul className={SideStyles.buttonContainer}>
            <ActivityButton className={SideStyles.button} name="Register Patient" path="/patient_registration" />
            <ActivityButton className={SideStyles.button} name="Patient Medical Condition" path="" />
            <ActivityButton className={SideStyles.button} name="Patient Medical History" path="" />
          </ul>
          <ul className={SideStyles.buttonContainer}>
            <ActivityButton className={SideStyles.button} name="Patient Medical Records & Tests" path="/patient_registration" />
            <ActivityButton className={SideStyles.button} name="Patient changes in Medical Condition" path="" />
            <ActivityButton className={SideStyles.button} name="Update Patient Medical Prescription" path="" />
          </ul>
        </div> */}
      </div>
  );
}