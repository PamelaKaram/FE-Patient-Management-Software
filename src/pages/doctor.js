import Searchbar from '../Components/finalSearchBar';
import React from 'react';
import ActivityButton from '../Components/ActivityButton';
import { BrowserRouter, Link } from 'react-router-dom';
import DoctorStyles from "../styles/DoctorPage.module.css"
import Sidebar from '../Components/Sidenav1';
import Welcome from "../Components/Welcome";
import AppointmentsList from '../Components/AppointmentList';
import SideStyles from "../styles/DoctorActivityPage.module.css";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Links from '../Components/Links';
import LinksStyles from '../styles/Links.module.css';
import  ChatActivty from '../Components/ChatActivity';
function Doctor() {

  return (
    <div className={DoctorStyles.body}>
      <Sidebar />
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
        <div className={LinksStyles.line}>
          <h1> Quick Links </h1>
          <Links />
        </div>
      </div>
      
      <div className={DoctorStyles.section}>
      <div className={AppointmentsList.apt}>
      here we will display the calendar
          {/* <Calendar /> */}
         
        </div>
        <div className={AppointmentsList.apt}>
          <ChatActivty />
        </div>
        </div>

      <div className={DoctorStyles.body}>
      {/* <Sidebar /> */}
      
     
       
      </div>


      <button className={DoctorStyles.customButton} onClick={() => { window.location.href = "/patient_registration" }}>
        Register Patient
      </button>
      <button className={DoctorStyles.customButton} onClick={() => { window.location.href = "/pharmacy_registration" }}>
        Add Pharmacy
      </button>
    </div>
  );
}

export default Doctor;