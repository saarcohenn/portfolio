import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Icon } from "./Icon";

const Skill = ({ color, name, exp, className }) => {
  return (
    <StyledSkill className={className}>
      <div className="icon-container">
        <Icon name={name} color={color} size="2.1em" />
      </div>
      <div className="text-container">
        <p className="name">{name}</p>
        <p className="exp">{exp} years of exp</p>
      </div>
    </StyledSkill>
  );
};
const StyledSkill = styled(motion.div)`
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  align-items: center;
  width: 90%;
  max-width: 90%;
  margin: 0 auto;
  justify-content: center;
  border-bottom: 1px solid #23d997;

  .icon-container {
    margin-right: 2rem;
  }
  p {
    margin: 0;
    padding: 0;
  }
  .name {
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
  }
  .exp {
    font-size: 1rem;
  }
  @media (min-width: 768px) {
    width: 80%;
  }
`;

export default Skill;
