import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Project = ({ image, title, technologies, githubLink, description, details, imagePosition }) => {
    const projectClasses = `project ${imagePosition === 'right' ? 'right' : 'left'}`;

    return (
        <div className={projectClasses}>
            {image && (
                <div className="project-image">
                    <img src={image} alt={title} />
                </div>
            )}
            <div className="project-info">
                <h3><u>{title}</u></h3>
                <p><b>Technologies:</b> {technologies}</p>
                <a href={githubLink}><FaGithub style={{ fontSize: '24px' }} /> Source Code</a>
                {details.map((detail, index) => (
                    <div key={index}>
                        {Array.isArray(detail) ? (
                            <ul>
                                {detail.map((subDetail, subIndex) => (
                                    <li key={subIndex}>{subDetail}</li>
                                ))}
                            </ul>
                        ) : (
                            <p><b>{detail}</b></p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
