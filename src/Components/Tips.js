import React from 'react';
import SideStyles from '../styles/Tips.module.css';

export default function Tips() {
    return (
        <div className={SideStyles.container}>
            <h2 className={SideStyles.title}>
                Overall Health Tips!
            </h2>
            <p className={SideStyles.introSentence}>
                Here are some of the best health tips that you can follow to maintain good health:
            </p>
            <ul className={SideStyles.tips}>
                <li className={SideStyles.tip}>&#10003; &nbsp; Eat a balanced and nutritious diet - include a variety of fruits, vegetables, whole grains, lean protein, and healthy fats in your diet.</li>
                <li className={SideStyles.tip}>&#10003; &nbsp; Exercise regularly - aim for at least 30 minutes of moderate physical activity on most days of the week.</li>
                <li className={SideStyles.tip}>&#10003; &nbsp; Get enough sleep - aim for 7-9 hours of sleep per night.</li>
                <li className={SideStyles.tip}>&#10003; &nbsp; Manage stress - practice relaxation techniques such as meditation, deep breathing, or yoga to reduce stress levels.</li>
                <li className={SideStyles.tip}>&#10003; &nbsp; Avoid smoking and limit alcohol consumption - both smoking and excessive alcohol intake are associated with numerous health risks.</li>
                <li className={SideStyles.tip}>&#10003; &nbsp; Stay hydrated - drink plenty of water throughout the day to keep your body hydrated.</li>
                <li className={SideStyles.tip}>&#10003; &nbsp; Practice good hygiene - wash your hands frequently, cover your mouth when coughing or sneezing, and keep your living spaces clean to reduce the risk of illness.</li>
                <li className={SideStyles.tip}>&#10003; &nbsp; Get regular check-ups - visit your healthcare provider regularly for routine check-ups, screenings, and vaccinations to prevent illness and manage any health conditions.</li>
            </ul>
            <p className={SideStyles.concSentence}>
            Make small daily routine changes for a healthier and happier you, starting with these tips.
            </p>
        </div>
    );

}