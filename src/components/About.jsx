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
        <h1 className="title">Hi There</h1>
        <h2 className="subtitle">
          Let Me Tell You <span>About Myself...</span>
        </h2>
      </div>
      <div className="my-story">
        <div className="first">
          <p>My name is Saar Cohen. I am a </p>
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
        </div>

        <div className="experience">
          <h3>Experience</h3>
          <div className="paragraph">
            <span>Python Developer at Marvell LTD. </span>
            <p className="years">Jul 2019 - Dec 2020</p>
            <p className="summary">
              I have developed management and testing systems based on
              communication products, OOP oriented, and have handled Secure Boot
              feature on SoC level and Traffic Mirroring on Full Board level.
              <br />
              Working with Waterfall and Agile-Scrum methodologies.
            </p>
            <ul className="bullet-list">
              <li>2 years of Python and Bash development experience.</li>
              <li>
                Design more functional, cohesive codes to enhance product
                performance.
              </li>
              <li>
                Writingprofessionaldocumentationandcreatingunittestsand full
                flow tests.
              </li>
              <li>REST API, TCP/IP & Web-Sockets</li>
              <li>SSH, Telnet & Serial-Connection</li>
            </ul>
          </div>
        </div>
        <div className="education">
          <h3>Education</h3>
          <div className="paragraph">
            <div className="paragraph">
              <span>
                Extreme Python Bootcamp - Data Science Proficiency, John Bryce
              </span>
              <p className="years">May 2021 - Jul 2021</p>
              <ul className="bullet-list">
                <li>
                  Practical usage of Data Modeling using Machine Learning and
                  Deep Learning
                </li>
                <li>
                  Data Visualization with Backend Development using Flask.
                </li>
                <li>Use Data Analysis methods</li>
                <li>
                  Problems sorting into Classification, Regression, and
                  Clustering problems
                </li>
                <li>
                  Libraries: NumPy, pandas, seaborn, matplotlib, sci-kit learn,
                  Keras
                </li>
                <li>
                  Technologies: Jupyter Notebook, Google Colab, Docker,
                  Microsoft Azure, and Flask microframework for web development.
                </li>
              </ul>
            </div>
            <span>
              Bachelor of Computer Science, Holon Institute of Technologies
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
              <li>Languages & Tools: C, C++, C#, Java, JavaScript and SQL</li>
              <li>
                Courses: Algorithms, Data Structures, Graph Theory and Design
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
          <p className="paragraph p-futurePlans">
            <span>
              My next goal is to jump start as a Fullstack Developer.{" "}
            </span>
            I am a highly motivated, easy & self-learner, team player, out of
            the box thinker, and a person that loves to solve complex logic
            puzzles. I am a <strong>Fullstack Developer </strong> with the
            knowledge of multiple fields. These days I have started to study the
            fields of Data-Science. I believe I will continue my academic
            education pursuing my Master's Degree, and become a Data-Scientist
            soon 😁.
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

  .summary {
    margin: 0;
    padding: 1rem 0.5rem;
    font-size: 1.2rem;
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
  .first {
    padding: 3rem 0;
  }
  .first > p {
    padding: 0.2rem 0;
  }
  .typical {
    font-size: 1.4rem;
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

    .summary {
      width: 75%;
    }

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
      width: 75%;
    }

    .p-futurePlans {
      width: 75%;
    }
  }
`;

export default About;
