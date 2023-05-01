import React, { useState } from 'react';
import SideStyles from '../styles/RegistrationForm.module.css';
import axios from "axios";
import Image from "next/image";
import SideImage from '../Icons/registrationFormIcon.svg';

const RegisterPatient = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');

  const [message, setMessage] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!/^[a-zA-Z]+$/.test(firstName) || firstName === '') {
      alert('Please enter a valid first name.');
      return;
    }
    if (!/^[a-zA-Z]+$/.test(lastName) || lastName === '') {
      alert('Please enter a valid last name.');
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
      const res = await axios.post("http://localhost:8080/api/v1/auth/registerPatient",
        {
          firstName: firstName,
          lastName: lastName,
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
      setMessage("The patient was successfully registered!");
    } catch (error) {
      console.error(error);
      setMessage("An error occurred while registering the patient.");
    };
  }

  return (
    <form className={SideStyles.page} onSubmit={onSubmit}>
      <div className={SideStyles.form}>
        <div className={SideStyles.header}>
          <h2 className={SideStyles.title}>Register Patient</h2>
        </div>
        <p className={SideStyles.inst}>Enter the correct fields to register a new patient:</p>
        <div className={SideStyles.fields}>
          <label className={SideStyles.attribute}>
            <input className={SideStyles.text} type="text" placeholder="First Name" value={firstName} onChange={(event) => setFirstName(event.target.value)} style={{ fontSize: "13px" }} />
            <input className={SideStyles.text} type="text" placeholder="Last Name" value={lastName} onChange={(event) => setLastName(event.target.value)} style={{ fontSize: "13px" }} />
            <input className={SideStyles.text} type="text" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} style={{ fontSize: "13px" }} />
            <br />
            <input className={SideStyles.text} type="tel" placeholder="Phone Number" value={phoneNumber} onChange={(event) => setPhone(event.target.value)} style={{ fontSize: "13px" }} />
            <br />
            <input className={SideStyles.text} type="date" placeholder="Date of Birth" value={birthday} onChange={(event) => setBirthday(event.target.value)} style={{ fontSize: "13px" }} />
            <br />
          </label>
        </div>
        <div className={SideStyles.buttons}>
          <button className={SideStyles.button} type="submit">Register</button>
          <button className={SideStyles.customButton} type="button" onClick={() => { window.location.href = "/pharmacy_registration" }}>Add Pharmacy</button>
        </div>
        <div className={SideStyles.message}>{message}</div>
      </div>
      <div className={SideStyles.image}>
        <Image
          src={SideImage.src}
          alt="Phone"
          width={0}
          height={0}
          className={SideStyles.imageClass} />
      </div>
    </form>
  );
};

export default RegisterPatient;