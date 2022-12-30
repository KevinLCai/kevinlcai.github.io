import React from 'react';
import './App.css';
import kev from './imgs/kev-5.jpeg';
import UCL from './imgs/UCL_logo.png';
import Dartmouth from './imgs/Dartmouth_logo.jpeg';
import { FaGithub, FaLinkedin, FaEnvelope, FaRegFileAlt, FaMapMarkerAlt, FaCalendarAlt, FaBriefcase } from 'react-icons/fa';

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
        <FaCalendarAlt style={{ color: 'blue' }} />
        <h3>{props.year}</h3>
      </div>
      <div className="timeline-location">
        <FaMapMarkerAlt style={{ color: 'blue' }} />
        <h3>{props.location}</h3>
      </div>
      <div className="timeline-occupation">
        <FaBriefcase style={{ color: 'blue' }} />
        <h3>{props.occupation}</h3>
      </div>
      <div className="timeline-image-description">
        <div className="timeline-image">
          <p>{props.image}</p>
        </div>
        <div className="timeline-description">
          <p>{props.description}</p>
        </div>
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
        <a href="https://github.com/KevinLCai"><FaGithub style={{ fontSize: '48px' }} /></a>
        <p>GitHub</p>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/kevinlcai/"><FaLinkedin style={{ fontSize: '48px' }} /></a>
        <p>LinkedIn</p>
      </div>
      <div>
        <a href="KevinLCai@Outlook.com"><FaEnvelope style={{ fontSize: '48px' }} /></a>
        <p>Email</p>
      </div>
      <div>
        <a href="https://github.com/KevinLCai/CV"><FaRegFileAlt style={{ fontSize: '48px' }} /></a>
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
        <a href="#about">About Me</a>
        <a href="#timeline">My Journey</a>
        <a href="#projects">My Projects</a>
        <a href="#contact">Contact Me</a>
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
            <TimelineEvent year="Aug 2022 - Present" location="London" occupation="Software Engineer" description="[Brief description of event 1]"></TimelineEvent>
            <TimelineEvent year="Sep 2021 - July 2022" location="Hanover (NH), USA" occupation="Student" description="Study abroad programme at Dartmouth College"></TimelineEvent>
            <TimelineEvent year="Sep 2018 - July 2022" location="London" occupation="Student" description="L101 Economics with a year abroad"></TimelineEvent>
          </div>
        </section>
        <section id="projects" style={projectStyle}>
          <div className="project">
            <h3>DeFi Trading Bot</h3>
            <p>
              Automated DeFi and CeFi trading bot using a variety of strategies: Yield Farming, Triangular Flashloan Arbitrage, Momentum and Carry Strategies.
            </p>
          </div>
          <div className="project">
            <h3>Fractional NFT Marketplace</h3>
            <p>
              Developing a Minimum Viable Product (MVP) for a business venture aiming to bring liquidity to NFT marketplaces.
            </p>
          </div>
        </section>
        <section id="contact">
          <div className="section-content">
            <h2>Contact Me:</h2>
            <Contact />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;