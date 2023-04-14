import SideStyles from "../styles/Sidenav1.module.css";
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
        <li>
          <Image src={calendarIcon.src} alt="Calendar" 
          width={50}
          height={50}/>
        </li>
        <li>
          <Image src={chatIcon.src} alt="chat"
          width={50}
          height={50}/>
        </li>
         <li>
          <Image src={settingsIcon.src} alt="Calendar" 
          width={50}
          height={50}/>
        </li>
      </ul>

      <div className={SideStyles.logout}>
        <Image src={logoutIcon.src} alt="Logout" 
          width={50}
          height={50}/>
      </div>
    </div>
  );
};

export default Sidebar;
