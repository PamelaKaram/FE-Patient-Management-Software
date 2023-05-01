import React, { useState } from 'react';
import SideStyles from '../styles/UpdatePatientMedicalPrescription.module.css';
import axios from "axios";
import Image from "next/image";
import SideImage from '../Icons/medicalPrescriptionImage.svg';

const UpdateMedicalPrescription = ({ patientId }) => {

  const [name, setName] = useState('');
  const [medicineFrequency, setMedicineFrequency] = useState('');
  const [medicineTiming, setMedicineTiming] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!/^[a-zA-Z0-9\s]+$/.test(name) || name === '') {
      alert('Please enter a valid Medicine Name.');
      return;
    }

    if (!medicineFrequency || !medicineTiming) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const res = await axios.post("API URL",
        {
          patientId: patientId,
          name: name,
          medicineFrequency: medicineFrequency,
          medicineTiming: medicineTiming
        },
      );
      setMessage("The Prescription was successfully updated!");
    } catch (error) {
      console.error(error);
      setMessage("An error occurred while updating the medical prescription.");
    };
  }

  return (
    <form className={SideStyles.page} onSubmit={onSubmit}>
      <div className={SideStyles.form}>
        <div className={SideStyles.header}>
          <h2 className={SideStyles.title}>Update Patient Medical Prescription</h2>
        </div>
        <p className={SideStyles.inst}>Prescribe medication to the patient:</p>
        <div className={SideStyles.fields}>
          <label className={SideStyles.attribute}>
            <input className={SideStyles.text} type="text" placeholder="Medicine Name" value={name} onChange={(event) => setName(event.target.value)} style={{ fontSize: "13px" }} />
            <br />
            
            <select className={SideStyles.text} id="medicine-frequency" name="medicine-frequency" value={medicineFrequency} onChange={(event) => setMedicineFrequency(event.target.value)} style={{ fontSize: "13px" }}>
                <option value="">Select Medicine Frequency</option>
                <option value="1">Once a day</option>
                <option value="2">Twice a day</option>
                <option value="3">Three times a day</option>
            </select>

            <br />

            <select className={SideStyles.text} id="medicine-timing" name="medicine-timing" value={medicineTiming} onChange={(event) => setMedicineTiming(event.target.value)} style={{ fontSize: "13px" }}>
                <option value="">Select Medicine Timing</option>
                <option value="1">Before Meal</option>
                <option value="2">After Meal</option>
            </select>

            <br />
          </label>
        </div>
          <button className={SideStyles.button} type="submit">Submit</button>
        <div className={SideStyles.message}>{message}</div>
      </div>
      <div className={SideStyles.image}>
        <Image
          src={SideImage.src}
          alt="Image"
          width={0}
          height={0}
          className={SideStyles.imageClass} />
      </div>
    </form>
  );
};

export default UpdateMedicalPrescription;
