import SideStyles from "../styles/Sidenav4.module.css";
import dashboardIcon from "../icons/dashboardIcon.svg";
import calendarIcon from "../icons/calendarIcon.svg";
import chatIcon from "../icons/chatIcon.svg";
import logoutIcon from "../icons/logoutIcon.svg";
import Image from "next/image";
import settingsIcon from "../icons/settingsIcon.svg";

const Sidebar = () => {
  return (
    <div className={SideStyles.sidebar}>
      <ul>
        <li>
         <Image 
         src={dashboardIcon.src} 
         alt="dashbaord" 
          width={50}
          height={50}
         />
         <span style={{color:"black"}}>Dashboard</span>
        </li>
