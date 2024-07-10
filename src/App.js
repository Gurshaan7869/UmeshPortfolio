import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Element, scroller } from 'react-scroll';
import PersonalInfo from './components/PersonalInfo';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import data from './data/portfolioData.json';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('personal_info');
  const sections = ['personal_info', 'work_experience', 'education', 'skills'];

  const handleNavigation = (section) => {
    setCurrentSection(section);
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollY) {
          setCurrentSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>UMESH BHUVANAGIRI</h1>
        <div className="navigation-buttons">
          <button onClick={() => handleNavigation('personal_info')}>
            <img src="https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png" alt="Personal Info" />
          </button>
          <button onClick={() => handleNavigation('work_experience')}>
            <img src="https://icons.veryicon.com/png/o/miscellaneous/icon-library-of-grey-sun-1/work-experience-1.png" alt="Work Experience" />
          </button>
          <button onClick={() => handleNavigation('education')}>
            <img src="https://www.freeiconspng.com/thumbs/education-png/education-png-1.png" alt="Education" />
          </button>
          <button onClick={() => handleNavigation('skills')}>
            <img src="https://www.freeiconspng.com/uploads/competence-skill-experience-company-product--16.png" alt="Skills" />
          </button>
        </div>
      </header>
      <main className="App-main">
        <TransitionGroup>
          {sections.map((section) => (
            <CSSTransition key={section} timeout={500} classNames="slide">
              <Element name={section} id={section} className={`section ${currentSection === section ? 'active' : ''}`}>
                {section === 'personal_info' && <PersonalInfo data={data.personal_information} />}
                {section === 'work_experience' && <WorkExperience workExperiences={data.contact_profile.work_experience} />}
                {section === 'education' && <Education educations={data.education} />}
                {section === 'skills' && <Skills skills={data.skills} />}
              </Element>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </main>
      <footer className="App-footer">
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;
