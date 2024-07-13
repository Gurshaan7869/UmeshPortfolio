import React, { useState, useEffect, useRef } from 'react';
import PersonalInfo from './components/PersonalInfo';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Tools from './components/Tools';
import Interests from './components/Interests';
import About from './components/About';
import data from './data/portfolioData.json';
import './App.css';
import { Link } from 'react-scroll';

function App() {
  const [currentSection, setCurrentSection] = useState('about');
  const sectionRefs = useRef({});
  const sections = ['about', 'work_experience', 'education', 'skills', 'certificates', 'tools', 'interests'];
  const headers = [
    'https://www.freeiconspng.com/thumbs/about-us-icon/information-about-us-icon-16.png',
    'https://cdn-icons-png.flaticon.com/512/4804/4804223.png',
    'https://www.freeiconspng.com/thumbs/education-png/education-png-1.png',
    'https://png.pngtree.com/png-clipart/20230417/original/pngtree-skills-line-icon-png-image_9062935.png',
    'https://cdn-icons-png.flaticon.com/512/1321/1321016.png',
    'https://cdn-icons-png.flaticon.com/512/8463/8463653.png',
    'https://cdn-icons-png.flaticon.com/512/4384/4384371.png'
  ];

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
          {sections.map((section, index) => (
            <button key={section} onClick={() => handleNavigation(section)}>
              <img src={headers[index]} alt={section} />
            </button>
          ))}
        </div>
      </header>
      <main className="App-main">
        {sections.map((section, index) => (
          <div
            key={section}
            id={section}
            ref={(el) => (sectionRefs.current[section] = el)}
            className={`section ${currentSection === section ? 'active' : ''}`}
          >
            <div className="section-header">
              <img src={headers[index]} alt={section} />
              <h2>{section.replace('_', ' ').toUpperCase()}</h2>
            </div>
            {section === 'about' && <About info={data.about} />}
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
        <div className='footer-elements'>
        <img src='https://www.freeiconspng.com/thumbs/telephone-icon/mobile-phone-icon-phone-telephone-icon-22.png'/> <p>{data.personal_information.phone.value}</p>
        </div>
        <div className='footer-elements'>
        <img src='https://www.pngall.com/wp-content/uploads/13/Email-Logo-PNG-File.png'/> <p>{data.personal_information.email.value}</p>
        </div>
        <div className='footer-elements'>
        <a href={data.personal_information.linkedin.value}><p><img src={data.personal_information.linkedin.logo}/></p></a>
        </div>
        <div className='footer-elements'>
        <p>&copy; Umesh Bhuvanagiri </p>
        </div>
        </footer>
    </div>
  );
}

export default App;
