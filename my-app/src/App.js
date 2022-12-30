import React from 'react';
import './App.css';
import kev from './imgs/kev-5.jpeg';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const projectStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr', // Create two columns
  gridTemplateRows: '1fr', // Create one row
  gridGap: '20px', // Add a gap between the grid items
};

const Contact = () => {
  const contactStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr', // Create three columns
    gridTemplateRows: '1fr 1fr', // Create two rows
    gridGap: '20px', // Add a gap between the grid items
  };

  return (
    <div className="contact" style={contactStyle}>
      <a href="[your GitHub profile URL]"><FaGithub style={{ fontSize: '48px' }} /></a>
      <a href="[your LinkedIn profile URL]"><FaLinkedin style={{ fontSize: '48px' }} /></a>
      <a href="[your email address]"><FaEnvelope style={{ fontSize: '48px' }} /></a>
      <p>GitHub</p>
      <p>LinkedIn</p>
      <p>Email</p>
    </div>
  );
};

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
          </div>
          <img src={kev} alt="logo" />
        </div>
      </header>
      <main>
        <section id="about">
          <div className="section-content">
            <h2>About Me</h2>
            <p>
              Hello! My name is [Your Name] and I am a software engineer. I have experience in [list of technologies or programming languages you know].
            </p>
          </div>
          <div/>
        </section>
        <section id="timeline">
          <div className="timeline-container">
            <div className="timeline">
              <div className="timeline-event">
                <h3>Year 1</h3>
                <p>
                  [Brief description of event 1]
                </p>
              </div>
              <div className="timeline-event">
                <h3>Year 2</h3>
                <p>
                  [Brief description of event 2]
                </p>
              </div>
              <div className="timeline-event">
                <h3>Year 3</h3>
                <p>
                  [Brief description of event 3]
                </p>
              </div>
              <div className="timeline-event">
                <h3>Year 4</h3>
                <p>
                  [Brief description of event 4]
                </p>
              </div>
              <div className="timeline-event">
                <h3>Year 5</h3>
                <p>
                  [Brief description of event 5]
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="education">
          <div className="section-content">
            <h2>Education</h2>
            <p>
              Education
            </p>
          </div>
          <div/>
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