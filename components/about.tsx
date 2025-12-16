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
        I graduated from <span className="font-medium">Pharmacy</span> and worked in retail pharmacy and <span className="italic">immunological research</span>, but retail wasn't my cup of tea due to my hunger for <span className="underline">more creative work</span>. In 2018, I transitioned to <span className="font-medium">software development</span>.
      </p>

      <p className="mb-3">
        After learning basics with Java, I switched to{" "}
        <span className="underline">JavaScript</span> and through making dozens
        of little projects, I fell in love with coding. I got my first job as{" "}
        <span className="font-medium">Test Automation Engineer</span> on a great project full
        of skillful people. I learned so much, especially about testing. After 4
        years of experience with tools like Micro Focus UFT, ALM, Postman,
        SoapUI, and most of all with <span className="italic">Cypress</span>, I
        decided to move on. Currently, I am happily working in a similar position, but
        in different setting and tools (like Robot Framework, NodeJS, ReadyAPI).
      </p>

      <p className="mb-3">
        <span className="italic">When I am not developing test automation</span>
        , I enjoy working on personal projects. Coding gives me{" "}
        <span className="underline">joy and sense of creative fulfillment</span>
        . I am really thankful that I can do a job like this for a living 👌
      </p>
    </motion.section>
  );
}
