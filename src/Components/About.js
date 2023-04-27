import React from 'react';
import Image from 'next/image';
import back from '../icons/drImage.svg';
function About() {
  return (
    <div style={{ backgroundColor: '#E8F1FF', display: 'flex' }}>
      <Image 
      src={back.src} alt="About section image" width="400" height="400" />
      <div>
        <h2>About Us</h2>
        <p>We are a team of professionals dedicated to providing high-quality services to our clients.</p>
        <button onClick={() => alert('Request an appointment')}>Request an appointment</button>
      </div>
    </div>
  );
}

export default About;