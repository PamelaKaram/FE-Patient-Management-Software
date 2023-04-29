import React, { useState } from 'react';
import { StaticDateRangePicker, DateRangePickerDay } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { styled } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';

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

  const startDate = value[0];
  const endDate = value[1];

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDateRangePicker
          displayStaticWrapperAs="desktop"
          value={value}
          onChange={(newValue) => setValue(newValue)}
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
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default CustomDateRangePicker;