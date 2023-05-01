import SideStyles from "../styles/Sidenav2.module.css";
import { useState } from "react";

const Sidebar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <div className={SideStyles.sidebar}>
      <ul className={SideStyles.ul}>
        <li className={SideStyles.list}>
          Home
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
        <li className={SideStyles.list}
          onClick={() => {
            setShowSearchBar(true);
          }}>
          Search
          
          {showSearchBar && (
            <div onBlur={() => setShowSearchBar(false)}>
              <input type="text" placeholder="Search..." />
              <button>Search</button>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;


