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
          <ActivityButton className={DoctorStyles.button} name="Register Patient" path="/patient_registration" />
      </div>
  );
}