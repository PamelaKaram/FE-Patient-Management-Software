import React, { useState } from 'react';
import SideStyles from '../styles/RegistrationForm.module.css';
import axios from "axios";
import Image from "next/image";
import SideImage from '../Icons/registrationFormIcon.svg';

const AddPharmacy = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');

  const [message, setMessage] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!/^[a-zA-Z]+$/.test(name) || name === '') {
      alert('Please enter a valid name.');
      return;
    }
    if (email === '' || !/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (phoneNumber === '' || !/^\(?\d{2}\)?[- ]?\d{3}[ ]?\d{3}$/.test(phoneNumber)) {
      alert('Please enter a valid phone number.');
      return;
    }
    if (birthday === '' || !/^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/.test(birthday)) {
      alert('Please enter a valid date of birth in the format mm/dd/yyyy.');
      return;
    }

    try {
      const res= await axios.post("http://localhost:8080/api/v1/auth/addPharmacy", 
      {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        birthday: birthday,
      }, 
      {
      headers: {
        "Authorization": "Bearer"
      },
      }
    );
    setMessage("The pharmacy was successfully added!");
    } catch (error) {
      console.error(error);
      setMessage("An error occurred while adding the pharmacy.");
    };
  }

  return (
    <form className={SideStyles.page} onSubmit={onSubmit}>
      <div className={SideStyles.form}>
        <div className={SideStyles.header}>
          <h2 className={SideStyles.title}>Add Pharmacy</h2>
        </div>
        <p className={SideStyles.inst}>Enter the correct fields to register a new pharmacy:</p>
        <div className={SideStyles.fields}>
          <label className={SideStyles.attribute}>
            <input className={SideStyles.text} type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} style={{ fontSize: "13px" }}/>
          </label>
          <label className={SideStyles.attribute}>
            <input className={SideStyles.text} type="text" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} style={{ fontSize: "13px" }}/>
          </label>
          <br />
          <label className={SideStyles.attribute}>
            <input className={SideStyles.text} type="tel" placeholder="Phone Number" value={phoneNumber} onChange={(event) => setPhone(event.target.value)} style={{ fontSize: "13px" }}/>
          </label>
          <br />
          <label className={SideStyles.attribute}>
            <input className={SideStyles.text} type="date" placeholder="Date of Establishment" value={birthday} onChange={(event) => setBirthday(event.target.value)} style={{ fontSize: "13px" }}/>
          </label>
          <br />
          </div>
          <div className={SideStyles.buttons}>
            <button className={SideStyles.button} type="submit">Register</button>
            <button className={SideStyles.customButton} type="button" onClick={() => { window.location.href = "/patient_registration" }}>Register Patient</button>
          </div>
          <div className={SideStyles.message}>{message}</div>
          </div>
          <div className={SideStyles.image}>
      <Image 
        src={SideImage.src} 
        alt="Phone"  
        width={450}
        height={800}
        className={SideStyles.imageClass} />
      </div>
    </form>
  );
};

export default AddPharmacy;