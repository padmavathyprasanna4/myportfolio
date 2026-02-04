import React from 'react';
import './Projects.css';

// Import project images
import ecommerce from '../assets/ecommerce.png';
import tourist from '../assets/tourist.png';
import divineperfume from '../assets/divineperfume.png';
import resumebuilder from '../assets/resumebuilder.png';
import handbag from '../assets/handbag.png';
import babyproducts from '../assets/babyproducts.png';

const projects = [
  {
    title: 'E-Commerce Website',
    description: 'Developed a fully functional e-commerce platform using React and Node.js, complete with user authentication.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: ecommerce,
    link: 'https://padmavathyprasanna4.github.io/fashionwebsite/register.html',
  },
  {
    title: 'Tourist Website',
    description: 'Designed and built a sleek personal portfolio showcasing a photographer’s skills, projects, and achievements.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: tourist,
    link: 'https://kodaikanalwebsite.vercel.app/register.html',
  },
  {
    title: 'Divine Perfumes Website',
    description: 'Created a personal blog website with features like authentication, blogging tools, and a responsive UI.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    image: divineperfume,
    link: 'https://divine-aura-flb9.vercel.app/',
  },
  {
    title: 'Resume Builder',
    description: 'Built a resume builder application with React and Firebase, allowing users to create and customize professional resumes.',
    tech: ['HTML', 'CSS', 'JavaScript ', 'React.js'],
    image: resumebuilder,
    link: 'https://resumebuilder-pi-sand.vercel.app/',
  },
  {
    title: 'Luxury Handbag Store',
    description: 'Developed a luxury handbag store website using React and Firebase, featuring product listings, cart functionality, and user authentication.',
    tech: ['HTML', 'CSS', 'JavaScript '],
    image: handbag,
    link: 'https://luxuryhandbag.vercel.app/',
  },
  {
    title: 'Baby Products',
    description: 'Created a baby products website with responsive design and interactive features.',
    tech: ['HTML', 'CSS'],
    image: babyproducts,
    link: 'https://padmavathyprasanna4.github.io/babyzone/',
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="container">
        <h3 className="projects-title ms-5 fw-bold mt-4">
          HERE'S A GLIMPSE OF SOME EXCITING 👨‍💻 PROJECTS I'VE DONE
        </h3>

        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech">{tech}</span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    className=" btn-view-project"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* NEW: View All Projects Link */}
        <div className="view-all-projects mt-4 text-center">
          <a
            href="https://github.com/padmavathyprasanna4"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
