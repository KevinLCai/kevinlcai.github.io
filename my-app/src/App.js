import React from 'react';
import './App.css';
import kev from './imgs/kev-5.jpeg';
import UCL from './imgs/UCL_logo.png';
import Dartmouth from './imgs/Dartmouth_logo.jpeg';
import { FaGithub, FaLinkedin, FaEnvelope, FaRegFileAlt } from 'react-icons/fa';

const projectStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr', // Create two columns
  gridTemplateRows: '1fr', // Create one row
  gridGap: '20px', // Add a gap between the grid items
};

function TimelineEvent(props) {
  return (
    <div className="timeline-event">
      <div className="timeline-year">
        <h3>{props.year}</h3>
      </div>
      <div className="timeline-location">
        <h3>{props.location}</h3>
      </div>
      <div className="timeline-description">
        <h3>{props.occupation}</h3>
        <p>
          {props.description}
        </p>
      </div>
    </div>
  )
}

const Contact = () => {
  const contactStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', // Create two columns
    gridTemplateRows: '1fr 1fr', // Create two rows
    gridGap: '20px', // Add a gap between the grid items
  };

  return (
    <div className="contact" style={contactStyle}>
      <div>
        <a href="[your GitHub profile URL]"><FaGithub style={{ fontSize: '48px' }} /></a>
        <p>GitHub</p>
      </div>
      <div>
        <a href="[your LinkedIn profile URL]"><FaLinkedin style={{ fontSize: '48px' }} /></a>
        <p>LinkedIn</p>
      </div>
      <div>
        <a href="[your email address]"><FaEnvelope style={{ fontSize: '48px' }} /></a>
        <p>Email</p>
      </div>
      <div>
        <a href="[your resume URL]"><FaRegFileAlt style={{ fontSize: '48px' }} /></a>
        <p>Resume</p>
      </div>
    </div>
  );
};

const navbarLinks = document.querySelectorAll('nav a');

navbarLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior
    const targetId = event.target.getAttribute('href'); // Get the target section's id
    const targetSection = document.querySelector(targetId); // Get the target section element
    targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target section smoothly
  });
});

function App() {
  return (
    <div className="App">
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <header className="App-header" id="home">
        <div className="header-content">
          <div className="header-text">
            <h1>Kevin Cai</h1>
            <p>Software Engineer</p>
            <p>London, UK</p>
          </div>
          <img src={kev} alt="logo" />
        </div>
      </header>
      <main>
        <section id="about" >
          <div className="section-content">
            <h2>About Me</h2>
            <p>
              Hi, my name is Kevin and I am a software engineer working in the City of London.
            </p>
          </div>
          <div/>
        </section>
        <section id="timeline">
          <div className="timeline-container">
            {/* <div className="timeline" style={{ height: '100vh', overflowY: 'scroll' }}>
              <div className="timeline-event" style={{ width: '300px', marginBottom: '50px' }}>
                <h3>Graduate Software Engineer @ Macquarie Group</h3>
                <p>
                  [Brief description of event 1]
                </p>
              </div>
              <div className="timeline-event" style={{ width: '300px', marginBottom: '50px' }}>
                <h3>Study Abroad - Dartmouth College: Hanover, NH, USA</h3>
                <p>
                  [Brief description of event 2]
                </p>
              </div>
            </div> */}
            <TimelineEvent year="Year 1" location="London" occupation="Software Engineer" description="[Brief description of event 1]"></TimelineEvent>
            <TimelineEvent year="Year 1" location="London" occupation="Software Engineer" description="[Brief description of event 1]"></TimelineEvent>
            <TimelineEvent year="Year 1" location="London" occupation="Software Engineer" description="[Brief description of event 1]"></TimelineEvent>
            
          </div>
        </section>
        <section id="education">
          <div className="section-content">
            <h2>Education</h2>
            <div className="degrees">
              <div className="degree">
                <img src={UCL} alt="Degree 1"></img>
                <h3>Bachelor of Science in Computer Science</h3>
                <p>University of XYZ</p>
                <p>September 2015 - June 2019</p>
              </div>
              <div className="degree">
                <img src={Dartmouth} alt="Degree 1"></img>
                <h3>Master of Science in Computer Science</h3>
                <p>University of ABC</p>
                <p>September 2019 - June 2021</p>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" style={projectStyle}>
          <div className="project">
            <h3>Project 1</h3>
            <p>
              [Brief description of project 1]
            </p>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>
              [Brief description of project 2]
            </p>
          </div>
        </section>
        <section id="contact">
          <div className="section-content">
            <h2>Contact</h2>
            <Contact />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;