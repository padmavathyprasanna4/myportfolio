import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutMe from './pages/Aboutme';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
