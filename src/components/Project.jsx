import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Icon } from "./Icon";
import { skills } from "./Constant";
import Carousel from "./Carousel";

const Project = ({ project }) => {
  let id = 10;
  return (
    <StyledProject>
      <h1 className="title">{project.name}</h1>
      <p className="description">{project.description}</p>
      <div className="photos-container">
        <Carousel photos={project.photos} name={project.name} />
      </div>
      <div className="tech-container">
        {project &&
          project.tech.map((tech) => {
            if (tech === "Framer Motion" || tech === "Speechly")
              return (
                <Icon className="icon" key={id++} name={tech} size="2.5em" />
              );
            else {
              let skill = skills.find((skill) => skill.name === tech);
              return (
                <Icon
                  className="icon"
                  name={tech}
                  key={skill.id}
                  color={skill.color}
                  size="2.5em"
                />
              );
            }
          })}
      </div>
      <motion.button className="visit-site">
        <a href={project.url}>Check it out{"->"}</a>
      </motion.button>
    </StyledProject>
  );
};

const StyledProject = styled(motion.div)`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #323232;
  border: 1px solid #878787;
  border-radius: 3rem;
  margin: 2rem 0rem;
  color: white;
  padding: 1rem 1rem;

  .title {
    text-align: center;
    font-weight: 300;
    margin-top: 1rem;
  }
  .description {
    margin: 1rem 0;
    padding: 1rem 0;
    font-size: 1.2rem;
  }
  .tech-container {
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: space-evenly;
    margin-bottom: 1.5rem;
  }
  .visit-site {
    width: 60%;
    margin: 1rem auto 1.5rem auto;
    border: 4px solid #4a84ff;
    padding: 0.8rem 0.3rem;

    a {
      font-size: 1.4rem;
      font-weight: lighter;
    }
    :hover {
      border-radius: 2rem;
      background-color: #4a84ff;
    }
  }

  @media (min-width: 768px) {
    width: 1fr;
    margin: 1.2rem;
    position: relative;

    .description {
      height: 10rem;
      padding: 1rem;
    }
  }
`;

export default Project;
