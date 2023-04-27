import React from 'react';
import SideStyles from '../styles/PatientPage.module.css';
import NavBar from '../Components/Sidenav4';
import SideBar from '../Components/SideBar';
import AppDateTime from '../Components/AppDateTime';
import Buttons from '../Components/Buttons';
import Reminders from '../Components/Reminders';
import Links from '../Components/Links';

export default function Doctor() {
    return (
        <div className={SideStyles.body}>
          <NavBar className={SideStyles.navbar}/>
          <SideBar className={SideStyles.sidebar}/>
          <div className={SideStyles.leftHalf}>
            <div className={SideStyles.header}>
              <h1>Hi, Pamela Karam</h1>
              <p className={SideStyles.text}>Let's track your health Today!</p>
            </div>
            <div className={SideStyles.app}>
              <h3>Upcoming Appointments</h3>
              <AppDateTime />
            </div>
            <div className={SideStyles.activities}>
              <h3>Activities</h3>
              <p className={SideStyles.text}>Today, 7 May 2023</p>
              <Buttons/>
            </div>
            <div className={SideStyles.bottom}>
              <div className={SideStyles.reminder}> 
                  <h3>Daily Reminder!</h3>
                  <Reminders />
              </div>
              <div className={SideStyles.link}>
                  <div>
                    <h3>Quick Links</h3>
                    <Links />
                  </div>
              </div>
            </div>
          </div>
        </div>

    );
}


