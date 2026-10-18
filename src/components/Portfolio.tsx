import type { ReactNode } from "react";
import { site } from "@/content/site";
import { TimingLog } from "./TimingLog";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

function External({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export function Portfolio() {
  const { contact } = site;
  const year = new Date().getFullYear();

  return (
    <div className="shell">
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="rail">
        <a className="rail-name" href="#top">
          {site.name}
        </a>
        <nav aria-label="Sections">
          <ul className="rail-nav">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="main" className="content">
        <section id="top" className="hero" aria-labelledby="hero-title">
          <p className="hero-who">
            {site.name}, {site.role.toLowerCase()} in {site.location}
          </p>
          <h1 id="hero-title" className="hero-title">
            {site.headline}
          </h1>
          <p className="hero-intro">{site.intro}</p>
          <TimingLog timings={site.timings} />
          <div className="hero-actions">
            {contact.email && (
              <a className="button button-primary" href={`mailto:${contact.email}`}>
                Email me
              </a>
            )}
            {contact.resume && (
              <a className="button" href={contact.resume} download>
                Download resume
              </a>
            )}
          </div>
        </section>

        <section id="about" className="section" aria-labelledby="about-title">
          <h2 id="about-title">About</h2>
          {site.about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </section>

        <section id="experience" className="section" aria-labelledby="experience-title">
          <h2 id="experience-title">Experience</h2>
          {site.experience.map((job) => (
            <article key={job.company} className="job">
              <header className="job-head">
                <h3>{job.company}</h3>
                <p className="muted">{job.location}</p>
              </header>
              <ol className="roles">
                {job.roles.map((r) => (
                  <li key={r.title}>
                    <span className="role-title">{r.title}</span>
                    <span className="role-period">{r.period}</span>
                  </li>
                ))}
              </ol>
              <ul className="highlights">
                {job.highlights.map((h) => (
                  <li key={h.slice(0, 24)}>{h}</li>
                ))}
              </ul>
            </article>
          ))}
          <div className="edu">
            <h3>{site.education.school}</h3>
            <p className="muted">
              {site.education.credential}, {site.education.period}
            </p>
          </div>
        </section>

        <section id="projects" className="section" aria-labelledby="projects-title">
          <h2 id="projects-title">Projects</h2>
          {site.projects.map((p) => (
            <article key={p.name} className="project">
              <header className="project-head">
                <h3>{p.url ? <External href={p.url}>{p.name}</External> : p.name}</h3>
                <p className="status">{p.status}</p>
              </header>
              <p>{p.summary}</p>
              <ul className="highlights">
                {p.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <p className="stack">Built with {p.stack.join(", ")}</p>
            </article>
          ))}
        </section>

        <section id="skills" className="section" aria-labelledby="skills-title">
          <h2 id="skills-title">Skills</h2>
          <dl className="skills">
            {site.skills.map((s) => (
              <div key={s.group} className="skill-row">
                <dt>{s.group}</dt>
                <dd>{s.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="contact" className="section" aria-labelledby="contact-title">
          <h2 id="contact-title">Contact</h2>
          <p>I'm looking for my next full stack or senior developer role. The fastest way to reach me is email.</p>
          <ul className="contact">
            {contact.email && (
              <li>
                <span className="contact-label">Email</span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
            )}
            {contact.linkedin && (
              <li>
                <span className="contact-label">LinkedIn</span>
                <External href={contact.linkedin}>{contact.linkedin.replace(/^https?:\/\/(www\.)?/, "")}</External>
              </li>
            )}
            {contact.github && (
              <li>
                <span className="contact-label">GitHub</span>
                <External href={contact.github}>{contact.github.replace(/^https?:\/\//, "")}</External>
              </li>
            )}
            {contact.resume && (
              <li>
                <span className="contact-label">Resume</span>
                <a href={contact.resume} download>
                  Download PDF
                </a>
              </li>
            )}
          </ul>
        </section>

        <footer className="footer">
          <p className="muted">
            © {year} {site.name}. Built with Next.js.
          </p>
        </footer>
      </main>
    </div>
  );
}
