import React from "react";
import { LuLeaf } from "react-icons/lu";
import { MdOutlineScience } from "react-icons/md";
import { CgWorkAlt } from "react-icons/cg";
import chlebiatkoBlog from "@/public/chlebiatkoBlog.png";
import minersReporter from "@/public/minersReporter.png";
import gatsbyPortfolio from "@/public/gatsbyPortfolio.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Pharmacy and science",
    location: "Košice (SK)",
    description:
      "After graduation, I worked as retail pharmacist. Besides my daily duties, I worked on PharmD scientific thesis (with Immunology department, UVLF Košice).",
    icon: React.createElement(MdOutlineScience),
    date: "2016 - 2018",
  },
  {
    title: "QA engineer",
    location: "Košice (SK) & Dortmund (DE)",
    description:
      "Outsourced from FPT Slovakia to Compleo Charging Solutions. Green project, where I was focused on test automation, enhancing it, developing more and more quality test suites. Started with Micro Focus UFT, then migrating to Cypress.",
    icon: React.createElement(LuLeaf),
    date: "2018 - 2022",
  },
  {
    title: "QA engineer",
    location: "Košice (SK) & Sydney (AU)",
    description:
      "Outsourced from Hotovo to Protecht. Complex risk managment software, focusing on test automation with Robot Framework, developing testing tools with Node.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Chlebiatko Blog",
    description:
      "Little blogging platform for hobby baker (my wife), with own admin mode to add/edit/delete blog posts.",
    tags: ["React", "Bulma", "Firebase", "Redux", "Thunk"],
    imageUrl: chlebiatkoBlog,
  },
  {
    title: "2Miners Reporter",
    description:
      "Cryptomining reporting tool for my own needs. Server running on mining machine was regulary seeding data for frontend generated graphs.",
    tags: ["React", "Bulma", "Firebase", "Node", "Axios"],
    imageUrl: minersReporter,
  },
  {
    title: "First portfolio",
    description:
      "My previous portfolio website, which I used to try new technologies, like static site generation and connection to CMS.",
    tags: ["Gatsby", "Tailwind", "Contentful"],
    imageUrl: gatsbyPortfolio,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "Cypress",
  "REST API",
  "Node",
  "Micro Focus UFT & ALM",
  "Robot Framework",
  "Python",
  "Postman",
  "MySQL",
  "Git",
  "HTML",
  "CSS",
  "React",
  "Next",
  "Gatsby",
  "Tailwind",
  "Bulma",
] as const;
