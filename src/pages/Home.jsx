import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import padma from '../assets/padma.png';

const Home = () => {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="hero-image">
        <img src={padma} alt="Profile" className="img-fluid" />
      </div>

      <div className="hero-content d-flex flex-column justify-content-center text-white">
        <h1 className="display-4">
          CODING WITH PASSION, CREATING WITH PURPOSE
        </h1>

        <p className="lead">
          Welcome to my portfolio! I’m excited to showcase my work and passion for web development.
        </p>

        <div className="cta-buttons">
          {/* Navigates to ContactMe.jsx */}
          <Link to="/contactme" className="btn btn-success">
            Let's Talk
          </Link>

          {/* Downloads CV */}
          <a
            href="public/Padmavathy_Gangadaran_LatestResume.pdf"
            download
            className="btn btn-outline-light ms-3"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
