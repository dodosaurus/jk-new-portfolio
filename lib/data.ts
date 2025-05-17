import React from "react";
import { LuLeaf } from "react-icons/lu";
import { MdOutlineScience } from "react-icons/md";
import { CgWorkAlt } from "react-icons/cg";
import { LuBookMarked } from "react-icons/lu";
import chlebiatkoBlog from "@/public/chlebiatkoBlog.png";
import minersReporter from "@/public/minersReporter.png";
import gatsbyPortfolio from "@/public/gatsbyPortfolio.png";
import enduranceVault from "@/public/enduranceVault.png";
import metaxWeb from "@/public/metaxWeb.png";
import metaxApp from "@/public/metaxApp.png";

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
    title: "Pharmacist",
    location: "Košice (SK)",
    description:
      "After graduation, I worked as retail pharmacist. In parallel with my daily job, I worked on PharmD thesis (with Immunology department, UVLF Košice).",
    icon: React.createElement(MdOutlineScience),
    date: "06/2016 - 08/2018",
  },
  {
    title: "Test Automation Engineer",
    location: "Košice (SK) & Dortmund (DE)",
    description:
      "Outsourced from FPT Slovakia to Compleo Charging Solutions. Green project, where I was focused solely on API test automation (via Micro Focus UFT, later Cypress).",
    icon: React.createElement(LuLeaf),
    date: "08/2018 - 11/2022",
  },
  {
    title: "QA Engineer",
    location: "Košice (SK)",
    description:
      "Outsourced from Hotovo. Testing (manual + automation) of AI agent app (with RAG, own frontend) for legal company. Great short, rapid-paced, startup-like development experience.",
    icon: React.createElement(LuBookMarked),
    date: "03/2025 - 05/2025",
  },
  {
    title: "Test Solutions Engineer",
    location: "Košice (SK) & Sydney (AU)",
    description:
      "Outsourced from Hotovo to Protecht. Complex risk managment software, focusing on API test automation with Robot Framework, but also developing testing tools (Node and NextJS).",
    icon: React.createElement(CgWorkAlt),
    date: "11/2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Chlebiatko Blog",
    description:
      "Little blogging platform for hobby baker (my wife), with own admin mode to add/edit/delete blog posts.",
    link: "https://chlebiatko-blog.web.app/",
    tags: ["React", "Bulma", "Firebase", "Redux", "Thunk"],
    imageUrl: chlebiatkoBlog,
    year: 2021,
  },
  {
    title: "First portfolio",
    description:
      "My previous portfolio website, which I used to try new technologies, like static site generation and connection to CMS.",
    link: "no link available",
    tags: ["Gatsby", "Tailwind", "Contentful"],
    imageUrl: gatsbyPortfolio,
    year: 2021,
  },
  {
    title: "2Miners Reporter",
    description:
      "Cryptomining reporting tool for my own needs. Server running on mining machine was regulary fetching data from 3rd party API and passing them to UI, where graphs were generated.",
    link: "no link available",
    tags: ["React", "Bulma", "Firebase", "Node", "Axios"],
    imageUrl: minersReporter,
    year: 2023,
  },
  {
    title: "Endurance Vault",
    description:
      "Companion app for athletes on Strava, where your walking/cycling/running activites are exchanged for in-app currency, that you can then spend on collectible cards.",
    link: "no link available",
    tags: ["Next JS", "Tailwind", "ShadCN", "REST API", "Playwright"],
    imageUrl: enduranceVault,
    year: 2024,
  },
  {
    title: "METAX SK (website)",
    description:
      "Friend's company needed a website, so I helped them out. It's a simple one page promo website, with some information about the company and their services.",
    link: "https://metaxsk.sk",
    tags: ["Next JS", "Tailwind", "ShadCN", "Vercel"],
    imageUrl: metaxWeb,
    year: 2024,
  },
  {
    title: "METAX SK (mobile app)",
    description:
      "Mobile app serving as interactive measuring tool for steel workers, when they need to calculate total areas of various geometric shapes.",
    link: "no link available",
    tags: ["Expo", "React Native", "TypeScript"],
    imageUrl: metaxApp,
    year: 2025,
  },
] as const;

export const skillsData = [
  "TypeScript",
  "Cypress",
  "Playwright",
  "React",
  "Expo",
  "React Native",
  "NodeJS",
  "Robot Framework",
  "Postman",
  "MySQL",
  "Git",
  "HTML",
  "CSS",
  "NextJS",
  "GatsbyJS",
  "Tailwind",
  "Bulma",
] as const;
