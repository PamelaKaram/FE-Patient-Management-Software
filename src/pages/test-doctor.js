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
import { getSession } from "next-auth/react";
import axios from "axios";
import { DatePicker } from "@mui/x-date-pickers";
import DateRangePicker from "../Components/DateRangePicker";
import AvailabilityButton from "../Components/DoctorAvailability";

function Doctor({ data }) {
  const [date, setDate] = useState(new Date());
  const [focus, setFocus] = useState(false);
  console.log(data);

  const handleSingleDateChange = (date) => {
    setDate(date);
  };

  return (
    <div className={DoctorStyles.body}>
      <Sidebar  />
      <InstantSearch searchClient={searchClient} indexName="patients">
        <div>
          <div className={DoctorStyles.imageContainer}>
            <div className={DoctorStyles.bottomCenter}>
              <div className="fixed">
                <div className={SideStyles.searchBarContainer}>
                  <SearchBox className={DoctorStyles.searchDoctor} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            padding: "4rem",
          }}
        >
          <div className={WelcomeStyles.headerGrid}>
            <Welcome />
            <div className={WelcomeStyles.main}>
              <h1>Patients</h1>
              <HitsContainer />
              <Configure hitsPerPage={5} />
            </div>
            <div className={WelcomeStyles.main}>
              <h1>Quick Links</h1>
              <Links />
            </div>
          </div>
        </div>
      </InstantSearch>

      <div className={DoctorStyles.section}>
        <div className={AppointmentsList.apt}>
          <div style={{ width: "100%", margin: "50px" }}>
            <DateRangePicker />
          </div>
          <AvailabilityButton />
          <AppointmentsList />
        </div>
      </div>

      <div className={DoctorStyles.section}>
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