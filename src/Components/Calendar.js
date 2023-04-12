import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../styles/Calendar.module.css'

const localizer = momentLocalizer(moment);

const AppointmentsCalendar = () => {
  const [appointments, setAppointments] = useState([]);
  const [view, setView] = useState('month');
  const [showFuture, setShowFuture] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/appointments');
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleViewChange = (view) => {
    setView(view);
  };

  const handleFutureToggle = () => {
    setShowFuture(!showFuture);
  };

  const handleFutureButton = () => {
    setShowFuture(true);
  };

  const handlePastButton = () => {
    setShowFuture(false);
  };

  const filteredAppointments = showFuture
    ? appointments.filter((appointment) =>
        moment(appointment.start).isSameOrAfter(moment())
      )
    : appointments.filter((appointment) =>
        moment(appointment.start).isBefore(moment())
      );
