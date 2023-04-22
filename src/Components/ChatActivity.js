import ChatActivity from '../styles/ChatActivity.module.css';
import React from "react";
import doneIcon from "../icons/doneIcon.svg";
import cancelIcon from "../icons/cancelIcon.svg";
import Image from "next/image";
import WelcomeStyles from "../styles/Welcome.module.css";
import { Avatar } from '@mui/material';
// import ChatActivity from '../styles/ChatActivity.module.css';
const appointmentsData = [
    { id: 1, patient: "Jad Abou Karam" , message:"I took my blood pressure this morning. The result is 120–139 mm Hg. Should I be worried? " },
    { id: 2, patient: "Habib El Deek", message:"I took my blood pressure this morning. The result is 120–139 mm Hg. Should I be worried?" },
    { id: 3, patient: "Habib El Deek" , message:"I took my blood pressure this morning. The result is 120–139 mm Hg. Should I be worried?"},
    { id: 4, patient: "Tracy Salloum" , message:"I took my blood pressure this morning. The result is 120–139 mm Hg. Should I be worried?"}
];
//note redirect to wpp
const AppointmentsList = () => {

    const list = appointmentsData.map((appointment) => (
        <div key={appointment.id} className={ChatActivity.appointmentpreview}>
            <div className={ChatActivity.avatar}> 
                <Avatar
                    alt={appointment.patient}
                    src="/static/images/avatar/1.jpg"
                />
            </div>
            <div className={ChatActivity.previewpatient}> {appointment.patient}</div>
            <div className={ChatActivity.info}>
                <div className={ChatActivity.previewtime}>
                    {appointment.message}
                </div>
                <div className={ChatActivity.decisions}>
                    <button>
                        Answer
                    </button>
                    <button>
                        Call
                    </button>
                </div>
            </div>

        </div>
    ))
    return (
        <div>
            <div className={WelcomeStyles.main}>
                <h1>Looks like you've got some questions to answer </h1>

            </div>

            <div className={ChatActivity.appointmentscontainer}>
                {list}
            </div>

        </div>
    );
};

export default AppointmentsList;