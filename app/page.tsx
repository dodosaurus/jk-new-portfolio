import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { Metadata } from "next";

// Add JSON-LD structured data for better SEO
export const generateMetadata = (): Metadata => {
  // Create the JSON-LD data
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jozef Kováč',
    url: 'https://jkovac.eu',
    image: 'https://jkovac.eu/dodo-monk.png',
    jobTitle: 'QA Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Hotovo / Protecht'
    },
    description: 'QA Engineer with 6+ years of experience in test automation and quality assurance.',
    sameAs: [
      'https://www.linkedin.com/in/kovacjozef',
      'https://github.com/dodosaurus'
    ],
    skills: [
      'Test Automation', 
      'Playwright', 
      'Cypress', 
      'Robot Framework', 
      'TypeScript', 
      'React', 
      'NextJS'
    ]
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Jozef Kováč - QA Engineer Portfolio',
    url: 'https://jkovac.eu',
    description: 'Personal portfolio of Jozef Kováč, QA Engineer and Test Automation Specialist'
  };

  return {
    other: {
      'json-ld': JSON.stringify([personSchema, websiteSchema])
    }
  };
};

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
