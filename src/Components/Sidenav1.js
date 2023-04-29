import SideStyles from "../styles/Sidenav1.module.css";
import dashboardIcon from "../icons/dashboardIcon.svg";
import calendarIcon from "../icons/calendarIcon.svg";
import chatIcon from "../icons/chatIcon.svg";
import logoutIcon from "../icons/logoutIcon.svg";
import Image from "next/image";
import settingsIcon from "../icons/settingsIcon.svg";
import notificationsIcon from "../icons/notificationIcon.svg";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  return (
    <div className={SideStyles.sidebar}>
      <ul>
        <li>
          <Image
            src={dashboardIcon.src}
            alt="dashbaord"
            width={30}
            height={30}
          />
          <span style={{ color: "black" }}>Dashboard</span>
        </li>
        <li>
          <Image src={calendarIcon.src} alt="Calendar" width={30} height={30} />
        </li>
        <li>
          <Image src={chatIcon.src} alt="chat" width={30} height={30} />
        </li>
        <li>
          <Image src={settingsIcon.src} alt="Calendar" width={30} height={30} />
        </li>
        <li>
          <Image
            src={notificationsIcon.src}
            alt="Notifications"
            width={30}
            height={30}
          />
        </li>
      </ul>

      <div className={SideStyles.logout} onClick={() => signOut()}>
        <Image src={logoutIcon.src} alt="Logout" width={30} height={30} />
      </div>
    </div>
  );
};

export default Sidebar;
