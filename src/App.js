import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './Components/Mainpage';
import Animation from './Components/Animation/Animation';
import Contact from './Components/Contact';
import Profile from './Components/Profile';
import NoFound from './Components/NoFound';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or other loading logic
    setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Change this timeout to simulate loading time
  }, []);

  if (isLoading) {
    return <Animation />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
