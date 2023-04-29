import SideStyles from "../styles/Sidenav2.module.css";
import homeIcon from "../icons/homeHomeIcon.svg";
import chatIcon from "../icons/homeChatIcon.svg";
import searchIcon from "../icons/homeSearchIcon.svg";
import settingsIcon from "../icons/homeSettingsIcon.svg";
import loginIcon from "../icons/homeLoginIcon.svg";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className={SideStyles.sidebar}>
      <ul>
        <li className={SideStyles.list}>
         Home
        </li>
        <li className={SideStyles.list}>
         Home
        </li>
        <li className={SideStyles.list}>
          Search
        </li>
        <li className={SideStyles.list}>
          Settings
        </li>
        <li className={SideStyles.list}
        onClick={() => {
          window.location.href = "/login";
        }}>
          Login
          
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
