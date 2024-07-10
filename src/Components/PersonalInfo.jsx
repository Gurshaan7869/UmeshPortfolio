import React, { useState } from 'react';
import data from '../data/portfolioData.json';

const PersonalInfo = () => {
  const personalInfo = data.personal_information;
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpand = (item) => {
    setExpandedItem(expandedItem === item ? null : item);
  };

  return (
    <div className="personal-info-container">
      <div className={`info-card ${expandedItem === 'phone' ? 'expanded' : ''}`} onClick={() => toggleExpand('phone')}>
        <img src={personalInfo.phone.logo} alt="Phone" />
        {expandedItem === 'phone' && <p>{personalInfo.phone.value}</p>}
      </div>
      <div className={`info-card ${expandedItem === 'email' ? 'expanded' : ''}`} onClick={() => toggleExpand('email')}>
        <img src={personalInfo.email.logo} alt="Email" />
        {expandedItem === 'email' && <p>{personalInfo.email.value}</p>}
      </div>
      <div className={`info-card ${expandedItem === 'linkedin' ? 'expanded' : ''}`} onClick={() => toggleExpand('linkedin')}>
        <img src={personalInfo.linkedin.logo} alt="LinkedIn" />
        {expandedItem === 'linkedin' && <p><a href={personalInfo.linkedin.value}>{personalInfo.linkedin.value}</a></p>}
      </div>
      <div className={`info-card ${expandedItem === 'location' ? 'expanded' : ''}`} onClick={() => toggleExpand('location')}>
        <img src={personalInfo.location.logo} alt="Location" />
        {expandedItem === 'location' && <p>{personalInfo.location.value}</p>}
      </div>
    </div>
  );
};

export default PersonalInfo;
