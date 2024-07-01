import React from 'react';

const Experience = ({ workExperiences }) => {
  if (!workExperiences || workExperiences.length === 0) {
    return (
      <div>
        <h2>Work Experience</h2>
        <p>No work experience data available.</p>
      </div>
    );
  }

  return (
    <div className="experience-container">
      <h2>Work Experience</h2>
      <div className="experience-grid">
        {workExperiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <h3>{experience.title}</h3>
            <p><strong>Company:</strong> {experience.company}</p>
            <p><strong>Location:</strong> {experience.location}</p>
            <p><strong>Dates:</strong> {experience.dates}</p>
            <ul>
              {experience.responsibilities.map((responsibility, i) => (
                <li key={i}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
