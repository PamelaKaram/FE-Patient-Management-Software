import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TextField from "@mui/material/TextField";
import moment from "moment";

function DateRange() {
    const [date, setDate] = useState(new Date());
    const [focus, setFocus] = useState(false);
  
    const [dateRange, setDateRange] = useState({
      startDate: new Date(),
      endDate: null,
      key: "selection",
    });

    const customInputRanges = [
    {
      label: ' ',
      range(value) {
        return {
          startDate: value,
          endDate: value,
        };
      },
    },
  ];
    const isBlocked = (day) => {
        if (day <= moment().subtract(1, "days")) return true;
        // if (
        //   product.schedule.available.length &&
        //   !product.schedule.available.some(
        //     (e) => e.day === day.format("dddd").toLocaleLowerCase()
        //   )
        // )
        //   return true;

        // if (blockedDays.some((date) => day.isSame(date, "day"))) return true;

        // if (
        //   bookedDays?.some(
        //     (date) =>
        //       (date.interval != PriceIntervalEnum.Minute ||
        //         date.interval != PriceIntervalEnum.Hour) &&
        //       day.isSameOrAfter(date.startDate, "day") &&
        //       day.isSameOrBefore(date.endDate, "day")
        //   )
        // ) {
        //   return true;
        // }
        // return false;
    };

    const customStyles = `
        .rdrDayHovered {
            background-color: rgba(0, 128, 0, 0.2) !important;
            border-radius: 10 !important;
        }
        .rdrToday {
            background-color: green !important;
        }

        .rdrInRange,
        .rdrStartEdge,
        .rdrEndEdge {
          background-color: rgba(0, 128, 0, 0.5) !important;
          border-radius: 10 !important;
        }

        .rdrSelected {
            background-color: #91bf76 !important;
            border-radius: 10 !important;
        }
        .rdrToday span {
            border-bottom: 2px solid green !important;
        }
    `;

    return (
        <>
            <style>{customStyles}</style>
                <div>
                    <DateRangePicker
                        ranges={[dateRange]}
                        onChange={(item) => setDateRange({ ...item.selection })}
                        showDateDisplay={false}
                        showMonthAndYearPickers={true}
                        staticRanges={[]}
                        inputRanges={[]}
                        minDate={new Date(1900, 0, 1)} // Set the minimum selectable date
                        maxDate={new Date(2099, 11, 31)} // Set the maximum selectable date
                    />
                </div>
            </>
    );
}

export default DateRange;