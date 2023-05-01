import React, { useState } from 'react'; //to be added to the doctors page
import axios from 'axios';
import Styles from '../styles/CalendarAppointmentPopup.module.css';
import AppointmentsList from './PopupAppointmentsList';

const AppointmentsPopup = () => {
  const [appointments, setAppointments] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/appointments/getAvailability",
      {
        headers: {
          "Authorization": "Bearer"
        },
      });
      setAppointments(response.data.appointments);
      setShowPopup(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      <button className={Styles.button} onClick={fetchAppointments}>View Availability</button>
      {showPopup && (
        <div className={Styles.appointmentsPopup}>
          <div className={Styles.closeButton} onClick={handleClose}>
            X
          </div>
          <AppointmentsList appointments={appointments} />
        </div>
      )}
    </>
  );
};

export default AppointmentsPopup;