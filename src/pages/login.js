import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Sidebar from "../Components/Sidenav1";
// import AppointmentsList from '../Components/AppointmentList';
import LoginForm from "../Components/LoginForm";
import SidenavMobile from "../Components/SideNavLogin";
import SidenavWeb from "../Components/Sidenav2";
import { getSession } from "next-auth/react";

export default function Home() {
  return (
    <main>
      <SidenavMobile />
      <div
        style={{
          display: "grid",
          placeItems: "center",
          height: "95vh",
          width: "100%",
        }}
      >
        <LoginForm />
      </div>
    </main>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    const role = session.user.role;
    const uuid = session.user.uuid;
    return {
      redirect: {
        destination: `/${role}/${uuid}`,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
