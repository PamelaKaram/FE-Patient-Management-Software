import Searchbar from '../Components/finalSearchBar';
import React from 'react';
import ActivityButton from '../Components/ActivityButton';
import { BrowserRouter, Link } from 'react-router-dom';
import SideStyles from "../styles/DoctorPage.module.css"
import Sidebar from '../Components/Sidenav1';

export default function Doctor() {
  return (
      <div className={SideStyles.body}>
        <Sidebar/>
        <div>
          <div className={SideStyles.imageContainer}>
            <div className={SideStyles.bottomCenter}>
              <Searchbar />
            </div>
          </div>
        </div>
        {/*<Link to="/patient_registration">
          <ActivityButton name="Register Patient" path="/patient_registration" />
        </Link> */}
          <ActivityButton className={SideStyles.button} name="Register Patient" path="/patient_registration" />
      </div>
  );
}