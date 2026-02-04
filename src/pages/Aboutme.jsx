import React from 'react';
import './Aboutme.css';

const AboutMe = () => {
  return (
    <section className="aboutme-section">
      <div className="container">
        {/* About Me Section */}
        <div className="intro">
          <h2 className="title mt-4">👋 Hello! I'm Padmavathy</h2>
          <p className="description">
            A passionate and detail-oriented web developer eager to create meaningful digital experiences. I love turning ideas into interactive web solutions and constantly explore new technologies to enhance my skills. I have a strong understanding of front-end and back-end development, along with an eye for responsive and user-friendly design.
          </p>
        </div>

        {/* Skills Section */}
        <div className="skills">
          <h4 className="skills-title">I SPECIALIZE IN A RANGE OF <span className="highlight">SKILLS</span></h4>
          <div className="skills-container">
            <div className="skill-card">
              <h4>Front-end Development</h4>
              <p>I am an expert in HTML5, CSS, Bootstrap, JavaScript and React.js</p>
            </div>
            <div className="skill-card highlight-card">
              <h4>Back-end Development</h4>
              <p>I am an expert in doing MySQL, Python, Django</p>
            </div>
            <div className="skill-card">
              <h4>Responsive Design</h4>
              <p>I am an expert in creating responsive websites that work seamlessly across all devices and screen sizes.</p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="education">
          <h4 className="section-title">🎓 Education</h4>
          <div className="education-details">
            <p><strong>Bachelor of Science in Chemistry</strong> - University of Madras(2014-2017)</p>
            <p><strong>Master of Science in Chemistry</strong> - University of Madras(2017-2019)</p>
          </div>
        </div>

        {/* Working Experience Section */}
        <div className="experience">
          <h4 className="section-title">💼 Work Experience</h4>
          <div className="experience-details">
            <p><strong>Teacher</strong> - Annie Besant Matriculation School, Kanchipuram(2019-2020)</p>
            <p><strong>Admin Executive</strong> - Trident Capital Ventures - Malaysia (2023)</p>
          </div>
        </div>

        {/* Personal Details Section */}
        <div className="personal-details">
          <h4 className="section-title">📝 Personal Details</h4>
          <div className="personal-info">
            <p><strong>Date of Birth:</strong> January 9, 1997</p>
            <p><strong>Location:</strong> Kuala Lumpur, Malaysia</p>
            <p><strong>Email:</strong> padmavathyprasanna4@gmail.com</p>
            <p><strong>Phone:</strong> +91 9087832670</p>
          </div>
        </div>

        {/* Languages Known Section */}
        <div className="languages">
          <h4 className="section-title">🌍 Languages Known</h4>
          <div className="languages-info">
            <p><strong>English</strong> - Fluent</p>
            <p><strong>Tamil</strong> - Fluent</p>
            <p><strong>Telugu</strong> - Spoken</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
