// import Searchbar from "../Components/finalSearchBar.js";
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
import WelcomeStyles from "../styles/Welcome.module.css";
import ChatActivty from "../Components/ChatActivity";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import moment from "moment";
import HitsContainer from "../Components/hitsContainer";
import { InstantSearch, SearchBox, Configure } from "react-instantsearch-dom";
import { searchClient } from "../typesenseAdapter";

function Doctor() {
  const [date, setDate] = useState(new Date());
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
      <InstantSearch searchClient={searchClient} indexName="patients">
        <div>
          <div className={DoctorStyles.imageContainer}>
            <div className={DoctorStyles.bottomCenter}>
              <div className="fixed">
                <div className={SideStyles.searchBarContainer}>
                  <SearchBox />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "1rem",
            justifyContent: "center",
          }}
        >
          <div>
            <Welcome />
          </div>
          <div>
            <div className={WelcomeStyles.main}>
              <h1>Patients</h1>
              <HitsContainer />
              <Configure hitsPerPage={5} />
            </div>
          </div>
          <div className="">
            <Links />
          </div>
        </div>
      </InstantSearch>

      <div className={DoctorStyles.section}>
        <div className={AppointmentsList.apt}>
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
        <div className={AppointmentsList.apt}>
          <AppointmentsList />
        </div>
      </div>

      <div className={DoctorStyles.section}>
        <div className={AppointmentsList.apt}>
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
