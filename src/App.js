import React, { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import data from './data/portfolioData.json';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('personal_info');

  const handleNavigation = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Digital Portfolio</h1>
        <div className="navigation-buttons">
          <button onClick={() => handleNavigation('personal_info')}>Personal Info</button>
          <button onClick={() => handleNavigation('work_experience')}>Work Experience</button>
          <button onClick={() => handleNavigation('education')}>Education</button>
          <button onClick={() => handleNavigation('skills')}>Skills</button>
          {/* Add more buttons for other sections as needed */}
        </div>
      </header>
      <main className="App-main">
        <div className="card">
          {currentSection === 'personal_info' && <PersonalInfo data={data.personal_information} />}
          {currentSection === 'work_experience' && <WorkExperience workExperiences={data.contact_profile.work_experience} />}
          {currentSection === 'education' && <Education educations={data.education} />}
          {currentSection === 'skills' && <Skills skills={data.skills} />}
        </div>
      </main>
      <footer className="App-footer">
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;
