import React, { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import axios from "../../../../../lib/axios";
import Styles from "../../../../styles/ViewPatientMedicalHistory.module.css";

const ViewPatientMedicalHistory = ({ userId }) => {
  const [textData, setTextData] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [userId]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `API_URL/users/\${userId}/medical_condition`,
        { responseType: "text" }
      ); // Replace with API URL
      setTextData(response.data);
    } catch (error) {
      setError("Failed to fetch data from the API.");
    }
  };

  return (
    <div className={Styles.container}>
      {error ? (
        <p className={Styles.error}>{error}</p>
      ) : (
        <div className={Styles.textData}>
          <pre>{textData}</pre>
        </div>
      )}
    </div>
  );
};

export default ViewPatientMedicalHistory;

export async function getServerSideProps(context) {
  const { uuid } = context.params;
  const session = await getSession(context);

  if (!session && !session?.user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  if (new Date(session.expires) < new Date()) {
    const res = await axios.post("/auth/token", {
      refreshToken: session?.user.refreshToken,
    });
    session.user.accessToken = res.data.accessToken;
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
