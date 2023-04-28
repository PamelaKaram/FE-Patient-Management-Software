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

