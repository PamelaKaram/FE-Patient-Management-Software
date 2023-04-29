import appL from '../styles/Prescription.module.css';
import React from "react";
import Image from "next/image";
import WelcomeStyles from "../styles/Welcome.module.css";
import downloadIcon   from "../icons/downloadIcon.svg";

import viewIcon  from "../icons/viewIcon.svg";
const prescriptionData = [
  { id: 1, medicine: "medicine", foodTiming: "10:AM", frequency:"1",  date: "2023-04-26 T16:50:05.000Z" },
  { id: 2, medicine: "medicine", foodTiming: "10:AM",frequency:"1", date: "2023-04-26 T16:50:05.000Z" },
  { id: 3, medicine: "medicine", foodTiming:  "10:AM",frequency:"1", date: "2023-04-26 T16:50:05.000Z"},
  { id: 4, medicine: "medicine", foodTiming:  "10:AM",frequency:"1", date: "2023-04-26 T16:50:05.000Z" }
];

const PreviousPrecriptions = ({ medicineData, medicines }) => {
  console.log(medicineData, medicines);
  const list = prescriptionData.map((prescription) => (
    <div key={prescription.id} className={appL.prescriptionpreview}>
      <div className={appL.previewmedicine}> Prescription on:</div>
      <div className={appL.info}>
        <div className={appL.info}>
            {prescription.date}
      </div>
        <div className={appL.buttons}>
          <ul>
            <li>
              <Image
                src={viewIcon.src}
                alt="done"
                width={25}
                height={25}
              />
            </li>
            <li>
              <Image
                src={downloadIcon.src}
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
        <h1>List Of prescriptions</h1>
      </div>
    
    <div className={appL.prescriptionscontainer}>
      {list}
      <div className={appL.decisions}>
        <button>
          View current medical prescription
        </button>
      
      </div>
    </div>
    
    </div>
  );
};

export default PreviousPrecriptions;

export async function getServerSideProps(context) {
  const { uuid } = context.params;
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  if (session.user.role !== "doctor") {
    const role = session.user.role;
    const uuid = session.user.uuid;
    return {
      redirect: {
        destination: `/${role}/${uuid}`,
        permanent: false,
      },
    };
  }

  const data = await axios.get("info/patient", {
    params: {
      patientUUID: uuid,
    },
    headers: {
      Authorization: `Bearer ${session.user.accessToken}`,
    },
  });

  const pres = await axios.get("medicine/previousMedicalPrescription", {
    params: {
      patientUUID: uuid,
    },
    headers: {
      Authorization: `Bearer ${session.user.accessToken}`,
    },
  });

  return {
    props: {
      patientData: data.data.data,
      medicines: pres.data.data,
    },
  };
}


