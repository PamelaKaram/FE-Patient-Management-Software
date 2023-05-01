import BookingAppointment from "../../../../Components/BookingAppointment";
import React from "react";
import { getSession } from "next-auth/react";
import axios from "../../../../../lib/axios";

function Booking({ patientData }) {
  return (
    <div>
      <BookingAppointment patientData={patientData} />
    </div>
  );
}

export default Booking;

export async function getServerSideProps(context) {
  const { uuid } = context.params;
  const session = await getSession(context);

  if (!session && !session.user) {
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

  return {
    props: {
      patientData: data.data.data,
    },
  };
}
