"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useThemeContext } from "@/context/theme-context";

export default function About() {
  const { ref } = useSectionInView("About", 1);
  const { theme } = useThemeContext();
  
  const isProgrammerMode = theme === "dark";

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
      
      {isProgrammerMode ? (
        // Programmer content
        <>
          <p className="mb-3">
            After learning basics with Java, I switched to{" "}
            <span className="underline">JavaScript</span> and through making dozens
            of little projects, I fell in love with coding. I got my first job as{" "}
            <span className="font-medium">QA engineer</span> on a great project full
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
        </>
      ) : (
        // Pharmacist content
        <>
          <p className="mb-3">
            Pharmacy studies not only gave me my <span className="font-medium">beautiful wife</span> and a lot of good friends, but also fulfilled my <span className="underline">deep interest and passion</span> for researching and understanding how the human body works. After graduation I worked not only in retail pharmacy, but at the same time on <span className="italic">immunological research</span> as part of getting <span className="font-medium">PharmDr. degree</span>, which was really satisfying and gave me a lot of valuable experience.
          </p>

          <p className="mb-3">
            Retail wasn't my cup of tea because of my inner hunger for <span className="underline">more creative work</span>, so in 2018 I transitioned to a new position in <span className="font-medium">software development</span>.
          </p>
          
        </>
      )}
    </motion.section>
  );
}
