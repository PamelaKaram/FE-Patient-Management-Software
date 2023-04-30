import React from "react";
import LinkIcon from '../icons/linkIcon.svg';
import SideStyles from '../styles/Links.module.css';

const Icon = ({ caption, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={SideStyles.link}>
      <div className={SideStyles.item}>
        <img src={LinkIcon.src} alt="icon" width={20} height={20} />
        {caption && <p>{caption}</p>}
      </div>
    </a>
  );
};

export default function Links() {
  return (
    <div className={SideStyles.col}>
      <Icon caption="Mental Health" url="https://www.psycom.net/mental-health-wellbeing/top-25-mental-health-articles" />
      <Icon caption="Heart Health" url="https://www.health.harvard.edu/topics/heart-health" />
      <Icon caption="Nutrition" url="https://journals.lww.com/nutritiontodayonline/pages/viewallmostpopulararticles.aspx" />
    </div>
  );
}