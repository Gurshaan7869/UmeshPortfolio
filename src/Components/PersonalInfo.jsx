import React from 'react';
import data from '../data/portfolioData.json';

const PersonalInfo = () => {
  const personalInfo = data.personal_information;

  return (
    <div className="card">
      <h2>Personal Information</h2>
      <p>Phone: {personalInfo.phone}</p>
      <p>Email: {personalInfo.email}</p>
      <p>LinkedIn: <a href={personalInfo.linkedin}>{personalInfo.linkedin}</a></p>
      <p>Location: {personalInfo.location}</p>
    </div>
  );
};

export default PersonalInfo;
