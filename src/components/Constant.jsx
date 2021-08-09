// Imports of Photos
import budget1 from "../img/budget-1.png";
import budget2 from "../img/budget-2.png";
import budget3 from "../img/budget-3.png";
import budget4 from "../img/budget-4.png";
import sudoku1 from "../img/sudoku-1.png";
import sudoku2 from "../img/sudoku-2.png";
import sudoku3 from "../img/sudoku-3.png";
import sudoku4 from "../img/sudoku-4.png";
import waves1 from "../img/waves-1.png";
import waves2 from "../img/waves-2.png";
import waves3 from "../img/waves-3.png";
import waves4 from "../img/waves-4.png";

export const skills = [
  {
    id: 1,
    color: "#E5622A",
    name: "HTML5",
    exp: 5,
  },
  {
    id: 2,
    color: "#159ED9",
    name: "CSS3",
    exp: 5,
  },
  {
    id: 4,
    color: "#F4DC1E",
    name: "JavaScript",
    exp: 3,
  },
  {
    id: 6,
    color: "#39cb6f",
    name: "Python",
    exp: 3,
  },
  {
    id: 5,
    color: "#62DAF9",
    name: "ReactJS",
    exp: 3,
  },
  {
    id: 9,
    color: "#EA4C27",
    name: "NodeJS",
    exp: 3,
  },
  {
    id: 3,
    color: "#EA4C27",
    name: "Git",
    exp: 4,
  },
  {
    id: 16,
    color: "#ffffff",
    name: "GitHub",
    exp: 4,
  },
  {
    id: 15,
    color: "#ffffff",
    name: "Next.JS",
    exp: 0.5,
  },
  {
    id: 8,
    color: "#1b7455",
    name: "Django",
    exp: 1,
  },
  {
    id: 12,
    color: "#ffffff",
    name: "Flask",
    exp: 0.5,
  },
  {
    id: 14,
    color: "#2491E6",
    name: "Docker",
    exp: 0.5,
  },
  {
    id: 10,
    color: "#8CC366",
    name: "MongoDB",
    exp: 0.5,
  },
  {
    id: 11,
    color: "#c2463d",
    name: "MSSQL",
    exp: 0.5,
  },

  {
    id: 7,
    color: "#2484FE",
    name: "Jira",
    exp: 2,
  },

  {
    id: 13,
    color: "#e35747",
    name: "Jenkins",
    exp: 0.5,
  },
];

export const projects = [
  {
    id: 1,
    name: "Budget-Tracker",
    description:
      "Awesome and easy-to-use budget tracker app. This app was created in order to track my expenses, and then modified to track my incomes against my expenses. This app contains can use voice commands.",
    tech: ["HTML5", "CSS3", "ReactJS", "Speechly"],
    photos: [budget1, budget2, budget3, budget4],
    url: "https://sc-budget-tracker.netlify.app/",
  },
  {
    id: 2,
    name: "Waves - Music App",
    description:
      "Chill music app for developers, powered by Chillhop Music. I enjoy it from time to time, and use it to concentrate as I work on my own projects.",
    tech: ["HTML5", "CSS3", "ReactJS", "Framer Motion"],
    photos: [waves1, waves2, waves3, waves4],
    url: "https://sc-music-player-chillhop.netlify.app/",
  },
  {
    id: 3,
    name: "Sudoku",
    description:
      "The classic sudoku game. Made for my own fun, and uses 3 different boards with 3 different difficulties.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    photos: [sudoku1, sudoku2, sudoku3, sudoku4],
    url: "https://sc-sudoku.netlify.app/",
  },
];
