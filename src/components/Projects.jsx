import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { projects } from "./Constant";
import Project from "./Project";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <StyledProjects>
      <div className="intro">
        <h2>And here are some</h2>
        <span>Of my awesome projects:</span>
      </div>
      <div className="projects-container">
        {projects &&
          projects.map((project) => (
            <Project className="project" project={project} key={project.id} />
          ))}
      </div>
      <div className="buttons">
        <motion.button className="about-btn">
          <Link to="/portfolio/">{"<-"}Back To My Story</Link>
        </motion.button>
      </div>
    </StyledProjects>
  );
};

const StyledProjects = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 0rem 1rem;

  .intro {
    font-weight: 200;
    position: relative;
    width: 100%;
  }

  .intro > h2 {
    font-size: 1.8rem;
    padding: 0 1rem;
  }

  .intro > span {
    position: absolute;
    font-size: 1.5rem;
    right: 0;
    padding: 0.5rem 1rem;
  }

  .projects-container {
    margin-top: 2rem;
  }

  .buttons {
    color: white;
    margin-top: 2rem;
    margin-bottom: 4rem;
    padding: 1rem;
    text-align: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: white;
  }

  @media (min-width: 512px) {
    width: 90%;
    margin: 1rem auto;
  }

  @media (min-width: 630px) {
    width: 80%;
    margin: 1rem auto;
    .intro {
      width: 90%;
      margin: 2rem auto;
      text-align: center;
    }
  }

  @media (min-width: 768px) {
    .intro > h2 {
      text-align: left;
      font-size: 3.1rem;
      padding: 1rem 2rem;
    }

    .intro > span {
      font-size: 2.8rem;
      font-family: "Open Sans", sans-serif !important;
      font-weight: normal;
      right: 4vw;
    }
    .projects-container {
      margin: 2rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem;
    }
  }
`;

export default Projects;