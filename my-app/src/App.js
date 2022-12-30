import React from 'react';
import './App.css';
import kev from './imgs/kev-5.jpeg'; // import your image file

function App() {
  return (
    <div className="App">
      <nav>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <header className="App-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Your Name</h1>
            <p>Software Engineer</p>
          </div>
          <img src={kev} alt="logo" />
        </div>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
            Hello! My name is [Your Name] and I am a software engineer. I have experience in [list of technologies or programming languages you know].
          </p>
        </section>
        <section id="education">
          <h2>Education</h2>
          <ul>
            <li>
              <h3>Degree 1</h3>
              <p>
                [Brief description of degree 1]
              </p>
            </li>
            <li>
              <h3>Degree 2</h3>
              <p>
                [Brief description of degree 2]
              </p>
            </li>
          </ul>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li>
              <h3>Project 1</h3>
              <p>
                [Brief description of project 1]
              </p>
            </li>
            <li>
              <h3>Project 2</h3>
              <p>
                [Brief description of project 2]
              </p>
            </li>
          </ul>
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