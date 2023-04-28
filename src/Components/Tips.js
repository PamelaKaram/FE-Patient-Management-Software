import React from 'react';
import SideStyles from '../styles/Tips.module.css';
import checkListIcon from '../icons/checklistIcon.svg';
import statisticsIcon from '../icons/statisticsIcon.svg';
import alarmIcon from '../icons/alarmIcon.svg';
import sunLightIcon from '../icons/sunLightIcon.svg';
import lightningIcon from '../icons/lightningIcon.svg';
import humidityIcon from '../icons/humidityIcon.svg';
import atomIcon from '../icons/atomIcon.svg';
import stethoscopeIcon from '../icons/stethoscopeIcon.svg';
import Image from "next/image";

export default function Tips() {
    return (
        <div className={SideStyles.container}>
            <div className={SideStyles.header}>
                <h2 className={SideStyles.title}>
                    Overall Health Tips!
                </h2>
            </div>
            <div className={SideStyles.container}>
                <ul className={SideStyles.tips}>
                    <li className={SideStyles.tip}>
                        <div className={SideStyles.back}>
                            <Image src={checkListIcon} alt="" width={28} height={28} />
                        </div>Eat a balanced and nutritious diet - include a variety of fruits, vegetables, whole grains, lean protein, and healthy fats in your diet.</li>
                    <li className={SideStyles.tip}>
                        <div className={SideStyles.back}>
                            <Image src={statisticsIcon} alt="" width={25} height={25} />
                        </div>Exercise regularly - aim for at least 30 minutes of moderate physical activity on most days of the week.</li>
                    <li className={SideStyles.tip}>
                        <div className={SideStyles.back}>
                            <Image src={alarmIcon} alt="" width={28} height={28} />
                        </div>Get enough sleep - aim for 7-9 hours of sleep per night.</li>
                    <li className={SideStyles.tip}>
                        <div className={SideStyles.back}>
                            <Image src={sunLightIcon} alt="" width={34} height={34} />
                        </div>Manage stress - practice relaxation techniques such as meditation, deep breathing, or yoga to reduce stress levels.</li>
                    <li className={SideStyles.tip}>
                        <div className={SideStyles.back}>
                            <Image src={lightningIcon} alt="" width={34} height={34} />
                        </div>Avoid smoking and limit alcohol consumption - both smoking and excessive alcohol intake are associated with numerous health risks.</li>
                    <li className={SideStyles.tip}>
                        <div className={SideStyles.back}>
                            <Image src={humidityIcon} alt="" width={30} height={30} />
                        </div>Stay hydrated - drink plenty of water throughout the day to keep your body hydrated.</li>
                    <li className={SideStyles.tip}>
                        <div className={SideStyles.back}>
                            <Image src={atomIcon} alt="" width={30} height={30} />
                        </div>Practice good hygiene - wash your hands frequently, cover your mouth when coughing or sneezing, and keep your living spaces clean to reduce the risk of illness.</li>
                    <li className={SideStyles.tip}>
                        <div className={SideStyles.back}>
                            <Image src={stethoscopeIcon} alt="" width={32} height={32} />
                        </div>Get regular check-ups - visit your healthcare provider regularly for routine check-ups, screenings, and vaccinations to prevent illness and manage any health conditions.</li>
                </ul>
            </div>
        </div>
    );
}