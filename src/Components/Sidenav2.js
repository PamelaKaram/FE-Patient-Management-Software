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
        <li>
         <Image 
         src={homeIcon.src} 
         alt="Home" 
          width={25}
          height={25}
         />
         <span>Home</span>
        </li>
        <li>
          <Image src={chatIcon.src} alt="Chat" 
          width={25}
          height={25}/>
        </li>
        <li>
          <Image src={searchIcon.src} alt="Search"
          width={25}
          height={25}/>
        </li>
        <li>
          <Image src={settingsIcon.src} alt="Settings"
          width={25}
          height={25}/>
        </li>
      </ul>

      <div className={SideStyles.logout}>
        <Image src={loginIcon.src} alt="Login" 
          width={25}
          height={25}/>
      </div>
    </div>
  );
};

export default Sidebar;