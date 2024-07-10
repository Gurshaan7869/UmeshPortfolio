import React from 'react';

const Tools = ({ tools }) => {
  if (!tools || tools.length === 0) {
    return (
      <div>
        <h2>Expertise and Tools</h2>
        <p>No tools data available.</p>
      </div>
    );
  }

  return (
    <div className='section-wrap'>
    <div className="tools-container">
      <h2>Expertise and Tools</h2>
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div key={index} className="tool-card">
            <img src={tool.logo} alt="" />
            <p>{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Tools;
