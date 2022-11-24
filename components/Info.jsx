import React from 'react';
import profilePic from '../src/assets/Profile_pic.jpeg';
import './info.css';

function Info() {
  return (
    <div className="Info__container">
      <img className="Info__profilePic" src={profilePic} />
      <div className="Info__about-Container">
        <p className="Info__fullName">Laura Smith</p>
        <p className="Info__jobTitle">Frontend Developer</p>
        <p className="Info__website">laurasmith.website</p>
      </div>
      <div className="Info__button-Container">
        <button className="Info__button Info__button-email">
          <img src="../src/assets/email.png" />
          Email
        </button>
        <button className="Info__button Info__button-linkedin">
          <img src="../src/assets/linkedin.png" />
          Linkedin
        </button>
      </div>
    </div>
  );
}

export default Info;
