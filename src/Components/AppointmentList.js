import appL from '../styles/AppointmentList.module.css';
import React from "react";
import doneIcon from "../icons/doneIcon.svg";
import cancelIcon from "../icons/cancelIcon.svg";
import Image from "next/image";

const appointmentsData = [
  { id: 1, title: "Appointment 1", startTime: "10:00 AM", endTime: "11:00 AM" },
  { id: 2, title: "Appointment 2", startTime: "11:00 AM", endTime: "12:00 PM" },
  { id: 3, title: "Appointment 3", startTime: "12:00 PM", endTime: "1:00 PM" },
  { id: 4, title: "Appointment 4", startTime: "1:00 PM", endTime: "2:00 PM" }
];

const AppointmentsList = () => {
  const list = appointmentsData.map((appointment) => (
    <div key={appointment.id} className={appL.appointmentpreview}>
      <div className={appL.previewtitle}>{appointment.title}</div>
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
                width={35}
                height={35}
              />
            </li>
            <li>
              <Image
                src={cancelIcon.src}
                alt="done"
                width={35}
                height={35}
              />
            </li>
          </ul>
        </div>
      </div>

    </div>
  ))
  return (
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



  );
};

export default AppointmentsList;