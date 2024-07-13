import React from 'react';

const WorkExperience = ({ workExperiences }) => {
  if (!workExperiences || workExperiences.length === 0) {
    return (
      <div>
        <p>No work experience data available.</p>
      </div>
    );
  }

  return (
    <div className="experience-container">
      <div className="experience-grid">
        {workExperiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <img src={experience.logo} alt={experience.company} />
            <h3>{experience.title}</h3>
            <p>{experience.company}</p>
            <p> {experience.location}</p>
            <p> {experience.dates}</p>
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

export default WorkExperience;
