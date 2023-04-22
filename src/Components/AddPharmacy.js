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
