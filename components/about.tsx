"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 1);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:md-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      
      <p className="mb-3">
        I graduated from <span className="font-medium">Pharmacy</span> and worked in both retail pharmacy and <span className="italic">immunological research</span>. However, retail work didn't satisfy my need for <span className="underline">creative problem-solving</span>. In 2018, I made the transition to <span className="font-medium">software development</span>.
      </p>

      <p className="mb-3">
        After learning the basics with Java, I switched to{" "}
        <span className="underline">JavaScript</span> and fell in love with coding through building dozens of small projects. I landed my first role as a{" "}
        <span className="font-medium">Test Automation Engineer</span> on a greenfield project with a team of skilled developers and testers. Over 4 years, I gained experience with tools like Micro Focus UFT, Postman, SoapUI, and especially <span className="italic">Cypress</span>. Currently, I work in a similar position using a different tech stack, including Robot Framework, NodeJS, and ReadyAPI.
      </p>

      <p className="mb-3">
        When I'm not developing test automation, I enjoy working on personal projects. Coding gives me <span className="underline">joy and a sense of creative fulfillment</span>, and I'm grateful to do work that I'm passionate about.
      </p>
    </motion.section>
  );
}
