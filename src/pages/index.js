import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Sidebar from '../Components/Sidenav1';
// import AppointmentsList from '../Components/AppointmentList';
import LoginForm from '../Components/LoginForm';
import SidenavMobile from '../Components/SideNavResponsive'
import SidenavWeb from '../Components/Sidenav2'
import { useState, useEffect } from 'react';

export default function Home() {
// render the SidnavMobile component if the screen width is less than 768px
// render the SidenavWeb component if the screen width is greater than 768px
const [width, setWidth] = useState(0);
const [height, setHeight] = useState(0);

const updateDimensions = () => {
  setWidth(window.innerWidth);
  setHeight(window.innerHeight);
};

useEffect(() => {
  window.addEventListener("resize", updateDimensions);
  return () => window.removeEventListener("resize", updateDimensions);
}, []);
return(
 <main>
  {width < 768 ? <SidenavMobile /> : <SidenavWeb />}
  <LoginForm />

  </main>
  



  
 

)


  
  
}