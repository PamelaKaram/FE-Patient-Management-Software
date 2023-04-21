import React from "react";
import LinkIcon from '../icons/linkIcon.svg';
import SideStyles from '../styles/Links.module.css';

  const Icon = ({ caption }) => {
    return (
      <div className={SideStyles.item}>
        <img src={LinkIcon.src} alt="icon" width={20} height={20} />
        {caption && <p>{caption}</p>}
      </div>
    );
  };

export default function Links() {
    return (
    <div className={SideStyles.col}>
        <Icon caption="Link" className={SideStyles.link}/>
        <Icon caption="Link" className={SideStyles.link}/>
        <Icon caption="Link" className={SideStyles.link}/>
    </div>
    );
}