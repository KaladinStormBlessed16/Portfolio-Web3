import React from "react";
import SocialLinks from "./SocialLinks";

const Nav = (props) => {
  return (
    <React.Fragment>
      <nav id="navbar">
        <div className="nav-wrapper">
          <div className="brand row">
            <span>
              David
              <strong className="color"> C.R.</strong>
            </span>
            <div className="ml-3 ml-sm-5">
              <SocialLinks />
            </div>
          </div>
          <a
            href={() => false}
            onClick={props.toggleMenu}
            className={
              props.showMenu === "active" ? "menu-button active" : "menu-button"
            }
          >
            <span />
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
