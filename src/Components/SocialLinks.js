import React from "react";

const SocialLinks = (props) => {
  return (
    <div className="social">
      <a
        href="https://twitter.com/KaladinHonorSon"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Twitter profile"
      >
        {" "}
        <i className="fab fa-twitter" />
      </a>
      <a
        id="profile-link"
        href="https://github.com/KaladinStormBlessed16"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's GitHub Profile"
      >
        {" "}
        <i className="fab fa-github" />
      </a>
      <a
        href="https://www.linkedin.com/in/david-carrio-ricardo/"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's LinkedIn Profile"
      >
        {" "}
        <i className="fa-brands fa-linkedin-in" />
      </a>
    </div>
  );
};

export default SocialLinks;
