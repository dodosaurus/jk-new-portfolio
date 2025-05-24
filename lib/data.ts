import React from "react";
import { LuLeaf } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import { LuBookMarked } from "react-icons/lu";
import { FaBookMedical } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { FaCapsules } from "react-icons/fa6";



import chlebiatkoBlog from "@/public/chlebiatkoBlog.png";
import minersReporter from "@/public/minersReporter.png";
import gatsbyPortfolio from "@/public/gatsbyPortfolio.png";
import enduranceLegends from "@/public/enduranceLegends.png";
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
    title: "Mgr. (Pharmacy)",
    location: "Košice (SK)",
    description:
      "Graduated from Pharmacy at University of Veterinary Medicine and Pharmacy in Košice.",
    icon: React.createElement(FaBookMedical),
    date: "09/2010 - 06/2016",
    tag: "student",
  },
  {
    title: "PharmDr. (Immunology, Pharmacology)",
    location: "Košice (SK)",
    description:
      "Graduated from the Immunology Institute of University of Veterinary Medicine and Pharmacy in Košice. Research and thesis were done in cooperation with I. internal medicine clinic of UNLP Košice.",
    icon: React.createElement(FaBook),
    date: "06/2016 - 06/2018",
    tag: "student",
  },
  {
    title: "Retail Pharmacist",
    location: "Eastern Slovakia (SK)",
    description:
      "As a 'Flying Pharmacist' covering missing pharmacist's positions in site pharmacies around Eastern/Middle Slovakia.",
    icon: React.createElement(FaCapsules),
    date: "06/2016 - 08/2018",
    tag: "pharmacy",
  },
  {
    title: "Test Automation Engineer",
    location: "Košice (SK) & Dortmund (DE)",
    description:
      "Outsourced from FPT Slovakia to Compleo Charging Solutions. A green project, where I was focused solely on API test automation (via Micro Focus UFT, later Cypress).",
    icon: React.createElement(LuLeaf),
    date: "08/2018 - 11/2022",
    tag: "it",
  },
  {
    title: "QA Engineer",
    location: "Košice (SK)",
    description:
      "Outsourced from Hotovo. Testing (manual + automation) of AI agent app (with RAG, own frontend) for legal company. A great short, rapid-paced, startup-like development experience.",
    icon: React.createElement(LuBookMarked),
    date: "03/2025 - 05/2025",
    tag: "it",
  },
  {
    title: "QA Engineer",
    location: "Košice (SK) & Sydney (AU)",
    description:
      "Outsourced from Hotovo to Protecht. Complex risk management software, focusing on API test automation with Robot Framework and development of testing tools (NodeJS and NextJS).",
    icon: React.createElement(CgWorkAlt),
    date: "11/2022 - present",
    tag: "it",
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
      "Cryptomining reporting tool for my own needs. Server running on a mining machine was regularly fetching data from 3rd party API and passing them to UI, where graphs were generated.",
    link: "no link available",
    tags: ["React", "Bulma", "Firebase", "Node", "Axios"],
    imageUrl: minersReporter,
    year: 2023,
  },
  {
    title: "Endurance Legends",
    description:
      "Companion app for athletes on Strava, where your walking/cycling/running activities are exchanged for in-app currency, that you can then spend on collectible cards.",
    link: "https://endurance-legends.vercel.app/",
    tags: ["Next JS", "Tailwind", "ShadCN", "REST API", "Playwright"],
    imageUrl: enduranceLegends,
    year: 2024,
  },
  {
    title: "METAX SK (website)",
    description:
      "A friend's company needed a website, so I helped them out. It's a simple one-page promo website, with some information about the company and their services.",
    link: "https://metaxsk.sk",
    tags: ["Next JS", "Tailwind", "ShadCN", "Vercel"],
    imageUrl: metaxWeb,
    year: 2025,
  },
  {
    title: "METAX SK (mobile app)",
    description:
      "Mobile app serving as interactive measuring tool for steel workers, when they need to calculate the total areas of various geometric shapes.",
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
