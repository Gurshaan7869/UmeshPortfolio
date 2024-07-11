import React, { useState, useEffect, useRef } from 'react';
import PersonalInfo from './components/PersonalInfo';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Tools from './components/Tools';
import Interests from './components/Interests';
import data from './data/portfolioData.json';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('personal_info');
  const sectionRefs = useRef({});
  const sections = ['personal_info', 'work_experience', 'education', 'skills', 'certificates', 'tools', 'interests'];

  const handleNavigation = (section) => {
    setCurrentSection(section);
    sectionRefs.current[section].scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  useEffect(() => {
    const handleScroll = (event) => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      let activeSection = sections[0];
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = sectionRefs.current[section];
        if (element && element.offsetTop <= scrollY + windowHeight / 2) {
          activeSection = section;
          break;
        }
      }
      setCurrentSection(activeSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  const handleWheel = (event) => {
    const deltaY = event.deltaY;
    const currentIndex = sections.indexOf(currentSection);

    if (deltaY > 0 && currentIndex < sections.length - 1) {
      handleNavigation(sections[currentIndex + 1]);
    } else if (deltaY < 0 && currentIndex > 0) {
      handleNavigation(sections[currentIndex - 1]);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentSection, sections]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>UMESH BHUVANAGIRI</h1>
        <div className="navigation-buttons">
          {sections.map((section) => (
            <button key={section} onClick={() => handleNavigation(section)}>
              <img src={`icons/${section}.png`} alt={section} />
            </button>
          ))}
        </div>
      </header>
      <main className="App-main">
        {sections.map((section) => (
          <div
            key={section}
            id={section}
            ref={(el) => (sectionRefs.current[section] = el)}
            className={`section ${currentSection === section ? 'active' : ''}`}
          >
            {section === 'personal_info' && <PersonalInfo data={data.personal_information} />}
            {section === 'work_experience' && <WorkExperience workExperiences={data.contact_profile.work_experience} />}
            {section === 'education' && <Education educations={data.education} />}
            {section === 'skills' && <Skills skills={data.skills} />}
            {section === 'certificates' && <Certificates certificates={data.certificates} />}
            {section === 'tools' && <Tools tools={data.expertise_and_tools} />}
            {section === 'interests' && <Interests interests={data.interests} />}
          </div>
        ))}
      </main>
      <footer className="App-footer">
        <p>phone: {data.personal_information.phone.value}</p>
        <p>email: {data.personal_information.email.value}</p>
        <p>LinkedIn: {data.personal_information.linkedin.value}</p>
        <p>&copy; Umesh Bhuvanagiri </p>
      </footer>
    </div>
  );
}

export default App;
