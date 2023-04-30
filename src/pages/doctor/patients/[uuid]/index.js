import Styles from "../../../../styles/PatientProfile.module.css";
import ProfileIcon from "../../../../icons/greenProfileIcon.svg";
import CalendarIcon from "../../../../icons/greenCalendarIcon.svg";
import PhoneIcon from "../../../../icons/greenPhoneIcon.svg";
import MailIcon from "../../../../icons/greenMailIcon.svg";
import Image from "next/image";
import ProfileImage from "../../../../icons/profileImage.svg";
import React, { useState } from "react";
import ChangePatientMedicalConditionPopup from "../../../../Components/ChangePatientMedicalConditionPopUp";
import PharmacyLookupPopUp from "../../../../Components/PharmacyLookupPopUp";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "../../../../../lib/axios.js";
import { getSession } from "next-auth/react";

const UserPage = ({ data }) => {
  const router = useRouter();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  console.log(data);
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
            <h2>
              {data.firstName} {data.lastName}
            </h2>
            <p className={Styles.detail}>{data.email}</p>
            <div className={Styles.activities}>
              <h2 className={Styles.currAct}>Personal Information</h2>
              <Link
                href={`/doctor/patients/${data.uuid}/medical-condition`}
                className={Styles.act}
              >
                <h2>View Patient Medical Condition</h2>
              </Link>
              <Link
                href={`/doctor/patients/${data.uuid}/medical-history`}
                className={Styles.act}
              >
                <h2>View Patient Medical History</h2>
              </Link>
              <Link
                href={`/doctor/patients/${data.uuid}/medical-records`}
                className={Styles.act}
              >
                <h2>View Patient Medical Records and Tests</h2>
              </Link>
              <div>
                <Link
                  href="/change_patient_medical_condition"
                  className={Styles.act}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsPopupOpen(true);
                  }}
                >
                  <h2>{"Change the Patient's Medical Condition"}</h2>
                </Link>
                <ChangePatientMedicalConditionPopup
                  isOpen={isPopupOpen}
                  onClose={() => setIsPopupOpen(false)}
                />
              </div>
              <Link
                href="/update_patient_medical_prescription"
                className={Styles.act}
              >
                <h2>Update Patient Medical Prescription</h2>
              </Link>
              <PharmacyLookupPopUp />
            </div>
          </div>
          <div className={Styles.personalInfo}>
            <div>
              <h2 className={Styles.title1}>Personal Information</h2>
              <p className={Styles.detail2}>
                Here are some personal information about your patient and where
                you can contact them
              </p>
            </div>
            <div className={Styles.userIinfo}>
              <div className={Styles.boxesContainer}>
                <div className={Styles.column}>
                  <div className={Styles.box}>
                    <div className={Styles.field}>
                      <h3>Name</h3>
                      <p className={Styles.detail}>
                        {data.firstName} {data.lastName}
                      </p>
                    </div>
                    <Image
                      src={ProfileIcon.src}
                      alt="Profile"
                      width={25}
                      height={25}
                      className={Styles.myImageClass}
                    />
                  </div>
                  <div className={Styles.box}>
                    <div className={Styles.field}>
                      <h3>Date of Birth</h3>
                      <p className={Styles.detail}>{data.birthday}</p>
                    </div>
                    <Image
                      src={CalendarIcon.src}
                      alt="Calendar"
                      width={25}
                      height={25}
                      className={Styles.myImageClass}
                    />
                  </div>
                </div>

                <div className={Styles.column}>
                  <div className={Styles.box}>
                    <div className={Styles.field}>
                      <h3>Email</h3>
                      <p className={Styles.detail}>{data.email}</p>
                    </div>
                    <Image
                      src={MailIcon.src}
                      alt="Mail"
                      width={25}
                      height={25}
                      className={Styles.myImageClass}
                    />
                  </div>
                  <div className={Styles.box}>
                    <div className={Styles.field}>
                      <h3>Phone Number</h3>
                      <p className={Styles.detail}>{data.phoneNumber}</p>
                    </div>
                    <Image
                      src={PhoneIcon.src}
                      alt="Phone"
                      width={25}
                      height={25}
                      className={Styles.myImageClass}
                    />
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
  const { uuid } = context.params;
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  if (session.user.role !== "doctor") {
    const role = session.user.role;
    const uuid = session.user.uuid;
    return {
      redirect: {
        destination: `/${role}/${uuid}`,
        permanent: false,
      },
    };
  }

  const data = await axios.get("info/patient", {
    params: {
      patientUUID: uuid,
    },
    headers: {
      Authorization: `Bearer ${session.user.accessToken}`,
    },
  });

  return {
    props: {
      data: data.data.data,
    },
  };
}

export default UserPage;
