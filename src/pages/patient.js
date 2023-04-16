import React from 'react';
import SideStyles from '../styles/PatientPage.module.css';
import NavBar from '../Components/Sidenav4';
import SideBar from '../Components/SideBar';
import AppDateTime from '../Components/AppDateTime';

export default function Doctor() {
    return (
        <div className={SideStyles.body}>
          <NavBar/>
          <SideBar />
          <div className={SideStyles.leftHalf}>
            <div className={SideStyles.header}>
              <h1>Hi, Pamela Karam</h1>
              <p className={SideStyles.text}>Let's track your health Today!</p>
            </div>
            <div className={SideStyles.app}>
              <h3>Upcoming Appointments</h3>
              <AppDateTime />
            </div>
          </div>
        </div>

    );
}


