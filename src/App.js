import React from 'react';
import './App.css';
import kev from './imgs/kev-5.jpeg';
import UCL from './imgs/UCL_Logo.jpeg';
import Dartmouth from './imgs/Dartmouth_logo.jpeg';
import { FaGithub, FaLinkedin, FaEnvelope, FaRegFileAlt, FaMapMarkerAlt, FaCalendarAlt, FaBriefcase } from 'react-icons/fa';

const projectStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr', // Create two columns
  gridTemplateRows: '2fr', // Create one row
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
          <img src={props.image} alt="timeline event image" />
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

const offsets = new Map([
  ['#about', - (window.innerHeight * 0.3)],
  ['#timeline', + (window.innerHeight * 0.1)],
  ['#projects', + (window.innerHeight * 0.5)],
  ['#contact', 0],
]);

navbarLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior
    const targetId = event.target.getAttribute('href'); // Get the target section's id
    const targetSection = document.querySelector(targetId); // Get the target section element
    let offset = offsets.get(targetId) || 0; // Get the offset value for the target section from the map, or use 0 if no value is found
    // Scroll to the top of the target section with the specified offset smoothly
    window.scrollTo({
      top: targetSection.offsetTop + offset,
      behavior: 'smooth',
    });
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
    <button id="button1" className="black-button">Background</button>
    <button id="button2" className="black-button">Interests</button>
    <button id="button3" className="black-button">Skills</button>
  </div>
  <div id="div1" className="hidden">
    <div id="about-description">
      <p>
        <b>Hello, I'm Kevin, a passionate software engineer based in the heart of London's financial district. With a strong foothold in the dynamic TradFi Commodities Trading Industry, I contribute to transformative projects within the Quantitative Investment Strategies Technology team at Macquarie Group. My role involves collaborating closely with Sales & Trading to devise innovative business strategies, enhance existing systems, and adeptly handle any challenges that arise.</b>
      </p>
      <p>
        <b>In 2022, I achieved a 1st Class Degree in Economics from University College London. During my academic journey, I embraced the opportunity for personal and intellectual growth by spending a year at Dartmouth College in the USA. This experience not only broadened my horizons but also enabled me to dive into the world of Computer Science, thanks to the institution's liberal arts education. The cross-cultural exposure was deeply enriching, motivating me to seek out future opportunities to live and work abroad once again.</b>
      </p>
    </div>
  </div>
  <div id="div2" className="hidden">
    <div id="about-description">
      <p>
        <b>I'm captivated by Blockchain Technologies, envisioning a fairer financial landscape through decentralized finance. I'm driven to enhance data privacy and combat the misuse of cryptocurrencies by central entities, staying true to the ethos of web3.</b>
      </p>
      <p>
        <b>Since 2016, I've tracked blockchain's evolution, weathering crypto winters. My background in the space extends to investing, trading, academic research, blockchain development and startup incubation.</b>
      </p>
      <p>
        <b>My Economics Thesis delved into blockchain's impact on modern economies, through Decentralized Finance, discussing the regulatory and macroeconomic impact of the technology.</b>
      </p>
      <p>
        <b>I have experience in pitching products at Dartmouth College - pitching a product for decentralised medical records on Ethereum where I worked alongside 5 other Computer Science majors to develop the application.</b>
      </p>
      <p>
        <b>I also pitched for pre-seed funding within the Blockchain Founders Group startup incubator programme to develop a fractionalised NFT marketplace within the web3 gaming space.</b>
      </p>
      <p>
        <b>Beyond FinTech, I'm an enthusiastic traveler, loyal friend, tennis player, and guitarist. I'm committed to personal growth, whether in fitness, relationships, or career advancement.</b>
      </p>
      <p>
        <b>By merging technology and positive change, I aim to contribute to a world with more economic opportunity for everyone.</b>
      </p>
    </div>
  </div>
  <div id="div3" className="hidden">
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
        <b>Tools: </b>AWS, Linux, Git, Hardhat, ChatGPT, Github CoPilot
      </p>
      <p>
        <b>Certifications: </b>AWS Certified Developer - Associate
      </p>
    </div>
    </div>
      </div>
        <div/>
        
        </section>
        <section id="timeline">
          <div className="timeline-container">
            <div id="timeline-title">
              <h2>My Journey</h2>
              <p>My Academic and Professional Journey</p>
            </div>
            <TimelineEvent year="Aug 2022 - Present" location="London" occupation=" Graduate Software Engineer" description="[Brief description of event 1]"></TimelineEvent>
            <TimelineEvent year="Sep 2021 - July 2022" location="Hanover (NH), USA" occupation="Student" image={Dartmouth} description="Study abroad at Dartmouth College"></TimelineEvent>
            <TimelineEvent year="Sep 2018 - July 2022" location="London" occupation="Student" image={UCL} description="L101 Economics with a year abroad"></TimelineEvent>
          </div>
        </section>
        <section id="projects" style={projectStyle}>
        <div className="project">
          <h3><u>DeFi Trading Bot</u></h3>
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
            <h3><u>Fractional NFT Marketplace</u></h3>
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