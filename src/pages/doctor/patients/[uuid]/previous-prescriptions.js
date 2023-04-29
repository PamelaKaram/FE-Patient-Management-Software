import { Button } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { getSession } from "next-auth/react";
import axios from "../../../../../lib/axios";
import appL from "../../../../styles/Prescription.module.css";
import React from "react";
import Image from "next/image";
import WelcomeStyles from "../../../../styles/Welcome.module.css";
import downloadIcon from "../../../../icons/downloadIcon.svg";
import { jsPDF } from "jspdf";

import viewIcon from "../../../../icons/viewIcon.svg";

const PreviousPrecriptions = ({ patientData, medicines }) => {
  const list = medicines.map((medicine) => (
    <div key={medicine.id} className={appL.prescriptionpreview}>
      <div className={appL.previewmedicine}>{medicine.medicine}</div>
      <div className={appL.info}>
        <div className={appL.info}>
          Take {medicine.frequency} time/day, {medicine.foodTiming} food
        </div>
      </div>
      <div className={appL.info}>
        <div className={appL.info}>Take {medicine.description} time/day</div>
      </div>
    </div>
  ));

  const getPDF = () => {
    const doc = new jsPDF();

    let yOffset = 10;

    medicines.forEach((medicine) => {
      doc.text(
        `${medicine.medicine} - ${medicine.frequency} time/day - ${medicine.foodTiming} food - ${medicine.description}`,
        10,
        yOffset
      );
      yOffset += 40;
    });
    doc.save("prescription.pdf");
  };

  return (
    <div>
      <div className={WelcomeStyles.main}>
        <h1>List Of Prescriptions</h1>
      </div>

      <div className={appL.prescriptionscontainer}>
        {medicines ? list : <div>No prescription</div>}

        <div className={appL.decisions} style={{ margin: "1rem" }}>
          <button onClick={() => getPDF()}>Download Prescription</button>
        </div>
        <div className={appL.decisions} style={{ margin: "1rem" }}>
          <button>View current prescription</button>
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
      medicines: pres.data.medicines,
    },
  };
}
