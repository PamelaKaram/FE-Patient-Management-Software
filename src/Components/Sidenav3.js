import SideStyles from "../styles/Sidenav3.module.css";
import dashboardIcon from "../icons/dashboardIcon.svg";
import settingIcon from "../icons/settingsIcon.svg"
import logoutIcon from "../icons/logoutIcon.svg";
import Image from "next/image";


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
         <span>Dashboard</span>
        </li>
        <li>
         <Image 
         src={settingIcon.src} 
         alt="settings" 
          width={50}
          height={50}
         />
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