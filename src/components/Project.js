import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import {
  faSass,
  faCss3Alt,
  faJsSquare,
  faReact,
  faVuejs,
  
  faNodeJs
} from '@fortawesome/free-brands-svg-icons';

const Project = (props) => {
  const tech = {
    sass: faSass,
    css: faCss3Alt,
    js: faJsSquare,
    react: faReact,
    vue: faVuejs,
    
    node: faNodeJs
  };

  const { title, img, tech: projectTech, link, repo } = props;

  return (
    <div className="project">
      <a
        className="project-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="project-image"
          src={img}
          alt={"Screenshot of " + title}
        />
      </a>
      <div className="project-details">
        <div className="project-tile">
          <p className="icons">
            {projectTech.split(" ").map((t) => (
              <i className={tech[t]} key={t} />
            ))}
          </p>
          {title}
        </div>
        {props.children}
        <div className="buttons">
          <a href={repo} target="_blank" rel="noopener noreferrer">
            View source <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Try it Live <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Project;
