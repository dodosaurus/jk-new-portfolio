"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  
  const startDate = new Date('2018-08-01');
  const currentDate = new Date();
  
  const yearsOfExperience = currentDate.getFullYear() - startDate.getFullYear();
  const monthsOffset = currentDate.getMonth() - startDate.getMonth();
  
  const totalMonths = yearsOfExperience * 12 + monthsOffset;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/IMG_2677.jpg"
              alt="Jozef portrait"
              width={576}
              height={576}
              priority={true}
              className="h-40 w-40 rounded-full object-cover border-[0.35rem] border-white shadow-xl dark:border-gray-900"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Jozef.</span>
        <br /> I'm a <span className="font-bold">QA Engineer</span> with <span className="font-bold whitespace-nowrap">{years} years {months > 0 && `and ${months} month${months > 1 ? 's' : ''}`}</span> of
        experience. I enjoy working on <span className="italic"> test automation.</span>
        <br />I also build apps that <span className="underline">simplify testing workflows</span> or satisfy my creative curiosity.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="https://www.linkedin.com/in/kovacjozef"
          target="_blank"
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-linkedin active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-linkedin"
        >
          <BsLinkedin />
        </a>
        
        <a
          href="https://github.com/dodosaurus"
          target="_blank"
          className="bg-white text-gray-700 p-4 flex items-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-github active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-github"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
