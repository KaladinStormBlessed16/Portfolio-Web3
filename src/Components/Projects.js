import React from "react";
import Project from "./Project";

const Projects = (props) => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">Web3 Projects</h3>
          <p className="separator" />
          <p className="subtitle">
            First let me show you the most important courses that I've completed
            after 4 months of non-stop work.
          </p>
          <div className="mt-5 text-center">
            <div>
              <a
                href="https://www.youtube.com/watch?v=gyMwXuJrbJQ&list=PLjXFWegAE_hrG7fEYtm3LfxDe11bhpFJ-"
                target="_blank"
                rel="noopener noreferrer"
                className="yellow-link"
              >
                Learn Blockchain, Solidity, and Full Stack Web3 Development with
                JavaScript <br /> 32-Hour Course - FCC Patrick Collins
              </a>
              <div className="row fcc-images mt-5 align-items-center justify-content-center">
                <div className="col-12 mb-5">
                  <a
                    href="https://stratosnft.io/0xd9Cb8dCD5b8F550aABcf9e08fFB45A53269Cd38e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link blue-link"
                  >
                    Check out my Arbitrum Account
                  </a>
                </div>
                <img
                  className="fcc-img col"
                  src={`${process.env.PUBLIC_URL}/assets/fcc1.png`}
                  alt="company"
                  width="150"
                />
                <img
                  className="fcc-img col"
                  src={`${process.env.PUBLIC_URL}/assets/fcc2.png`}
                  alt="company"
                  width="150"
                />
                <img
                  className="fcc-img col"
                  src={`${process.env.PUBLIC_URL}/assets/fcc3.png`}
                  alt="company"
                  width="150"
                />
                <img
                  className="fcc-img col"
                  src={`${process.env.PUBLIC_URL}/assets/fcc4.png`}
                  alt="company"
                  width="150"
                />
                <img
                  className="fcc-img col"
                  src={`${process.env.PUBLIC_URL}/assets/fcc5.png`}
                  alt="company"
                  width="150"
                />
              </div>
            </div>
            <div className="row courseBox">
              <a
                href="https://buildspace.so/u/f8b6f60b-fbfe-488d-b8eb-ca2a4c4c0119"
                target="_blank"
                rel="noopener noreferrer"
                className="yellow-link"
              >
                <div id="buildspace-img" className="col-12" />
                <div className="col-12 mt-3">Buildspace Profile</div>
              </a>
            </div>
          </div>
        </div>
        <div className="projects-wrapper">
          <p className="text-center">
            {" "}
            All smart contracts are deployed on the Rinkeby Testnet, if you need
            some Eth please visit any
            <a
              href="https://rinkebyfaucet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <span> Rinkeby Faucet.</span>
            </a>
          </p>
          <Project
            title="NFT Marketplace"
            img={`${process.env.PUBLIC_URL}/assets/nft-marketplace.png`}
            tech="css js react eth"
            link="https://nft-marketplace-rho-lemon.vercel.app"
            repo="https://github.com/synner7forever/NFT-Marketplace-Hardhat"
          >
            <small>
              Built using Solidity, Hardhat, TheGraph, Nextjs.js and React
              Moralis.
            </small>
            <p>
              This dApp is a Decentralized Marketplace where you can buy and
              sell NFTs. Thanks to TheGraph all evets are indexed to track
              listed items in a decentralized way.
            </p>
          </Project>
          <Project
            title="Naruto Panels NFT"
            img={`${process.env.PUBLIC_URL}/assets/naruto-panels.png`}
            tech="css js react eth"
            link="https://naruto-panels.vercel.app/"
            repo="https://github.com/synner7forever/Naruto-Panels-Nft"
          >
            <small>
              Built using Solidity, Hardhat and Chainlink for the Smart
              Contract. Nft's metadata is stored via IPFS. Nextjs and Ethers for
              the Mint page.
            </small>
            <p>
              This is my own ERC721 Nft collection of Naruto manga panels. Only
              one Nft can be minted for each account, which is determined
              randomly using the Chainlink VRF oracle, with 3 different
              rarities: B, A and S.
            </p>
          </Project>
          <Project
            title="Defi Stacking App"
            img={`${process.env.PUBLIC_URL}/assets/stacking-app.png`}
            tech="css js react eth"
            link="https://defi-stacking-app.vercel.app/"
            repo="https://github.com/synner7forever/Defi-Stacking-App"
          >
            <small>Built using Solidity, Truffle, React and Web3.js</small>
            <p>
              In this dApp you can stack an USDT's mock in order to get an
              ERC20, Reward Token every hour. For this project I didn't use the
              OpenZeppelin ERC20's contract, but developer all the functions
              myself, which helped me to understand methods like "approveFrom".
            </p>
          </Project>
          <Project
            title="Music Portal"
            img={`${process.env.PUBLIC_URL}/assets/music-portal.png`}
            tech="css js react eth"
            link="https://music-portal-five.vercel.app/"
            repo="https://github.com/synner7forever/Music-Portal"
          >
            <small>Built using Solidity, Hardhat, Nextjs.js and Ethers.</small>
            <p>
              In Music Portal we are using the Blockchain as a whiteboard to
              paste tape notes, so everybody can recomend me a song and let me
              know your favorute music. There is a 20% of getting a reward in
              the process!
            </p>
          </Project>
        </div>
        <div className="heading mt-5">
          <h3 className="title">Web2 Experience</h3>
          <p className="separator" />
          <p className="subtitle text-center mt-5">
            Some Udemy courses that I've completed:
          </p>
          <div className="mt-3 text-center">
            <div>
              <a
                href="https://www.udemy.com/certificate/UC-7106cb04-c7ea-4508-a0a8-79d53a844182/"
                target="_blank"
                rel="noopener noreferrer"
                className="yellow-link"
              >
                Master Microservices with Spring Boot and Spring Cloud
              </a>
            </div>
            <div className="mt-3">
              <a
                href="https://www.udemy.com/certificate/UC-b5ac6b7a-9993-4d20-96d8-af5d56993182/"
                target="_blank"
                rel="noopener noreferrer"
                className="yellow-link"
              >
                Master JavaScript: Learn JS, jQuery, Angular, NodeJS
              </a>
            </div>
            <div className="d-flex align-items-center justify-content-center mt-5 mb-2">
              <a
                href="https://www.tabit-gmbh.de"
                target="_blank"
                rel="noopener noreferrer"
                className="yellow-link"
              >
                <img
                  className="company-img"
                  src={`${process.env.PUBLIC_URL}/assets/tabit.svg`}
                  alt="company"
                  width="150"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="projects-wrapper">
          <p className="text-center">07/2021 - currently here</p>
          <Project
            title="Emcomy"
            img={`${process.env.PUBLIC_URL}/assets/emcomy.png`}
            tech="css js vue java"
            link="https://emcomy.de/"
          >
            <small>
              Built using SpringBoot, HeidiSql, Vue, Sendinblue and Pazpal API.
            </small>
            <p>
              I have been developing this project for 1 year almost from
              scratch, and I have been able to learn many things, to mention a
              few I have developed communication functionalities with customers
              via Email and SMS with SendinBlue, several scheduled tasks that
              respond to business logic and finally I have implemented the
              payment gateway by integrating the PayPal API.
            </p>
          </Project>
          <Project
            title="VUUP"
            img={`${process.env.PUBLIC_URL}/assets/vuup.png`}
            tech="css js react node"
            link="https://www.vuup.de"
          >
            <small>Built using Node.js, MongoDb and React.</small>
            <p>
              The web application serves as a customized CMS, a web that allows
              the customer to build their own page with great detail and
              variety. It is based on NodeJs and MongoDb for the backend, and
              React on the client side. In this project I have been able to
              develop many new features as totally reusable generic components.
            </p>
          </Project>
        </div>
        <div className="d-flex align-items-center justify-content-center mt-5 mb-2">
          <a
            href="https://www.nokia.com/es_int/"
            target="_blank"
            rel="noopener noreferrer"
            className="yellow-link"
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/Nokia.png`}
              alt="company"
              width="250"
            />
          </a>
        </div>
        <div className="projects-wrapper mt-4">
          <p className="text-center">03/2021 - 06/2021</p>
          <Project
            title="SPDA"
            img={`${process.env.PUBLIC_URL}/assets/JAR.png`}
            tech="java"
          >
            <small>Built using Java, Java Swing.</small>
            <p>
              I gave support to a desktop java application that was used to
              configure host terminals. This was a pure Java development.
            </p>
          </Project>
        </div>
      </div>
    </section>
  );
};

export default Projects;
