import appL from '../styles/AppointmentList.module.css';
import React from "react";
import doneIcon from "../icons/doneIcon.svg";
import cancelIcon from "../icons/cancelIcon.svg";
import Image from "next/image";
import WelcomeStyles from "../styles/Welcome.module.css";

const appointmentsData = [
  { id: 1, patient: "patient", startTime: "10:00 AM", endTime: "11:00 AM" },
  { id: 2, patient: "patient", startTime: "11:00 AM", endTime: "12:00 PM" },
  { id: 3, patient: "patient", startTime: "12:00 PM", endTime: "1:00 PM" },
  { id: 4, patient: "patient", startTime: "1:00 PM", endTime: "2:00 PM" }
];

const AppointmentsList = () => {
  
  const list = appointmentsData.map((appointment) => (
    <div key={appointment.id} className={appL.appointmentpreview}>
      <div className={appL.previewpatient}> Appointment <span>with</span> {appointment.patient}</div>
      <div className={appL.info}>
        <div className={appL.previewtime}>
          {appointment.startTime} - {appointment.endTime}
        </div>
        <div className={appL.buttons}>
          <ul>
            <li>
              <Image
                src={doneIcon.src}
                alt="done"
                width={25}
                height={25}
              />
            </li>
            <li>
              <Image
                src={cancelIcon.src}
                alt="done"
                width={25}
                height={25}
              />
            </li>
          </ul>
        </div>
      </div>

    </div>
  ))
  return (
    <div>
      <div className={WelcomeStyles.main}>
        <h1>Looks like you've got some questions to answer </h1>
      </div>
    
    <div className={appL.appointmentscontainer}>
      {list}
      <div className={appL.decisions}>
        <button>
          view all
        </button>
        <button>
          view future appointments
        </button>
      </div>
    </div>
    
    </div>
  );
};

export default AppointmentsList;