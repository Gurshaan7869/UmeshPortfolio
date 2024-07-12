import React from 'react';

const Certificates = ({ certificates }) => {
  if (!certificates || certificates.length === 0) {
    return (
      <div>
        <p>No certificates data available.</p>
      </div>
    );
  }

  return (
    <div className="certificates-container">
      <div className="certificates-grid">
        {certificates.map((certificate, index) => (
          <div key={index} className="certificate-card">
            <img src={certificate.logo}/>
            <p>{certificate.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
