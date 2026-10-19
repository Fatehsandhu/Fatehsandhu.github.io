// Extra content for the terminal-style /v2 page.
// Shared facts (name, contact, timings, education) come from site.ts.

export type Commit = {
  /** Short label shown like a commit hash. Decorative. */
  hash: string;
  title: string;
  meta: string;
  body: string;
  tags: string[];
};

export const terminal = {
  status: "open to work",
  // Profile photo in public/. Set to "" to show the FS monogram instead.
  photo: "/fateh.jpg",
  tagline: "Engineering software that people stop waiting on.",
  // Hero editor output. Same numbers as site.timings, as short log keys.
  perfLog: [
    { key: "crm.user_lookup", before: "30+ s", after: "2–3 s" },
    { key: "ingest.nightly_10gb", before: "3–4 h", after: "< 1 h" },
    { key: "tickets.resolution", before: "~1 week", after: "~2 days" },
    { key: "client.back_and_forth", before: "baseline", after: "−75%" },
  ],
  modules: ["php", "laravel", "sql", "python", "react", "next.js", "typescript"],

  profile: [
    { key: "operator", value: "Fateh Sandhu" },
    { key: "role", value: "Senior full stack dev" },
    { key: "location", value: "Toronto, ON" },
    { key: "experience", value: "8+ years" },
  ],

  whoami:
    "Full stack developer with 8+ years on enterprise web apps that handle payment data, mostly in PHP/Laravel and SQL, with React and Next.js on the front end.",
  focus:
    "Finding out why something is slow and fixing the cause: queries, data imports, support workflows. I also mentor interns, review code, and work closely with product, QA and business teams.",
  strengths: [
    "Debugging and root cause analysis",
    "Explaining technical problems clearly",
    "Query and performance tuning",
    "Big-data ingestion and reporting",
    "Security and PCI compliance",
    "Mentoring and code review",
  ],

  // Newest first, like git log.
  commits: [
    {
      hash: "a7f31c2",
      title: "Senior Software Developer",
      meta: "TECHCOM · 2022–2026",
      body: "Worked on performance, reporting and security for the payments platform, mentored two interns, and did regular code reviews.",
      tags: ["PHP", "Laravel", "SQL", "Leadership"],
    },
    {
      hash: "5e09b4d",
      title: "Ticketing manager: −75% client back-and-forth",
      meta: "TECHCOM",
      body: "Built a ticketing manager on our in-house API. Resolution time dropped from about a week to about two days.",
      tags: ["REST API", "UX", "Support tooling"],
    },
    {
      hash: "c21d8e0",
      title: "Overnight ingestion: 3–4 h → under 1 h",
      meta: "TECHCOM",
      body: "Reworked the scripts that load 10 GB+ delta files each night and sorted the data for fast retrieval, so they stopped holding up other jobs.",
      tags: ["Data pipelines", "SQL", "Optimization"],
    },
    {
      hash: "9b4e71a",
      title: "CRM user screen: 30+ s → 2–3 s",
      meta: "TECHCOM",
      body: "Debugged slow loads for users with linked accounts: the same data was being looked up again and again. Cut the queries, kept the results in memory, and fixed the indexing.",
      tags: ["Debugging", "SQL", "Indexing", "PHP"],
    },
    {
      hash: "3f6a0d9",
      title: "Payment reporting over millions of records",
      meta: "TECHCOM",
      body: "Built a reporting system that lets clients analyze their payment data, tuned so reports load without a wait.",
      tags: ["Reporting", "Big data", "SQL"],
    },
    {
      hash: "e8c1f47",
      title: "SHA-256 login and PCI compliance",
      meta: "TECHCOM",
      body: "Moved login across the platform to SHA-256 to meet current regulations and helped bring our systems into PCI compliance.",
      tags: ["Security", "PCI"],
    },
    {
      hash: "0d2b6c5",
      title: "Software Developer, Developer / Business Analyst",
      meta: "TECHCOM · 2018–2022",
      body: "Built web apps and REST APIs from business requirements, improved SQL schemas, and helped migrate the platform to PHP 7.",
      tags: ["PHP 7", "REST", "Requirements"],
    },
  ] satisfies Commit[],

  education: {
    hash: "init",
    title: "Bachelor of Technology",
    meta: "Seneca College · 2014–2018",
    body: "",
    tags: ["Education"],
  } satisfies Commit,
};
