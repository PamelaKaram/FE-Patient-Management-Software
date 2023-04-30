import React from 'react';
import Styles from '../styles/PopupAppointmentList.module.css';

const AppointmentsList = ({ appointments }) => {
  const list = appointments.map((appointment) => (
    <div key={appointment.id} className={Styles.appointmentPreview}>
      <div className={Styles.previewPatient}>
        Appointment with Dr Abou Karam
      </div>
      <div className={Styles.previewDateTime}>
        <span>{appointment.date}</span> -{' '}
        <span>
          {appointment.startTime} to {appointment.endTime}
        </span>
      </div>
    </div>
  ));

  return <div className={Styles.appointmentsContainer}>{list}</div>;
};

export default AppointmentsList;