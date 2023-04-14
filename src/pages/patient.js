import React from 'react';
import SideStyles from '../styles/PatientPage.module.css'
import NavBar from '../Components/Sidenav4'
import SideBar from '../Components/SideBar'

export default function Doctor() {
    return (
        <div className={SideStyles.body}>
          <NavBar/>
          <SideBar />
        </div>

        );
    }


