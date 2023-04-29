import React from "react";
import SunIcon from '../icons/sunIcon.svg';
import WaterIcon from '../icons/waterIcon.svg';
import FoodIcon from '../icons/foodIcon.svg';
import HeartIcon from '../icons/heartIcon.svg';
import PillIcon from '../icons/pillIcon.svg';
import AttentionIcon from '../icons/attentionIcon.svg';
import SideStyles from '../styles/Reminders.module.css';

const Icon = ({ iconSrc, caption }) => {
    return (
      <div className={SideStyles.item}>
        <img src={iconSrc} alt="icon" width={35} height={35} />
        {caption && <p>{caption}</p>}
      </div>
    );
  };

const Buttons = () => {
    return (
        <div className={SideStyles.row}>
            <Icon iconSrc={SunIcon.src} caption="Did you exercise today?" className={SideStyles.reminder}/>
            <Icon iconSrc={WaterIcon.src} caption="Did you drink 2-3 liters of water?" className={SideStyles.reminder}/>
            <Icon iconSrc={FoodIcon.src} caption="Are you eating healthy food?" className={SideStyles.reminder}/>
            <Icon iconSrc={HeartIcon.src} caption="Did you take your blood pressure?" className={SideStyles.reminder}/>
            <Icon iconSrc={PillIcon.src} caption="Did you take your medicine?" className={SideStyles.reminder}/>
            <Icon iconSrc={AttentionIcon.src} caption="Are you taking care of your Mental Health?" className={SideStyles.reminder}/>
        </div>
      );
  };
  
export default Buttons;