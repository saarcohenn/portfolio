import { FaHtml5, FaCss3Alt, FaGit } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiPython,
  SiDjango,
  SiMongodb,
} from "react-icons/si";
import Speechly from "../img/logo-speechly.png";
import FramerMotion from "../img/FramerMotion.png";

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
      return <SiPython style={{ color: color }} size={size} />;
    case "Django":
      return <SiDjango style={{ color: color }} size={size} />;
    case "MongoDB":
      return <SiMongodb style={{ color: color }} size={size} />;
    case "Speechly":
      return (
        <img src={Speechly} alt={name} style={{ height: size, width: size }} />
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
