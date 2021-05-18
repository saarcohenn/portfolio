import React from "react";
import styled from "styled-components";
import { skills } from "./Constant";
import Skill from "./Skill";

const Skills = () => {
  return (
    <StyledSkills id="skills-section">
      <h3>Check out my skills:</h3>
      <div className="skill-list">
        {skills &&
          skills.map((skill) => (
            <Skill
              className={skill.name.toLowerCase()}
              color={skill.color}
              name={skill.name}
              exp={skill.exp}
              key={skill.id}
            />
          ))}
      </div>
    </StyledSkills>
  );
};

const StyledSkills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 0rem 1rem;
  height: 100%;

  .skill-list {
    width: 100%;
    padding: 0 auto;
    justify-content: center;
  }

  h3 {
    font-size: 2.2rem;
    padding-bottom: 3rem;
  }
  a {
    text-decoration: none;
    color: white;
  }
  .buttons {
    color: white;
    margin-top: 2rem;
    margin-bottom: 4rem;
    padding: 1rem;
    text-align: center;
    align-items: center;
  }

  button {
    margin-top: 1.5rem;
  }

  @media (min-width: 768px) {
    align-items: center;
    justify-content: center;
    h1 {
      margin-top: 2rem;
      font-size: 2rem;
      font-family: "Inter", sans-serif;
    }

    .skill-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      width: 100%;
      margin-bottom: 5rem;
    }

    .buttons {
      margin-top: 2rem;
      position: relative;
      display: flex;
      width: 80%;
      max-width: 80%;
      justify-content: space-between;
      align-items: center;
    }
    .about-btn {
      position: absolute;
      left: 5.2vw;
    }
    .projects-btn {
      position: absolute;
      right: 3vw;
    }

    .about-btn:hover,
    .projects-btn:hover {
      border-radius: 10px;
    }
  }
`;

export default Skills;
