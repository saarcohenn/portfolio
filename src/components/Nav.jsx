import React, { useState } from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InfoIcon from "@material-ui/icons/Info";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import ViewCarouselIcon from "@material-ui/icons/ViewCarousel";

const Nav = () => {
  const [anchorEl, setAnchorEl] = useState(null);

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
              <Link
                to="about-section"
                id="logo"
                onClick={() => scroll.scrollToTop()}
              >
                Saar Cohen
              </Link>
            </Typography>

            <IconButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              edge="start"
              className="menu-btn"
              color="inherit"
              aria-label="menu"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>

            <StyledMenu
              id="simple-menu"
              width="10rem"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <StyledMenuItem>
                <Link
                  style={{
                    width: "100%",
                    display: "flex",
                  }}
                  to="about-section"
                  onClick={() => scroll.scrollToTop()}
                >
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary="About" />
                </Link>
              </StyledMenuItem>
              <StyledMenuItem>
                <Link
                  style={{
                    width: "100%",
                    display: "flex",
                  }}
                  to="skills-section"
                  smooth={true}
                  duration={1000}
                >
                  <ListItemIcon>
                    <WhatshotIcon />
                  </ListItemIcon>
                  <ListItemText primary="Skills" />
                </Link>
              </StyledMenuItem>
              <StyledMenuItem>
                <Link
                  style={{
                    width: "100%",
                    display: "flex",
                  }}
                  to="projects-section"
                  smooth={true}
                  duration={1000}
                >
                  <ListItemIcon>
                    <ViewCarouselIcon />
                  </ListItemIcon>
                  <ListItemText primary="Projects" />
                </Link>
              </StyledMenuItem>
            </StyledMenu>
          </Toolbar>
        </AppBar>
      </StyledNav>
    </>
  );
};

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  .app-bar {
    background-color: #333;
    padding: 0 1rem;
  }
  .title {
    flex-grow: 1;
  }

  .MuiSvgIcon-root {
    color: white;
  }

  .MuiListItemIcon-root {
    color: white;
  }

  .link {
    display: flex;
    margin: 0;
    width: 8rem;
    align-items: center;
    justify-content: center;
  }

  #logo {
    font-size: 1.6rem;
    font-family: "lobster", cursive;
    font-weight: lighter;
    cursor: pointer;
  }
  a {
    color: white;
    text-decoration: none;
    width: 100%;
  }

  @media (max-width: 1300) {
    flex-direction: column;
    padding: 2rem 1rem;

    #logo {
      display: inline-block;
      margin: 2rem;
    }
  }
  @media (max-width: 768px) {
    #logo {
      font-size: 2.5rem;
    }
  }
`;

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    backgroundColor: "#333",
    width: "12rem",
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
    display: "flex",
    width: "100%",
    margin: "0",
    "& .MuiListItemText-primary": {
      fontWeight: "bold",
    },
    "& .MuiListItemIcon-root": {
      color: "#23d997",
    },

    "&:hover": {
      backgroundColor: "#296851",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },

    "&:focus": {
      backgroundColor: "#23d997",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default Nav;
