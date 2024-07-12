import React from 'react';
import photo from "../data/profile.png"

const About = ({ info }) => {
  if (!info || info.length === 0) {
    return (
      <div>
        <p>No about data available.</p>
      </div>
    );
  }

  return (
    <div className="about-container">
      <div className="about-card">
        <div className='wrapper'>
        <div className='about-para'>
        {info.map((about, index) => (
          <div key={index} >
            <p> {about.description}</p>
          </div>
        ))}
      </div>
      <div className='profile-photo'><img src={photo} alt="" /></div>
      </div>
      </div>
    </div>
  );
};

export default About;
