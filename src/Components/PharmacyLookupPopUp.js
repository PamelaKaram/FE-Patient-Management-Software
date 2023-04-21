import React, { useState } from 'react';
import SideStyles from '../styles/PharmacyLookupPopUp.module.css';
import SearchBar from '../Components/FinalSearchBar3';
import { useHistory } from 'react-router-dom';

function PharmacyPermissionPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className={SideStyles.customButton} onClick={togglePopup}>
      <span className={SideStyles.text}>
       Pharmacy/Hospital Patient Lookup Permission
      </span>
    </button>


      {isOpen && (
        <div className={SideStyles.popupInner}>
          <div className={SideStyles.header}>
            <h2 className={SideStyles.title}> Pharmacy Lookup Permission</h2>
            <button className={SideStyles.closeBtn} onClick={togglePopup}>
              X
            </button>
          </div>
          <div className={SideStyles.info}>
            <p>Give Pharmacies or Hospitals access to look up patients' Medical Prescription to help them find Medication.</p>
          </div>
          <div className={SideStyles.searchBar}>
            <SearchBar />
          </div>
        </div>
      )}
    </div>
  );
}

export default PharmacyPermissionPopup;