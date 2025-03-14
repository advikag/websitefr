import React, {useState} from 'react';
import './App.css';
import logo1 from './images/pearson.png';
import logo2 from './images/gyw.jpeg';
import logo3 from './images/gyw2.jpeg';
import logo0 from './images/wics.png'
import project1 from './images/akari.jpeg'; // Import project images
import project2 from './images/csxl2.png';
import project3 from './images/pacman.png';
import project4 from './images/website.png';
import githubLogo from './images/github.jpg'; // Import logo images
import linkLogo from './images/gyw.jpeg';
import youtubeLogo from './images/youtube.png';

import icon2 from './images/icon2.webp';
import icon3 from './images/iconn.jpg';
import icon4 from './images/icon4.jpg';


function App() {

  
  const projects = [
    
    {
      title: "Organization Member Roster",
      image: project2,
      description: "Worked as a full stack developer in order to develop UNC's Computer Science lab’s student organizations page. Students can now join clubs and manage their organizations effectively.",
      github: "https://github.com/comp423-24s/csxl-final-team-a3.git",
      website: "https://csxl.unc.edu/welcome",
      video: "https://youtu.be/wJDfkW_sXgM?si=w87jHvUWX7sWcouu",
      squares: ["Angular", "Python","TypeScript","FastAPI","SQLAlchmey"]
    },
    {
      title: "Pacman Game",
      image: project3,
      description: "Made use of WebGL, HTML and CSS in order to create a Pacman Game that is interactive and fun!",
      github: "https://github.com/project3",
      website: "https://project3.com",
      video: "https://youtube.com/project3",
      squares: ["HTML","CSS","WebGL"]
    },
    {
      title: "This Website",
      image: project4,
      description: "You are on it right now! I made this personal portfolio website.",
      github: "https://github.com/project3",
      website: "https://project3.com",
      video: "https://youtube.com/project3",
      squares: ["React","TypeScript","HTML","CSS","WebGL"]
    },
    {
      title: "Akari - Light Up Game",
      image: project1,
      description: "I used a model-view-controller design pattern with the JavaFX UI library to design a complete, functioning GUI implementation of the single-player logic puzzle Akari.",
      github: "https://github.com/advikag/Akari_Game",
      video: "https://youtube.com/project1",
      squares: ["Java", "GUI"]
    },
  ];

  const jobs = [
    {
      year: "2021",
      job: "Website Developer",
      company: "WICS",
      logo: logo0,
      squares: ["HTML","CSS","React"]

    },
    {
      year: "2022",
      job: "Website Developer",
      company: "Grow Your World",
      logo: logo2,
      squares: ["React", "TypeScript","CSS"]
    },
    {
      year: "2023",
      job: "Database Manager",
      company: "Grow Your World",
      logo: logo2,
      squares: ["SQL", "Pandas","Excel"]
    },
    {
      year: "2024",
      job: "Data Analyst Intern",
      company: "Pearson",
      logo: logo1,
      squares: ["Oracle Fusion", "Pandas","Excel"]
    }
  ];

  return (
    <div className="background">
      <nav className="navbar">
        <ul className="AG">
          <li><a href="#home" className="nav-link underline--magical-2 font-extrabold">Home</a></li>
        </ul>
        <ul className="topnav">
          <li><a href="#about" className="nav-link underline--magical-2 font-extrabold">About</a></li>
          <li><a href="#projects" className="nav-link underline--magical-2 font-extrabold">Projects</a></li>
          <li><a href="#contact" className="nav-link underline--magical-2 font-extrabold">Contact</a></li>
          <li id="currentDateTime" className="datetime" style={{ textAlign: 'right' }}></li>
        </ul>
      </nav>

      <section className="home">
        <h1>Hi! I am Advika Ganesh</h1>
      </section>

      <section id="about" className="about">
        <h2>Who am I?</h2>
        <p> Hi! I am a senior at UNC Chapel Hill. I am studying Computer Science and minoring in Statistics and Data Science. I am very interested in making use of technology in order to come up with creative solutions in order to improve user experience.</p>
        <br></br>
        <h2> What have I been upto?</h2>
        <div className="timeline-wrapper">
          <div className="timeline-container">
            {jobs.map((item, index) => (
              <div className="timeline-item" key={index}>
                <img src={item.logo} alt={`Logo ${index}`} />
                <h3>{item.year}</h3>
                <p>{item.job}</p>
                <p>@</p>
                <p>{item.company}</p>
                <div className="timeline-squares">
                  {item.squares && item.squares.map((text, idx) => (
                    <div className="timeline-square" key={idx}>
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>
      <div className="projects">
      <section id="projects">
      <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2>My Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-item" key={index}>
              <div className="project-title-bar">
                <h3>{project.title}</h3>
              </div>
              <div className="project-content">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-description">
                  <p>{project.description}</p>
                  <div className="project-squares">
                    {project.squares && project.squares.map((text, idx) => (
                      <div className="square" key={idx}>
                        {text}
                      </div>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-text">
                        GitHub
                      </a>
                    )}
                    {project.website && (
                      <a href={project.website} target="_blank" rel="noopener noreferrer" className="project-link-text">
                        Website
                      </a>
                    )}
                    {project.video && (
                      <a href={project.video} target="_blank" rel="noopener noreferrer" className="project-link-text">
                        Video Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    <br></br>
    
   

      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p> Thank you for visiting my website! I would love to connect!</p>
        <div className="contact-icons">
          <a href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer">
            <img src={icon2} alt="Icon 2" />
          </a>
          <a href="https://www.linkedin.com/in/advika-ganesh/" target="_blank" rel="noopener noreferrer">
            <img src={icon3} alt="Icon 3" />
          </a>
          <a href = "#home">
            <img src={icon4} alt="Icon 4" />
          </a>
        </div>
        </section>


        <footer className="footer">
        <p>Made by Advika &copy; {new Date().getFullYear()}</p>
      </footer>

      </div>
      
  );
}

export default App;
