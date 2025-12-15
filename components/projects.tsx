"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const sortedProjects = [...projectsData].reverse();

  return (
    <section ref={ref} className="mb-28 scroll-mt-28" id="projects">
      <SectionHeading>Hobby projects</SectionHeading>
      <div>
        {sortedProjects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
