import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar">
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/work-experience">Work Experience</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/certificates">Certificates</Link></li>
        <li><Link to="/expertise">Areas of Expertise</Link></li>
        <li><Link to="/achievements">Achievements</Link></li>
        <li><Link to="/languages">Languages</Link></li>
        <li><Link to="/interests">Interests</Link></li>
        <li><Link to="/hobbies">Hobbies</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default Header;
