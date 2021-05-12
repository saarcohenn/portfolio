import React from "react";
import styled from "styled-components";

const ImageSlide = ({ photo, name }) => {
  return (
    <StyledSlide>
      <img src={photo} alt={name} />
    </StyledSlide>
  );
};

const StyledSlide = styled.div`
  width: 100%;
  img {
    max-width: 100%;
  }
`;

export default ImageSlide;
