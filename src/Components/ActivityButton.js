import React from 'react';
import { useHistory } from 'react-router-dom';
import SideStyles from '../styles/ActivityButton.module.css';

const ActivityButton = ({ name, path }) => {
  /* const history = useHistory(); */

  const handleClick = () => {
    history.push(path);
  };

  return (
    <button className={SideStyles.customButton} onClick={handleClick}>
      <span className={SideStyles.text}>{name}</span>
    </button>
  );
};

export default ActivityButton;