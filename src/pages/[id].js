import Styles from '../styles/PatientProfile.module.css';
import ProfileIcon from '../icons/greenProfileIcon.svg';
import CalendarIcon from '../icons/greenCalendarIcon.svg';
import PhoneIcon from '../icons/greenPhoneIcon.svg';
import MailIcon from '../icons/greenMailIcon.svg';
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
          <div className={Styles.personalInfo}>
                <div>
                    <h2 className={Styles.title1}>Personal Information</h2>
                    <p className={Styles.detail2}>Here are some personal information about your patient and where you can contact them</p>
                </div>
              <div className={Styles.userIinfo}>
                <div className={Styles.boxesContainer}>
                  <div className={Styles.column}>
                    <div className={Styles.box}>
                      <div className={Styles.field}>
                        <h3>Name</h3>
                        <p className={Styles.detail}>{userData.firstName} {userData.lastName}</p>
                      </div>
                      <Image 
                        src={ProfileIcon.src} 
                        alt="Profile"  
                        width={25}
                        height={25}
                        className={Styles.myImageClass} />
                    </div>
                    <div className={Styles.box}>
                      <div className={Styles.field}>
                        <h3>Date of Birth</h3>
                        <p className={Styles.detail}>{userData.dateOfBirth}</p>
                      </div>
                      <Image 
                        src={CalendarIcon.src} 
                        alt="Calendar"  
                        width={25}
                        height={25}
                        className={Styles.myImageClass} />
                    </div>
                  </div>

                  
                  <div className={Styles.column}>
                    <div className={Styles.box}>
                      <div className={Styles.field}>
                        <h3>Email</h3>
                        <p className={Styles.detail}>{userData.email}</p>
                      </div>
                      <Image 
                      src={MailIcon.src} 
                      alt="Mail"  
                      width={25}
                      height={25}
                      className={Styles.myImageClass} />
                    </div>
                    <div className={Styles.box}>
                      <div className={Styles.field}>
                        <h3>Phone Number</h3>
                        <p className={Styles.detail}>{userData.phoneNumber}</p>
                      </div>
                      <Image 
                        src={PhoneIcon.src} 
                        alt="Phone"  
                        width={25}
                        height={25}
                        className={Styles.myImageClass} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  export async function getServerSideProps(context) {
    const { id } = context.params;
    try {
      const res = await axios.get(`https://example.com/api/users/\${id}`);
  
      if (res.status >= 200 && res.status < 300) {
        return {
          props: {
            userData: res.data,
          },
        };
      } else {
        console.error(`Error fetching user data: \${res.status}`);
        return {
          props: {
            userData: null,
          },
        };
      }
    } catch (error) {
      console.error(`Error fetching user data: \${error.message}`);
      return {
        props: {
          userData: null,
        },
      };
    }
  }
  
  export default UserPage;