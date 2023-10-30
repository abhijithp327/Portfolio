import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 10,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Responsive Design ",
    projects: 5,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Server Side",
    projects: 4,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "Build professional work-like projects to master React, Node JS, MongoDB, Javascript, and more to land a top career with me.",
  "I can use process design to create digital products. Besides that also help their business",
];

export const workExp = [
  {
    place: "Freelancer",
    tenure: "Jan 2022 - Jun 2022 ",
    role: "Fullstack Developer",
    detail:
      "A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end (the parts of a website a user sees and interacts with) and the back end (the behind-the-scenes data storage and processing) require different skill sets.  In short, they create the concepts",
  },
  {
    place: "Technovalley Software Private Limited",
    tenure: "Aug 2022 -  Jan 2023",
    role: "Fullstack Developer Python (Intern)",
    detail:
      "A Full Stack Python Developer is a software professional who specializes in developing applications using the Python programming language. They are responsible for designing, coding, testing, and deploying software solutions.",
  },
  {
    place:"Gofreelab Technology",
    tenure: "Jan 2023 - Present",
    role: "Mer(A)n Developer",
    detail:
      "MERN stack developer should be able to develop and maintain web applications using the MERN stack. This involves writing server-side code with Node. js and Express.",
  },
];

export const comments = [
  {
    name: "Mahatma Gandhi University",
    post: "Bsc Computer Science",
    comment:
      "Mahatma Gandhi University, one of the major Universities in Kerala, is a premier educational institution that strives to fulfill the higher educational needs of the people of Central Kerala.",
    img: "./mgu.png",
  },
  {
    name: "Technovalley Software India Private Limited",
    post: "Fullstack Developer Python",
    comment:
      "Technovalley Software India Private Ltd is an advanced technology company leveraging the potential of information technology.",
    img: "./t.png",
  },
  {
    name: "GoFree Technologies Kochi",
    post: "Mer(A)n Developer",
    comment:
      "GoFreeLab Technologies recognised as best industry oriented project guidance center in Kochi.GoFreeLab helps you to realise your dream project/product quickly into production.",
    img: "./go.png",
  },
  {
    name: "Expertz Lab",
    post: "Mern Developer",
    comment:
      "Expertzlab is an IT finishing school with a difference. We train on Gen 4.0 technologies, which is the hottest in-demand technologies. We aim to be part of the up-skill & re-skill movement within the IT fraternity today",
    img: "./ex.png",
  },
  
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
