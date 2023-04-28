import React from "react";
import WelcomeStyles from "../styles/Welcome.module.css";

const findMax = (days) => {
  let max = days[0].patients;
  for (let i = 0; i < days.length; i++) {
    if (days[i].patiens > max) {
      max = days[i].patients;
    }
  }
  return max;
};
const Welcome = () => {
  const days = [
    { day: "Mon", patients: 5 },
    { day: "Tues", patients: 6 },
    { day: "Wed", patients: 10 },
    { day: "Thu", patients: 6 },
    { day: "Fri", patients: 1 },
  ];
  const max = findMax(days);

  return (
    <div className={WelcomeStyles.main}>
      <h1>Welcome Dr. Walid</h1>
      <div className={WelcomeStyles.card}>
        <h3>Your patients Activities</h3>
        <h6>Today, 6 april 2023</h6>
        <div className={WelcomeStyles.stats}>
          {days.map((day, index) => (
            <Bar
              day={day.day}
              height={(day.patients / max) * 100}
              key={index}
            />
          ))}
        </div>
      </div>
      <button className={WelcomeStyles.button}>
        You have 10 patients visiting today
      </button>
    </div>
  );
};

const Bar = ({ height, day }) => (
  <div className={WelcomeStyles.bar}>
    <span>{day}</span>
    <div style={{ height: height }} />
  </div>
);

export default Welcome;
