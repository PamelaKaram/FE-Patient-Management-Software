import { StaticDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import moment from "moment";
import { useState } from 'react';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Styles from '../styles/BookingAppointment.module.css'

function Appointment() {
    const [date, setDate] = useState(new Date());
    const [focus, setFocus] = useState(false);
    const [description, setDescription] = useState("");
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedAMPM, setSelectedAMPM] = useState(null);
    const [formErrors, setFormErrors] = useState([]);


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
            errors.push('Please select a time.');
        }

        if (description.length < 5 || description.length > 200) {
            errors.push('Description must be between 5 and 200 characters.');
        }

        setFormErrors(errors);

        return errors.length === 0;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            // Add your form submission logic here
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
                                <input id="time" className={Styles.time} type="time" value={selectedTime} onChange={(event) => handleTimeChange(event.target.value)} />
                            </div>
                        </div>
                        <div className={Styles.descriptionContainer}>
                            <label htmlFor="description">Description:</label>
                            <br />
                            <textarea id="description" className={Styles.description} value={description} onChange={handleDescriptionChange} />
                        </div>
                        {formErrors.length > 0 && (
                          <ul className={Styles.formErrors}>
                            {formErrors.map((error, index) => (
                              <li key={index} className={Styles.errorMessage}>{error}</li>
                            ))}
                          </ul>
                        )}
                        <button className={Styles.customButton} onClick={handleSubmit} type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Appointment;