import appL from '../styles/AppointmentList.module.css';
import React from "react";

const appointmentsData = [
  { id: 1, title: "Appointment 1", startTime: "10:00 AM", endTime: "11:00 AM" },
  { id: 2, title: "Appointment 2", startTime: "11:00 AM", endTime: "12:00 PM" },
  { id: 3, title: "Appointment 3", startTime: "12:00 PM", endTime: "1:00 PM" },
  { id: 4, title: "Appointment 4", startTime: "1:00 PM", endTime: "2:00 PM" }
];

const AppointmentsList = () => {
  return (
    <div className={appL.appointmentscontainer}>
      {appointmentsData.map((appointment) => (
        <div key={appointment.id} className={appL.appointmentpreview}>
          <div className={appL.previewtitle}>{appointment.title}</div>
          <div className={appL.previewtime}>
            {appointment.startTime} - {appointment.endTime}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentsList;