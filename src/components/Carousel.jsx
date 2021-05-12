import React, { useState } from "react";
import styled from "styled-components";
import Arrow from "./Arrow";
import ImageSlide from "./ImageSlide";

const Carousel = ({ photos, name }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const previousSlide = () => {
    const newIndex = (imageIndex - 1) % photos.length;
    setImageIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (imageIndex + 1) % photos.length;
    setImageIndex(newIndex);
  };

  return (
    <StyledCarousel>
      <Arrow
        className="arrow"
        direction="left"
        clickFunction={previousSlide}
        glyph="&#9664;"
      />
      <ImageSlide className="slide" photo={photos[imageIndex]} name={name} />
      <Arrow
        className="arrow"
        direction="right"
        clickFunction={nextSlide}
        glyph="&#9654;"
      />
    </StyledCarousel>
  );
};

const StyledCarousel = styled.div`
  display: flex;
  background: transparent;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 3rem 0;

  .arrow {
    z-index: 10;
  }
`;

export default Carousel;
