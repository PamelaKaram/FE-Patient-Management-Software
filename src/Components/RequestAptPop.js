import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SideStyles from "../styles/EmailReq.module.css";
import axios from "../../lib/axios";

function RequestAptPop() {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit } = useForm();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const onSubmit = async (data) => {
    const { firstName, lastName, email, phone, message } = data;
    try {
      await axios.post("requests/", {
        firstName,
        lastName,
        email,
        phoneNumber: phone,
        message,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button className={SideStyles.customButton} onClick={togglePopup}>
        <span className={SideStyles.text}>Request an Appointment</span>
      </button>

      {isOpen && (
        <div className={SideStyles.popupInner}>
          <div className={SideStyles.header}>
            <h2 className={SideStyles.title}> Requesting an appointment </h2>
            <button className={SideStyles.closeBtn} onClick={togglePopup}>
              X
            </button>
          </div>
          <div className={SideStyles.info}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>First Name:</label>
              <input
                type="text"
                {...register("firstName")}
                placeholder="Enter your first name"
              />

              <label>Last Name:</label>
              <input
                type="text"
                {...register("lastName")}
                placeholder="Enter your last name"
              />

              <label>Email:</label>
              <input
                type="email"
                {...register("email")}
                placeholder="Enter your email"
              />

              <label>Phone:</label>
              <input
                type="tel"
                {...register("phone")}
                placeholder="Enter your phone number"
              />

              <label>Message:</label>
              <textarea
                {...register("message")}
                placeholder="Enter your message"
              ></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default RequestAptPop;