import React from 'react';
import AppointmentsList from './PopupAppointmentsList';
import Styles from '../styles/CalendarAppointmentPopup.module.css';

const AppointmentsPopup = ({ appointments, onClose }) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={Styles.appointmentsPopup}>
      <div className={Styles.closeButton} onClick={handleClose}>
        X
      </div>
      <AppointmentsList appointments={appointments} />
    </div>
  );
};

export default AppointmentsPopup;