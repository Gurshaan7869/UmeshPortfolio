import React from 'react';

const Education = ({ educations }) => {
  if (!educations || educations.length === 0) {
    return (
      <div>
        <h2>Education</h2>
        <p>No education data available.</p>
      </div>
    );
  }

  return (
    <div className="education-container">
      <h2>Education</h2>
      <div className="education-grid">
        {educations.map((education, index) => (
          <div key={index} className="education-card">
            <img src={education.logo}/>
            <h3>{education.degree}</h3>
            <p><strong>University:</strong> {education.university}</p>
            <p><strong>Dates:</strong> {education.dates}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
