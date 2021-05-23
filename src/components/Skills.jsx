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
  padding: 6rem 1rem 0 1rem;
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

  @media (min-width: 768px) {
    width: 80%;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding-top: 3rem;
    h3 {
      margin-top: 2rem;
      font-size: 3.5rem;
      font-family: "Inter", sans-serif;
    }

    .skill-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      width: 100%;
      margin-bottom: 5rem;
    }
  }
  @media (min-width: 1300px) {
    .skill-list {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default Skills;
