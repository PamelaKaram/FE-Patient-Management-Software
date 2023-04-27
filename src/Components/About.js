import React from 'react';
import Image from 'next/image';
import back from '../icons/drImage.svg';
import homeStyles from '../styles/Home.module.css';
function About() {
  return (
    <div className={homeStyles.rectangle}>
      <Image 
      src={back.src} alt="About section image" width="400" height="400"
      className={homeStyles.pic}/>
      <div>
        <h2>About Us</h2>
        <p>My mission is to promote heart health and prevent heart disease in my patients. 
            I offer a range of preventive measures such as lifestyle modifications, medication 
            management, and regular monitoring to help my patients maintain optimal heart health.
            Book a consultation, get diagnosed and find the best treatment.</p>
        <button onClick={() => alert('Request an appointment')}>Request an appointment</button>
      </div>
    </div>
  );
}

export default About;