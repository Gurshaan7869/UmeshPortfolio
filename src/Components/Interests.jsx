import React from 'react';

const Interests = ({ interests }) => {
  if (!interests || interests.length === 0) {
    return (
      <div>
        <p>No interests data available.</p>
      </div>
    );
  }

  return (
    <div className="interests-container">
      <div className="interests-grid">
        {interests.map((interest, index) => (
          <div key={index} className="interest-card">
            <img src={interest.logo} alt="" />
            <p>{interest.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interests;
