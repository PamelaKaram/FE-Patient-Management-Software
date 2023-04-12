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
