import React from 'react';

const Skills = ({ skills }) => {
  if (!skills || skills.length === 0) {
    return (
      <div>
        <h2>Skills</h2>
        <p>No skills data available.</p>
      </div>
    );
  }

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill.logo && <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
