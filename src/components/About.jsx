import React from "react";
import profile from "../img/saar-profile.JPG";
import Typical from "react-typical";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <StyledAbout>
      <motion.img src={profile} alt="profile" whileHover={{ scale: 1.1 }} />
      <p className="intro">Hi there 👋🏻,</p>
      <h2 className="subtitle">
        Let me tell you <span>about myself...</span>
      </h2>
      <div className="my-story">
        <p className="first">
          My name is Saar. I am a <br />
          <Typical
            className="typical"
            loop={Infinity}
            wrapper="b"
            steps={[
              "Fullstack Developer",
              2000,
              "Salsa Dancer",
              2000,
              "Scooba Diver",
              2000,
              "Book Worm",
              2000,
            ]}
          />
        </p>
        <p className="paragraph">
          <span>
            I have been a Chip Validation Engineer at Marvell IL for the last 2
            years.{" "}
          </span>
          I have designed and developed engineering studies of the company
          products relying on company documents. Experienced with writing
          automated tests and test plans. Methodological and have a deep
          realization of the importance of quality in software development.
          Possessing knowledge in Networking protocols such as TCP/IP, REST API
          and Web Sockets.
        </p>
        <p className="paragraph">
          <span>
            My next goal is to become a full stack developer and a
            data-scientist.{" "}
          </span>
          I am a highly motivated, easy & self-learner, team player, out of the
          box thinking person, and love complex logic puzzles. I have been
          starting to study the fields of Data-Science. I believe I will
          continue my academic education pursuing my Master's Degree, and become
          a Data-Scientist soon enough 😁.
        </p>
      </div>

      <motion.button className="skills-btn">
        <Link to="/portfolio/Skills">Continue To Skills {"->"}</Link>
      </motion.button>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  position: absolute;

  img {
    margin-top: 1rem;
    width: 80%;
    border: 2px solid white;
    border-radius: 50%;
    box-shadow: 5px 10px 30px rgba(138, 138, 138, 0.5),
      0px 10px 10px rgba(138, 138, 138, 0.2);
  }

  .skills-btn {
    margin: -1rem auto 4rem auto;
  }

  a {
    text-decoration: none;
    color: white;
  }

  .intro {
    position: relative;
    top: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .subtitle {
    position: relative;
    margin: 4rem auto;
    text-align: center;
    font-size: 1.8rem;
    font-weight: lighter;
    left: -5vh;
  }

  .subtitle > span {
    display: block;
    position: relative;
    left: 10vh;
  }

  .my-story {
    position: relative;
    top: -4rem;
    margin: 2rem auto 0rem auto;
    width: 100%;
    padding: 0;
  }

  .my-story > p {
    padding: 0.1rem 0.4rem;
    text-align: center;
  }

  .typical {
    background-color: #23d997;
    color: black;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
  }

  .paragraph {
    margin: 1.5rem 0.5rem;
    font-size: 1.2rem;
    text-align: left !important;
  }

  .paragraph > span {
    font-size: 1.3rem;
  }

  @media (min-width: 768px) {
    width: 100%;
    padding: 5rem 10rem;
    align-items: start;

    img {
      margin: 0 auto;
      max-width: 30rem;
    }
    .skills-btn:hover {
      border-radius: 10px;
    }

    .intro {
      font-size: 2.5rem;
      font-weight: normal;
    }
    .subtitle {
      font-size: 3.1rem;
      text-align: left;
      margin: 1rem 0 3rem 0;
      left: 5rem;
      font-weight: lighter;
    }
    .subtitle > span {
      display: inline;
      left: 0;
    }
    .my-story {
      margin: 3rem 0 1rem 0;
    }
    .my-story > p {
      text-align: left;
    }
  }
`;

export default About;
