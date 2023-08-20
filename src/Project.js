import React from 'react';
import { FaGithub } from 'react-icons/fa';


const Project = ({ image, title, technologies, githubLink, description, details, imagePosition }) => {
    const projectClasses = `project ${imagePosition === 'right' ? 'right' : 'left'}`;
  
    return (
      <div className={projectClasses}>
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
        <div className="project-info">
          <h3><u>{title}</u></h3>
          <p><b>Technologies:</b> {technologies}</p>
          <a href={githubLink}><FaGithub style={{ fontSize: '24px' }} /> Source Code</a>
          <p>
            {description}
          </p>
          <h3>{title} Details</h3>
          {details.map((detail, index) => (
            <p key={index}>{detail}</p>
          ))}
        </div>
      </div>
    );
  };
  

export default Project;