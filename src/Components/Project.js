import React from "react";

const Project = (props) => {
  const tech = {
    css: "fa-brands fa-css3-alt",
    js: "fa-brands fa-js-square",
    react: "fa-brands fa-react",
    vue: "fa-brands fa-vuejs",
    node: "fa-brands fa-node",
    java: "fa-brands fa-java",
    eth: "fa-brands fa-ethereum",
  };

  const link = props.link || "#";
  const repo = props.repo || "#";

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
          src={props.img}
          alt={"Screenshot of " + props.title}
        />
      </a>
      <div className="project-details">
        <p className="icons">
          {props.tech.split(" ").map((t) => (
            <i className={tech[t]} key={t} />
          ))}
        </p>
        <div className="project-tile">{props.title} </div>
        {props.children}
        <div className="buttons">
          {repo !== "#" && (
            <a href={repo} target="_blank" rel="noopener noreferrer">
              View source <i className="fas fa-external-link-alt" />
            </a>
          )}
          {link !== "#" && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              Try it Live <i className="fas fa-external-link-alt" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
