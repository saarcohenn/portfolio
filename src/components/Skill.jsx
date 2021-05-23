import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Icon } from "./Icon";

const Skill = ({ color, name, exp, className }) => {
  return (
    <StyledSkill className={className}>
      <div className="icon-container">
        <Icon classname="icon" name={name} color={color} size="2.1em" />
      </div>
      <div className="text-container">
        <p className={`name ${exp < 3 ? "smaller" : ""}`}>{name}</p>
        {exp && exp > 2 && <p className="exp">{exp} years of exp</p>}
      </div>
    </StyledSkill>
  );
};
const StyledSkill = styled(motion.div)`
  display: grid;
  grid-template-columns: 6em 1fr;
  padding-top: 1rem;
  padding-bottom: 1rem;
  align-items: center;
  justify-content: center;
  padding-left: 2.4rem;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  border-bottom: 2px solid #23d997;
  border-radius: 50%;

  .icon-container {
    text-align: center;
    margin-right: 2rem;
    margin-left: 2rem;
  }
  p {
    margin: 0;
    padding: 0;
  }

  .name {
    font-family: "Open Sans", sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
  }
  .small {
    font-size: 1.2rem;
  }
  .exp {
    font-size: 1rem;
  }

  @media (min-width: 512px) {
    .name {
      font-size: 1.4rem;
      font-weight: bold;
      color: white;
    }
    .small {
      font-size: 1.2rem;
    }
    .exp {
      font-size: 1.1rem;
    }
  }
  @media (min-width: 768px) {
    padding-left: 0;
    width: 90%;
    .name {
      font-size: 1.8rem;
      color: white;
    }
    .small {
      font-size: 1.5rem;
    }
    .exp {
      font-size: 1.3rem;
    }
  }
`;

export default Skill;
