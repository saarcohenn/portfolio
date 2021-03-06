import { FaHtml5, FaCss3Alt, FaGit } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiDjango,
  SiMongodb,
  SiFlask,
  SiDocker,
  SiGithub,
  SiNextDotJs,
} from "react-icons/si";
import Speechly from "../icons/speechly_icon.png";
import FramerMotion from "../icons/framermotion_icon.png";
import NodeJS from "../icons/nodejs_icon.png";
import Jenkins from "../icons/jenkins_icon.png";
import Python from "../icons/python_icon.png";
import MSsql from "../icons/mssql_icon.png";
import Jira from "../icons/jira_icon.png";

import React from "react";

const Icon = ({ name, color, size }) => {
  switch (name) {
    case "HTML5":
      return <FaHtml5 style={{ color: color }} size={size} />;
    case "CSS3":
      return <FaCss3Alt style={{ color: color }} size={size} />;
    case "Git":
      return <FaGit style={{ color: color }} size={size} />;
    case "JavaScript":
      return <SiJavascript style={{ color: color }} size={size} />;
    case "ReactJS":
      return <SiReact style={{ color: color }} size={size} />;
    case "Python":
      return (
        <img src={Python} alt={name} style={{ height: size, width: size }} />
      );
    case "Django":
      return <SiDjango style={{ color: color }} size={size} />;
    case "Flask":
      return <SiFlask style={{ color: color }} size={size} />;
    case "MongoDB":
      return <SiMongodb style={{ color: color }} size={size} />;
    case "Docker":
      return <SiDocker style={{ color: color }} size={size} />;
    case "Next.JS":
      return <SiNextDotJs style={{ color: color }} size={size} />;
    case "GitHub":
      return <SiGithub style={{ color: color }} size={size} />;
    case "MSSQL":
      return (
        <img src={MSsql} alt={name} style={{ height: size, width: size }} />
      );
    case "Speechly":
      return (
        <img src={Speechly} alt={name} style={{ height: size, width: size }} />
      );
    case "Jira":
      return (
        <img src={Jira} alt={name} style={{ height: size, width: size }} />
      );
    case "NodeJS":
      return (
        <img src={NodeJS} alt={name} style={{ height: size, width: size }} />
      );
    case "Jenkins":
      return (
        <img src={Jenkins} alt={name} style={{ height: size, width: size }} />
      );
    case "Framer Motion":
      return (
        <img
          src={FramerMotion}
          alt={name}
          style={{ height: size, width: size }}
        />
      );
    default:
      return <div />;
  }
};

export { Icon };
