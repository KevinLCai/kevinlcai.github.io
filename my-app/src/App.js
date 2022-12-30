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

function addEventListeners() {
  const button1 = document.getElementById('button1');
  const button2 = document.getElementById('button2');
  const button3 = document.getElementById('button3');
  const div1 = document.getElementById('div1');
  const div2 = document.getElementById('div2');
  const div3 = document.getElementById('div3');

  button1.addEventListener('click', () => {
    div1.classList.remove('hidden');
    div2.classList.add('hidden');
    div3.classList.add('hidden');
  });

  button2.addEventListener('click', () => {
    div1.classList.add('hidden');
    div2.classList.remove('hidden');
    div3.classList.add('hidden');
  });

  button3.addEventListener('click', () => {
    div1.classList.add('hidden');
    div2.classList.add('hidden');
    div3.classList.remove('hidden');
  });
}

window.addEventListener('load', addEventListeners);

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
        <p>CV</p>
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
  <div>
    <button id="button1" class="black-button">Background</button>
    <button id="button2" class="black-button">Interests</button>
    <button id="button3" class="black-button">Skills</button>
  </div>
  <div id="div1" class="hidden">
    <div id="about-description">
      <p>
        <b>Hi, my name is Kevin and I am a software engineer working in the City of London within the TradFi Commodities Trading Industry. I work for Macquarie Group within the Quantitative Investment Strategies Technology team where I work closely with Traders and Quants to deliver new business strategies, improve existing systems and put out fires.</b>
      </p>
      <p>
        <b>In 2022 I graduated from University College London with a 1st Class Degree in Economics with year abroad. I studied abroad at Dartmouth College in the USA for a year, being able to gain a formal education in Computer Science due to the liberal arts system. The opportunity to experience another country's culture was an incredibly meaningful experience, and I hope to continue to expand my horizons through living abroad again in the future.</b>
      </p>
    </div>
  </div>
  <div id="div2" class="hidden">
    <div id="about-description">
      <p>
        <b>I am a strong believer in the power of Blockchain Technologies to create a more equitable and uncorruptable financial system through decentralised finance. Furthermore, this technology will improve data privacy, and eliminate the exploitation of user data.</b>
      </p>
      <p>
        <b>It frustrates me to see how cryptocurrency can be used by centralised intermediaries to scam retail investors with rugpulls and multi-billion dollar fraud. This is strictly against the ethos of web3 and pushes innocent people away from this space for all the wrong reasons.</b>
      </p>
      <p>
        <b>I have been following the evolution of this technology since 2016 following the Etherum Classic Hardfork. It has been fascinating to see the industry evolve and to have made it into my second crypto winter.
          My passions have led me to become a self-taught programmer, learning Python, Solidity and Full-Stack Web Development alongside my full-time studies in Economics.</b>
      </p>
      <p>
        <b>Using my newly developed skills I was able to land a SWE internship within 4 months of writing my first line of code, having the opportunity to write production quality Python. I later went on to write my Economics Thesis modelling the adoption of Blockchain Technologies; discussing the impacts of Decentralised Finance on modern economies.</b>
      </p>
      <p>
        <b>Nowadays I like to travel, spend time with friends, play tennis, the guitar and immerse myself in the decentralised web. I constantly strive to improve myself whether that be in my fitness, my relationships or my career.</b>
      </p>
      <p>
        <b></b>
      </p>
    </div>
  </div>
  <div id="div3" class="hidden">
    <div id="about-description">
      <p>
        <b>Technologies:</b>
      </p>
      <p>
        <b>Langauges: </b>Python, Solidity, JavaScript
      </p>
      <p>
        <b>Frameworks: </b>Ethers.js, Node.js, React.js
      </p>
      <p>
        <b>Tools: </b>AWS, Linux, Git, Hardhat
      </p>
    </div>
    </div>
      </div>
        <div/>
        </section>
        <section id="timeline">
          <div className="timeline-container">
            <TimelineEvent year="Aug 2022 - Present" location="London" occupation=" Graduate Software Engineer" description="[Brief description of event 1]"></TimelineEvent>
            <TimelineEvent year="Sep 2021 - July 2022" location="Hanover (NH), USA" occupation="Student" description="Study abroad at Dartmouth College"></TimelineEvent>
            <TimelineEvent year="Sep 2018 - July 2022" location="London" occupation="Student" description="L101 Economics with a year abroad"></TimelineEvent>
          </div>
        </section>
        <section id="projects" style={projectStyle}>
          <div className="project">
            <h3>DeFi Trading Bot</h3>
            <p><b>Technologies:</b> Python, Solidity, Javascript, Ethers.js, React.js, Node.js, AWS - EC2</p>
            <a href="https://github.com/KevinLCai"><FaGithub style={{ fontSize: '24px' }} /> Source Code</a>
            <p>
              Automated DeFi and CeFi trading bot using a variety of strategies: Yield Farming, Triangular Flashloan Arbitrage, Momentum and Carry Strategies.
            </p>
            <h3>DeFi strategies:</h3>
            <p>
              Yield Farming:
            </p>
            <p>
              Flashloan Arbitrage:
            </p>
            <h3>CeFi strategies:</h3>
            <p>
              BLABLABLASIDJFGIDSHJFIEUWJH
            </p>
          </div>
          <div className="project">
            <h3>Fractional NFT Marketplace</h3>
            <p><b>Technologies:</b> Solidity, Javascript, Ethers.js, React.js, Node.js</p>
            <a href="https://github.com/KevinLCai"><FaGithub style={{ fontSize: '24px' }} /> Source Code</a>
            <p>
              Developing a Minimum Viable Product (MVP) for a business venture aiming to bring liquidity to NFT marketplaces.
            </p>
            <h3>Features</h3>
            <p>
              Securely lock an ERC721 token within a smart contract.
            </p>
            <p>
              Issuance of ERC20 tokens as fractional shares of a collateralised NFT.
            </p>
            <p>
              Secondary decentralised marketplace to trade token shares.
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