import React from "react";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";

const Footer = () => {
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <StyledFooter>
      <h2 className="footer-title">Contact me here:</h2>
      <div className="connections">
        <IconButton>
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <Mailto
          email="saar.cohenn@gmail.com"
          subject="Hi Saar | ContactMe "
          body="Hi Saar,"
        >
          <IconButton>
            <EmailIcon fontSize="large" />
          </IconButton>
        </Mailto>
        <IconButton>
          <GitHubIcon fontSize="large" />
        </IconButton>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100%;
  height: 20vh;

  .footer-title {
    font-size: 2rem;
    font-family: "Raleway", sans-serif;
  }
  .connections {
    display: flex;
    justify-content: space-around;
    width: 50%;
  }

  @media (min-width: 768px) {
    .connections {
      width: 15rem;
    }
  }
`;

export default Footer;
