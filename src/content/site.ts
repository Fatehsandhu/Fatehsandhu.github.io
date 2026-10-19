// All site copy lives here. Edit this file to update the portfolio;
// the components only handle layout.

export type Timing = {
  task: string;
  before: string;
  after: string;
  /** Share of the original time/effort that remains, 0–1. Sets the bar width. */
  ratio: number;
};

export type Role = {
  title: string;
  period: string;
};

export type Job = {
  company: string;
  location: string;
  roles: Role[];
  highlights: string[];
};

export type Project = {
  name: string;
  url?: string;
  status: string;
  summary: string;
  details: string[];
  stack: string[];
};

export const site = {
  name: "Fateh Sandhu",
  role: "Full stack developer",
  location: "Toronto, ON",
  title: "Fateh Sandhu — Full stack developer",
  description:
    "Toronto full stack developer with 8+ years building payment, reporting and CRM systems in PHP/Laravel, SQL, React and Next.js.",

  headline: "I make slow systems fast.",
  intro:
    "I'm a full stack developer with 8+ years on enterprise web apps that handle payment data. Most of my best work has been taking something people waited on and making it quick: queries, data imports, support workflows.",

  // Hero timing log. Numbers come straight from the TECHCOM resume bullets.
  timings: [
    { task: "CRM user lookup", before: "30+ s", after: "2–3 s", ratio: 2.5 / 30 },
    { task: "Overnight data import (10 GB+)", before: "3–4 h", after: "< 1 h", ratio: 1 / 3.5 },
    { task: "Support ticket resolution", before: "~1 week", after: "~2 days", ratio: 2 / 7 },
    { task: "Back-and-forth with clients", before: "baseline", after: "−75%", ratio: 0.25 },
  ] satisfies Timing[],

  about: [
    "I've spent my career at TECHCOM, growing from developer and business analyst to senior developer. The work sits close to the money: payment processing, reporting over millions of records, and the security and PCI compliance that comes with it.",
    "I like the part of the job where you find out why something is slow and fix the cause, not the symptom. I also mentor interns, review code, and work closely with product, QA and business teams to turn requirements into software people actually use.",
  ],

  experience: [
    {
      company: "TECHCOM",
      location: "Toronto, ON",
      roles: [
        { title: "Senior Software Developer", period: "2022–2026" },
        { title: "Software Developer, Developer / Business Analyst", period: "2018–2022" },
      ],
      highlights: [
        "Built a ticketing manager on our in-house API. Support measured about 75% less back-and-forth with clients, and resolution time dropped from about a week to about two days.",
        "Built a reporting system that lets clients analyze their payment data across millions of records, tuned so reports load without a wait.",
        "Reworked the overnight ingestion scripts for 10 GB+ delta files. Jobs that took 3–4 hours and held up other processes now finish in under an hour, with data sorted for fast retrieval.",
        "Cut the CRM's user screen from 30+ seconds to 2–3 seconds by fixing indexes, running queries once and removing redundant loops.",
        "Moved login across the platform to SHA-256 to meet current regulations, and helped bring our systems into PCI compliance.",
        "Mentored two interns over about two years and do regular code reviews.",
      ],
    },
  ] satisfies Job[],

  projects: [
    {
      name: "cashmate.ca",
      url: "https://cashmate.ca",
      status: "Client project, in progress",
      summary:
        "A loan website for a Saskatchewan lender, built solo in Next.js from a base template.",
      details: [
        "Built the site and its loan calculator myself.",
        "Now building a custom application platform with a multi-step form and an admin dashboard.",
        "Source code is private to the client.",
      ],
      stack: ["Next.js", "React", "TypeScript"],
    },
  ] satisfies Project[],

  skills: [
    { group: "Back end", items: ["PHP", "Laravel", "Python", "REST APIs"] },
    { group: "Data", items: ["SQL", "Schema design", "Query optimization", "Data pipelines"] },
    { group: "Front end", items: ["React", "Next.js", "TypeScript", "HTML/CSS"] },
    { group: "Practice", items: ["Security & PCI compliance", "Code review", "Mentoring", "AWS (learning)"] },
  ],

  education: {
    school: "Seneca College",
    credential: "Bachelor of Technology",
    period: "2014–2018",
  },

  // TODO: replace these with your real details. Leave a value as "" to hide that link.
  // Leave a value as "" to hide that link everywhere on the site.
  contact: {
    email: "", // e.g. "name@example.com"
    linkedin: "https://www.linkedin.com/in/fateh-singh-sandhu",
    github: "https://github.com/Fatehsandhu",
    // Add the PDF as public/resume.pdf, then set this to "/resume.pdf"
    resume: "",
  },
};
