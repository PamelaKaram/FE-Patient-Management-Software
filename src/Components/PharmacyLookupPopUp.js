import React, { useState } from 'react';
import SideStyles from '../styles/PharmacyLookupPopUp.module.css';
import ActivityButton from '../Components/ActivityButton';
import SearchBar from '../Components/FinalSearchBar3';
import { useHistory } from 'react-router-dom';
import path from "../pages/doctor.js"

function PharmacyPermissionPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="popup">
      <ActivityButton className={SideStyles.button} name="Pharmacy/Hospital Patient Lookup Permission" path={path} />

      {isOpen && (
        <div className="popup-inner">
          <div className="header">
            <h2>Pharmacy Lookup Permission</h2>
            <button className="close-btn" onClick={togglePopup}>
              X
            </button>
          </div>
          <div className="search-bar">
            <SearchBar />
          </div>
        </div>
      )}
    </div>
  );
}

export default PharmacyPermissionPopup;