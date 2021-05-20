import React from "react";
import profile from "../img/saar-profile.JPG";
import Typical from "react-typical";
import styled from "styled-components";
import { motion } from "framer-motion";

const About = () => {
  return (
    <StyledAbout id="about-section">
      <motion.img src={profile} alt="profile" whileHover={{ scale: 1.1 }} />
      <div className="intro">
        <h1 className="title">Hi there 👋🏻,</h1>
        <h2 className="subtitle">
          Let Me Tell You <span>About Myself...</span>
        </h2>
      </div>
      <div className="my-story">
        <p className="first">
          My name is Saar Cohen. I am a <br />
          <Typical
            className="typical"
            loop={Infinity}
            wrapper="b"
            steps={[
              "Fullstack Developer",
              2000,
              "Salsa Instructor",
              2000,
              "Scooba Diver",
              2000,
              "Book Worm",
              2000,
            ]}
          />
        </p>

        <div className="experience">
          <h3>Experience</h3>
          <div className="paragraph">
            <span>Chip Validation Engineer at Marvell Inc. </span>
            <p className="years">Jul 2019 - Dec 2020</p>
            <ul className="bullet-list">
              <li>
                Designed and developed engineering studies of Marvell
                Documentation and Products
              </li>
              <li>Writing test plans</li>
              <li>Writing Python and Linux Bash automated tests.</li>
              <li>Methodological, Organized Person & Out-Of-The-Box Thinker</li>
              <li>Deep knowledge in the fields of Networking</li>
              <li>REST API, TCP/IP & Web-Sockets</li>
              <li>SSH, Telnet & Serial-Connection</li>
            </ul>
          </div>
        </div>
        <div className="education">
          <h3>Education</h3>
          <div className="paragraph">
            <span>
              Bachelor of Computer Science, Holon Institute of Technologies,
              Holon
            </span>
            <p className="years">Oct 2016 - Oct 2019</p>
            <p className="gpa">
              Graduated with <span>GPA: 90</span>
            </p>
            <ul className="bullet-list">
              <li>
                Developed .Net Framwork, Entity Framework & WPF apps and games
                with C#
              </li>
              <li>Languages & Tools: C, C++, C#, Java, and JavaScript, SQL</li>
              <li>
                Courses: Algorithms, Data Structures, Graph Theory, Design
                Patterns
              </li>
            </ul>
          </div>
        </div>
        <div className="military-service">
          <h3>Military Service</h3>
          <div className="paragraph">
            <span>Project Manager & System Admin - 8200</span>
            <div className="years">Mar 2012 - Mar 2015</div>
            <ul className="bullet-list">
              <li>Create project documentation and strategy plans</li>
              <li>
                Account for complete project lifecycle from inception to closure
              </li>
              <li>
                Collaborate with participants to determine project timeline
              </li>
              <li>In charge of team's tasks, work plans, and training</li>
              <li>Cisco's Call Manager & UCCX Platform </li>
              <li>
                Microsoft Deployment Toolkit (MDT) - remote OS installations
              </li>
              <li>Develop Python automation tools</li>
            </ul>
          </div>
        </div>
        <div className="future-plans">
          <h3>Future Plans</h3>
          <p className="paragraph">
            <span>
              My next goal is to become a full stack developer and a
              data-scientist.{" "}
            </span>
            I am a highly motivated, easy & self-learner, team player, out of
            the box thinking person, and love complex logic puzzles. I have been
            starting to study the fields of Data-Science. I believe I will
            continue my academic education pursuing my Master's Degree, and
            become a Data-Scientist soon enough 😁.
          </p>
        </div>
      </div>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding-top: 2rem;
  margin-top: 4rem;

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

  .title {
    padding: 1rem;
    font-size: 3.5rem;
    font-weight: lighter;
  }

  .subtitle {
    font-size: 1.8rem;
    font-weight: 300;
    font-style: italic;
    font-family: "Raleway", sans-serif;
    position: relative;
    margin-bottom: 3rem;
  }

  .subtitle > span {
    position: absolute;
    display: block;
    right: 0;
  }

  .my-story {
    position: relative;
    top: -4rem;
    margin: 2rem auto 0rem auto;
    width: 100%;
    padding: 1rem;
  }

  .future-plans > p,
  .education > p,
  .experience > p,
  .military-service > p {
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
    font-size: 1rem;
    text-align: left !important;
  }

  .years {
    margin: 1.5rem 0.5rem;
    font-size: 0.8rem;
    color: "#838383";
    padding: 0;
    display: inline;
  }
  .gpa {
    font-size: 1rem;
    padding: 0.5rem;
  }

  .bullet-list {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    color: #ccc;
  }
  li {
    padding: 0.2rem 0;
  }

  .paragraph > span {
    font-size: 1.3rem;
  }

  @media (min-width: 512px) {
    width: 100%;
    padding: 2rem 4rem;
  }
  @media (min-width: 768px) {
    width: 100%;
    padding: 5rem 8rem 0rem 8rem;
    align-items: start;
    margin-bottom: 0;

    img {
      margin: 0 auto;
      max-width: 30rem;
    }
    .skills-btn:hover {
      border-radius: 10px;
    }

    .intro {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 2.5rem;
      margin: 1rem auto;
      font-weight: normal;
    }
    .title {
      font-size: 5rem;
    }
    .subtitle {
      width: 70%;
      font-size: 3.8rem;
    }
    .subtitle > span {
      display: block;
    }
    .my-story {
      margin: 5rem 0 1rem 0;
    }
    .my-story > p {
      text-align: left;
    }
    .paragraph {
      font-size: 1.3rem;
    }
    .paragraph > span {
      font-size: 1.6rem;
    }
    .years {
      display: block;
      margin: 0;
      padding: 0.5rem;
      font-size: 1.1rem;
      color: #9ee9cd;
    }

    .bullet-list {
      font-size: 1.2rem;
      padding: 0.5rem 3rem;
    }
  }
`;

export default About;
