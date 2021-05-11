import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link to="/portfolio/" id="logo">
          Saar Cohen
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/portfolio/">About</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/portfolio/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/portfolio/Skills">Skills</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/portfolio/Skills" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/portfolio/Projects">Projects</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{
              width: pathname === "/portfolio/Projects" ? "50%" : "0%",
            }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 5vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;

  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  #logo {
    font-size: 1.8rem;
    font-family: "lobster", cursive;
    font-weight: lighter;
  }
  @media (max-width: 1300) {
    flex-direction: column;
    padding: 2rem 1rem;
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
    }
    li {
      padding: 0;
    }
    #logo {
      display: inline-block;
      margin: 2rem;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
    padding: 1rem 1.5rem;
    justify-content: space-between;
    ul {
      text-align: center;
      display: flex;
      /* flex-direction: column; */
      margin: 0;
      padding: 0;
      justify-content: center;
    }
    li {
      padding: 1rem;
    }
    #logo {
      font-size: 2.5rem;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background-color: #3b77f9;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export default Nav;
