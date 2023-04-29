import React, { useState } from 'react';
import { StaticDateRangePicker, DateRangePickerDay } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { styled } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import AppointmentsPopup from './CalendarAppointmentPopup';
import axios from 'axios';

const StyledDateRangePickerDay = styled(DateRangePickerDay)(({ theme }) => ({
  borderRadius: '50%',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const theme = createTheme({
  palette: {
    primary: green,
  },
});

function CustomDateRangePicker() {
  const [value, setValue] = useState([null, null]);
  const [appointments, setAppointments] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);

  const startDate = value[0];
  const endDate = value[1];

  const fetchAppointments = async (startDate, endDate) => {
    try {
      const response = await axios.get('your_api_endpoint_here', {
        params: { startDate, endDate },
      });
      setAppointments(response.data);
      setPopupVisible(true);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const handleDateRangeChange = async (newValue) => {
    setValue(newValue);
    if (newValue[0] && newValue[1]) {
      await fetchAppointments(newValue[0], newValue[1]);
      setPopupVisible(true);

    }
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDateRangePicker
          displayStaticWrapperAs="desktop"
          value={value}
          onChange={handleDateRangeChange}
          components={{
            Day: StyledDateRangePickerDay,
          }}
          componentsProps={{
            day: {
              styleProps: {
                selected: {
                  backgroundColor: 'red',
                  color: 'white',
                },
                selectedStartDate: {
                  borderTopLeftRadius: '50%',
                  borderBottomLeftRadius: '50%',
                },
                selectedEndDate: {
                  borderTopRightRadius: '50%',
                  borderBottomRightRadius: '50%',
                },
              },
            },
          }}
        />
        {popupVisible && (
          <AppointmentsPopup
            appointments={appointments}
            onClose={closePopup}
          />
        )}
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default CustomDateRangePicker;