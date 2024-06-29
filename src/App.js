import React,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Profile from './Components/Profile';
import Education from './Components/Education';
import WorkExperience from './Components/Experience';
import Skills from './Components/Skills';
import Certificates from './Components/Certificates';
import Expertise from './Components/Expertise';
import Achievements from './Components/Achievements';
import Languages from './Components/Languages';
import Interests from './Components/Interests';
import Contact from './Components/Contact';
import Animation from './Components/Animation/Animation'
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500); 
  }, []);

  if (isLoading) {
    return <Animation />;
  }
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/education" element={<Education />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
