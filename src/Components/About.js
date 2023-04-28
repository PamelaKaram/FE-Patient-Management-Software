import React from 'react';
import Image from 'next/image';
import back from '../icons/drImagee.png';
import homeStyles from '../styles/Home.module.css';
import ChatButton from '../Components/RequestAptPop';
import home from '../styles/EmailReq.module.css';





function About() {
    return (
        <div className={homeStyles.rectangle}>
            <Image
                src={back.src} alt="About section image" width="400" height="400"
                className={home.pic} />
            <div className={homeStyles.about}>
                <h2>About Me</h2>
                <p>My mission is to promote heart health and prevent heart disease in my patients.
                    I offer a range of preventive measures such as lifestyle modifications, medication
                    management, and regular monitoring to help my patients maintain optimal heart health.
                    Book a consultation, get diagnosed and find the best treatment.</p>
                <ChatButton onClick={() => alert('Request an appointment')}
                />
            </div>
        </div>
    );
}

export default About;