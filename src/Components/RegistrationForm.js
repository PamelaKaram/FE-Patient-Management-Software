import React, { useState } from 'react';
import SideStyles from '../styles/RegistrationForm.module.css';

const RegisterPatient = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted!');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Age:', age);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Phone Number:', phone);
  };

  return (
    <form className={SideStyles.page} onSubmit={handleSubmit}>
      <div className={SideStyles.header}>
        <h2 className={SideStyles.title}>Register Patient</h2>
      </div>
      <label className={SideStyles.attribute}>
        First Name:
        <input className={SideStyles.text} type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
      </label>
      <br />
      <label className={SideStyles.attribute}>
        Last Name:
        <input className={SideStyles.text} type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
      </label>
      <br />
      <label className={SideStyles.attribute}>
        Age:
        <input className={SideStyles.text} type="text" value={age} onChange={(event) => setAge(event.target.value)} />
      </label>
      <br />
      <label className={SideStyles.attribute}>
        Email:
        <input className={SideStyles.text} type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <label className={SideStyles.attribute}>
        Password:
        <input className={SideStyles.text} type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <br />
      <label className={SideStyles.attribute}>
        Phone Number:
        <input className={SideStyles.text} type="text" value={phone} onChange={(event) => setPhone(event.target.value)} />
      </label>
      <br />
      <button className={SideStyles.button} type="submit">Register</button>
    </form>
  );
};

export default RegisterPatient;