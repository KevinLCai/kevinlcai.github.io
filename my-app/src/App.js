import React from 'react';
import './App.css';
import kev from './imgs/kev-5.jpeg'; // import your image file

const projectStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr', // Create two columns
  gridTemplateRows: '1fr', // Create one row
  gridGap: '20px', // Add a gap between the grid items
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
          <h2>Contact</h2>
          <p>
            You can reach me at [your email address] or through my social media links:
            <ul>
              <li><a href="[your LinkedIn profile URL]">LinkedIn</a></li>
              <li><a href="[your Twitter handle]">Twitter</a></li>
              <li><a href="[your GitHub profile URL]">GitHub</a></li>
            </ul>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;