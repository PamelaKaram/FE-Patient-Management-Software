import Searchbar from "../Components/finalSearchBar";
import React, { useState } from "react";
import { StaticDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import ActivityButton from "../Components/ActivityButton";
import { BrowserRouter, Link } from "react-router-dom";
import DoctorStyles from "../styles/DoctorPage.module.css";
import Sidebar from "../Components/Sidenav1";
import Welcome from "../Components/Welcome";
import AppointmentsList from "../Components/AppointmentList";
import SideStyles from "../styles/DoctorActivityPage.module.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Links from "../Components/Links";
import LinksStyles from "../styles/Links.module.css";
import ChatActivty from "../Components/ChatActivity";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import moment from "moment";

function Doctor() {
  const [date, setDate] = useState();
  const [focus, setFocus] = useState(false);

  const handleSingleDateChange = (date) => {
    setDate(date);
  };

  const isBlocked = (day) => {
    if (day <= moment().subtract(1, "days")) return true;
    // if (
    //   product.schedule.available.length &&
    //   !product.schedule.available.some(
    //     (e) => e.day === day.format("dddd").toLocaleLowerCase()
    //   )
    // )
    //   return true;

    // if (blockedDays.some((date) => day.isSame(date, "day"))) return true;

    // if (
    //   bookedDays?.some(
    //     (date) =>
    //       (date.interval != PriceIntervalEnum.Minute ||
    //         date.interval != PriceIntervalEnum.Hour) &&
    //       day.isSameOrAfter(date.startDate, "day") &&
    //       day.isSameOrBefore(date.endDate, "day")
    //   )
    // ) {
    //   return true;
    // }
    // return false;
  };

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
      <div style={{ width: "100%", margin: "50px" }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            value={date}
            label="See Appointments"
            onChange={handleSingleDateChange}

            // initialVisibleMonth={() => moment()}
            // focused={focus}
            // numberOfMonths={1}
            // onFocusChange={({ focused }) => setFocus(focused)}
            // isDayBlocked={isBlocked}
          />
        </LocalizationProvider>
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

      <div className={DoctorStyles.body}>{/* <Sidebar /> */}</div>

      <button
        className={DoctorStyles.customButton}
        onClick={() => {
          window.location.href = "/patient_registration";
        }}
      >
        Register Patient
      </button>
      <button
        className={DoctorStyles.customButton}
        onClick={() => {
          window.location.href = "/pharmacy_registration";
        }}
      >
        Add Pharmacy
      </button>
    </div>
  );
}

export default Doctor;
