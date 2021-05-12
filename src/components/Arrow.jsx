import React from "react";
import styled from "styled-components";

const Arrow = ({ direction, clickFunction, glyph }) => {
  return (
    <StyledArrow onClick={clickFunction}>
      <div className={`${direction}`}>{glyph}</div>
    </StyledArrow>
  );
};

const StyledArrow = styled.div`
  text-align: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 10;
  padding: auto 0.5rem;
  align-items: center;
  justify-content: center;

  .right {
    right: 0;
  }
  .left {
    left: 0;
  }
`;

export default Arrow;
