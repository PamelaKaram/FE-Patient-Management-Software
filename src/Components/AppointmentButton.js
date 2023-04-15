import React from 'react';
import { useHistory } from 'react-router-dom';
import SideStyles from '../styles/AppointmentButton.module.css';

const AppointmentButton = ({ name, path }) => {
  /*const history = useHistory();*/

  const handleClick = () => {
    history.push(path);
  };

  return (
    <button className={SideStyles.customButton} onClick={handleClick}>
      {name}
    </button>
  );
};

export default AppointmentButton;