import React from "react";
import ParticleSettings from "./ParticleSettings";

const About = (props) => {
  return (
    <section id="about">
      <div style={{ position: "absolute", zIndex: "-1" }}>
        <ParticleSettings />
      </div>
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Who am I?</h3>
            <p className="separator" />
          </div>
          <div className="row">
            <div className="col-12 col-md-8 about-text">
              <p>
                I'm a cuban <b className="color">software developer</b> who was
                raised in Spain. <br />A little highlights of my professional
                career? After finishing my programing studies I worked for half
                year as a fullstack developer in great companies such as{" "}
                <a
                  href="https://thecloud.group"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  <i> The Could Group </i>
                </a>{" "}
                and
                <a
                  href="https://www.nokia.com"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  <i> Nokia Spain</i>
                </a>
                .<br />
                Today It's been 1 year since the day that I moved to Munich in
                order to work with
                <a
                  href="https://www.tabit-gmbh.de"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  <i> Tabit GmbH</i>
                </a>{" "}
                , and I couln't be happier with all the stuff I've learned here.
              </p>
              <p>
                I am a creative, proactive person who loves software development
                just because It allows me to build pretty much whatever I want,
                the only real boundary is my imagination, and there are big
                dreams out there waiting for me to make them true. I'm almost an
                adict to the most bleeding edge technology innovations, always
                eager to learn and improve my skills, and that was basically
                what got me into <b className="color">Web3</b>. I've been
                playing hard to learn and really grasp the main blockchain
                development fundamentals and web3 basics. I'm incredibly hyped
                about this dazzling new chapter not just in my carrer, but in my
                whole life, and I would love to
                <b className="color"> build something BIG </b> together with
                other degens!
              </p>
            </div>
            <div className="col-8 col-md-4 my-auto mx-auto mx-sm-auto">
              <div className="img-profile">
                <div className="img-mrc" />
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
