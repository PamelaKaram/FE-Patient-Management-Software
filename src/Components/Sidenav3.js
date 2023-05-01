import SideStyles from "../styles/Sidenav3.module.css";
import dashboardIcon from "../icons/dashboardIcon.svg";
import settingIcon from "../icons/settingsIcon.svg";
import logoutIcon from "../icons/logoutIcon.svg";
import Image from "next/image";
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
          <span>Dashboard</span>
        </li>
        <li>
          <Image src={settingIcon.src} alt="settings" width={30} height={30} />
        </li>
      </ul>

      <div className={SideStyles.logout} onClick={() => signOut()}>
        <Image src={logoutIcon.src} alt="Logout" width={30} height={30} />
      </div>
    </div>
  );
};

export default Sidebar;
