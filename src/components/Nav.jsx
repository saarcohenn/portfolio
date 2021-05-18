import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const Nav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { pathname } = useLocation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <StyledNav>
        <AppBar position="fixed" className="app-bar">
          <Toolbar>
            <Typography variant="h6" className="title">
              <Link to="/portfolio/" id="logo">
                Saar Cohen
              </Link>
            </Typography>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <IconButton
                edge="start"
                className="menu-btn"
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </Button>
            <StyledMenu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link to="/portfolio/">About</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/portfolio/Skills">Skills</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/portfolio/Projects">Projects</Link>
              </MenuItem>
            </StyledMenu>
          </Toolbar>
        </AppBar>
      </StyledNav>

      {/* <StyledNav>
        <h1></h1>
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
              animate={{
                width: pathname === "/portfolio/Skills" ? "50%" : "0%",
              }}
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
      </StyledNav> */}
    </>
  );
};

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  .app-bar {
    background-color: #333333;
    padding: 0 1rem;
  }
  .title {
    flex-grow: 1;
  }
  .MuiListItem-button > a {
    background-color: #23d997;
  }
  .MuiIconButton-root {
    align-items: center;
    justify-content: center;
  }
  .MuiSvgIcon-root {
    color: white;
  }
  #logo {
    font-size: 1.6rem;
    font-family: "lobster", cursive;
    font-weight: lighter;
  }
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

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default Nav;
