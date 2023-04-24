import Image from 'next/image';
import ProfileImage from '../icons/profileImage.svg';
import React, { useState } from 'react';
import ChangePatientMedicalConditionPopup from '../Components/ChangePatientMedicalConditionPopUp';
import axios from 'axios';
import { useRouter } from 'next/router';

const UserPage = ({ userData }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const router = useRouter();

  if (!userData) {
    router.push('/error');
    return null;
  }

  return (
    <>
      <div className={Styles.page}>
        <div className={Styles.title}>
          <h3 className={Styles.titleText}>Patient Profile</h3>
        </div>
        <div className={Styles.lower}>
          <div className={Styles.sideAct}>
            <Image
              src={ProfileImage.src}
              alt="Profile"
              width={120}
              height={120}
              className={Styles.imageClass}
            />
            <h2>{userData.firstName} {userData.lastName}</h2>
              <p className={Styles.detail}>{userData.email}</p>
              <div className={Styles.activities}>
                  <h2 className={Styles.currAct}>Personal Information</h2>
                    <a href="/view_patient_medical_condition" className={Styles.act}>
                        <h2>View Patient Medical Condition</h2>
                    </a>  
                    <a href="/view_patient_medical_history" className={Styles.act}>
                        <h2>View Patient Medical History</h2>
                    </a>  
                    <a href="/view_patient_medical_records_tests" className={Styles.act}>
                        <h2>View Patient Medical Records and Tests</h2>
                    </a>  
                    <div>
                        <a href="/change_patient_medical_condition" className={Styles.act} onClick={(e) => { e.preventDefault(); setIsPopupOpen(true) }}>
                            <h2>Change the Patient's Medical Condition</h2>
                        </a>
                        <ChangePatientMedicalConditionPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
                    </div>
                    <a href="/update_patient_medical_prescription" className={Styles.act}>
                        <h2>Update Patient Medical Prescription</h2>
                    </a>
              </div>
          </div>
