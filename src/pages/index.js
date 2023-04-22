import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Sidebar from '../Components/Sidenav1';
// import AppointmentsList from '../Components/AppointmentList';
import LoginForm from '../Components/LoginForm';
import Sidenav from '../Components/SideNavResponsive'


export default function Home() {

  return (
    // <main className="login">
    //   <LoginForm />
    // </main>
    <Sidenav/>
  )
}


