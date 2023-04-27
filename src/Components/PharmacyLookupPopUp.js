import React, { useState } from 'react';
import SideStyles from '../styles/PharmacyLookupPopUp.module.css';
import SearchBar from '../Components/Search';
import { useHistory } from 'react-router-dom';
import hitsContainer from '../Components/PharmSearchResults';

function PharmacyPermissionPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState([]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <a className={SideStyles.act} onClick={togglePopup}>
        <h2>Pharmacy Patient Lookup Permission</h2>
      </a>

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
            <SearchBar HitsContainer={hitsContainer} results={results} setResults={setResults}/>
          </div>
        </div>
      )}
  </div>
  );
}

export default PharmacyPermissionPopup;