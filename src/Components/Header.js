import React from "react";

const Header = (props) => {
  return (
    <header id="welcome-section">
      <div className="forest" />
      <div className="silhouette" />
      <div className="moon" />
      <div className="container">
        <h1>
          <span className="line line1-margin">I'm David Carrió R.</span>
          <span className="line">Fullstack & Blockchain</span>
          <span className="line">
            <span className="color line3-margin"> Developer </span>
          </span>
        </h1>
        <div className="buttons mt-4">
          <a href="#projects">my portfolio</a>
          <a href="#contact" className="cta">
            get in touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
