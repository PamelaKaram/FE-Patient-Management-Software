import { StaticDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import moment from "moment";
import { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Styles from "../styles/BookingAppointment.module.css";
import useAxiosAuth from "../../lib/hooks/useAxiosAuth";
import { Router } from "react-router-dom";
import { useRouter } from "next/router";

function Appointment({ patientData }) {
  const [date, setDate] = useState(new Date());
  const [focus, setFocus] = useState(false);
  const [description, setDescription] = useState("");
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedAMPM, setSelectedAMPM] = useState(null);
  const [formErrors, setFormErrors] = useState([]);
  const [message, setMessage] = useState("");

  console.log(date, selectedTime, description);

  const handleSingleDateChange = (date) => {
    setDate(date);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleAMPMChange = (ampm) => {
    setSelectedAMPM(ampm);
  };

  const isBlocked = (day) => {
    if (day <= moment().subtract(1, "days")) return true;
  };

  const validateForm = () => {
    const errors = [];

    if (!selectedTime) {
      errors.push("Please select a time.");
    }

    if (description.length < 5 || description.length > 200) {
      errors.push("Description must be between 5 and 200 characters.");
    }

    setFormErrors(errors);

    return errors.length === 0;
  };

  const axiosAuth = useAxiosAuth();

  const router = useRouter();

  const handleSubmit = async () => {
    if (validateForm()) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");

      const formattedDate = `${year}-${month}-${day}`;

      await axiosAuth.post("/appointments/create", {
        patientUUID: patientData.uuid,
        date: formattedDate,
        time: selectedTime + ":00",
        description: description,
      });
      setMessage("Successfully submitted appointment.");
      router.push(`/doctor/patients/${patientData.uuid}`);
    } else {
      console.error("Form validation failed");
    }
  };

  return (
    <div className={Styles.page}>
      <div className={Styles.container}>
        <div className={Styles.title}>
          <h3 className={Styles.titleText}>Book an Appointment</h3>
        </div>
        <div className={Styles.AppBox}>
          <div className={Styles.appointmentContainer}>
            <div className={Styles.calendarContainer}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                  value={date}
                  label="See Appointments"
                  onChange={handleSingleDateChange}
                />
              </LocalizationProvider>
            </div>
            <div className={Styles.timeSlotsContainer}>
              <div className={Styles.timeSlot}>
                <label htmlFor="time">Time:</label>
                <br />
                <input
                  id="time"
                  className={Styles.time}
                  type="time"
                  value={selectedTime}
                  onChange={(event) => handleTimeChange(event.target.value)}
                />
              </div>
            </div>
            <div className={Styles.descriptionContainer}>
              <label htmlFor="description">Description:</label>
              <br />
              <textarea
                id="description"
                className={Styles.description}
                value={description}
                onChange={handleDescriptionChange}
              />
            </div>
            {formErrors.length > 0 && (
              <ul className={Styles.formErrors}>
                {formErrors.map((error, index) => (
                  <li key={index} className={Styles.errorMessage}>
                    {error}
                  </li>
                ))}
              </ul>
            )}
            <h3>{message}</h3>
            <button
              className={Styles.customButton}
              onClick={handleSubmit}
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
