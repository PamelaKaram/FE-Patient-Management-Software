import React from "react";
import SideStyles from "../styles/PatientPage.module.css";
import NavBar from "../Components/Sidenav4";
import SideBar from "../Components/SideBar";
import AppDateTime from "../Components/AppDateTime";
import Buttons from "../Components/Buttons";
import Reminders from "../Components/Reminders";
import Links from "../Components/Links";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { StaticDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import react, { useState } from "react";
import { getSession } from "next-auth/react";
//import axios from "../lib/axios.js";
import DateRangePicker from "../Components/PatientDateRangePicker";

export default function Patient({ data }) {
  const [date, setDate] = useState();
  const [focus, setFocus] = useState(false);

  const handleSingleDateChange = (date) => {
    setDate(date);
  };
  return (
    <div className={SideStyles.body}>
      <NavBar className={SideStyles.navBarMobile} />
      <SideBar
        className={`${SideStyles.sideBar} ${SideStyles.sideBarDesktop}`}
      />
      <div className={SideStyles.leftHalf}>
        <NavBar className={SideStyles.navBarDesktop} />
        <div className={SideStyles.header}>
          <h1>Hi, Pamela Karam</h1>
          <p className={SideStyles.text}>{"Let's track your health Today!"}</p>
        </div>
        <div className={SideStyles.topSection}>
          <div className={SideStyles.app}>
            <h3>Upcoming Appointments</h3>
            <AppDateTime />
          </div>
          <div className={SideStyles.reminder}>
            <h3>Daily Reminder!</h3>
            <Reminders />
          </div>
        </div>
        <div className={SideStyles.activities}>
          <h3>Activities</h3>
          <p className={SideStyles.text}>Today, 7 May 2023</p>
          <Buttons />
        </div>
        <div className={SideStyles.calendarAndLinks}>
          <div style={{ width: "100%", margin: "50px" }}>
            <h3 className={SideStyles.calendarTitle}>Calendar</h3>
            <DateRangePicker />
          </div>
          <div className={SideStyles.link}>
            <h3>Quick Links</h3>
            <Links />
          </div>
        </div>
        <div className={SideStyles.bottom}></div>
      </div>
    </div>
  );
}