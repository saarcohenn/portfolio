import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { projects } from "./Constant";
import Project from "./Project";

const Projects = () => {
  return (
    <StyledProjects id="projects-section">
      <div className="intro">
        <h3>And here are some</h3>
        <span>of my projects:</span>
      </div>
      <div className="projects-container">
        {projects &&
          projects.map((project) => (
            <Project className="project" project={project} key={project.id} />
          ))}
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
    margin: 6rem auto 0 auto;
    font-weight: 200;
    position: relative;
    text-align: center;
    width: 100%;
  }

  .intro > h3 {
    font-size: 2.2rem;
  }

  .intro > span {
    font-size: 2rem;
    font-weight: 300;
    padding: 0.5rem 1rem;
    text-align: center;
  }

  .projects-container {
    margin-top: 2rem;
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
