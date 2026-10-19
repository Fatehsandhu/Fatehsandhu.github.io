import type { ReactNode } from "react";
import { site } from "@/content/site";
import { terminal, type Commit } from "@/content/terminal";
import { EditorWindow } from "./EditorWindow";
import { DotNav } from "./DotNav";

const nav = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

/** Section heading that reads as a plain name to screen readers and a command on screen. */
function Command({ id, name, cmd }: { id: string; name: string; cmd: string }) {
  return (
    <h2 id={`${id}-title`} className="t-h2">
      <span className="sr-only">{name}</span>
      <span aria-hidden="true">
        <span className="t-prompt">$ </span>
        {cmd}
      </span>
    </h2>
  );
}

function Block({ file, cmd, children }: { file: string; cmd: string; children: ReactNode }) {
  return (
    <div className="t-block">
      <p className="t-block-cmd" aria-hidden="true">
        <span className="t-muted">{file} ~ </span>
        <span className="t-prompt">$ </span>
        {cmd}
      </p>
      {children}
    </div>
  );
}

function CommitEntry({ c, head }: { c: Commit; head?: boolean }) {
  return (
    <li className="t-commit">
      <p className="t-commit-ref" aria-hidden="true">
        <span className="t-amber">commit {c.hash}</span>
        {head && <span className="t-head"> (HEAD → current)</span>}
      </p>
      <h3>{c.title}</h3>
      <p className="t-commit-meta">{c.meta}</p>
      {c.body && <p>{c.body}</p>}
      <ul className="t-tags" aria-label="Tags">
        {c.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </li>
  );
}

function External({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export function TerminalPage() {
  const { contact } = site;
  const year = new Date().getFullYear();
  // One group per line reads better than JSON.stringify's one-item-per-line output.
  const skillsJson =
    "{\n" +
    site.skills
      .map((s) => `  "${s.group.toLowerCase().replace(/\s+/g, "_")}": ${JSON.stringify(s.items).replace(/","/g, '", "')}`)
      .join(",\n") +
    "\n}";

  return (
    <div className="t-root">
      <a className="t-skip" href="#main">
        Skip to content
      </a>
      <DotNav items={nav} />

      <main id="main" className="t-wrap">
        {/* ---------- Hero ---------- */}
        <section id="top" className="t-hero" aria-labelledby="t-name">
          <div className="t-hero-copy">
            <p className="t-pill">
              <span className="t-live" aria-hidden="true" />
              fateh@toronto:~ <span className="t-muted">·</span> {terminal.status}
            </p>
            <div className="t-intro-row">
              {terminal.photo && (
                <img
                  className="t-hero-photo"
                  src={terminal.photo}
                  alt={`Photo of ${site.name}`}
                  width={132}
                  height={132}
                  fetchPriority="high"
                />
              )}
              <h1 id="t-name" className="t-name">
                <span className="t-hello">Hi, I&apos;m</span>
                {site.name}
              </h1>
            </div>
            <p className="t-role">
              <span className="t-amber">&lt;FullStackDeveloper /&gt;</span>{" "}
              <span className="t-muted">{"// "}</span>
              {terminal.tagline}
            </p>
            <p className="t-intro">{site.intro}</p>
            <div className="t-actions">
              {contact.resume && (
                <a className="t-btn t-btn-primary" href={contact.resume} download>
                  Download resume
                </a>
              )}
              {contact.github && (
                <a className="t-btn" href={contact.github} target="_blank" rel="noopener noreferrer">
                  View GitHub
                </a>
              )}
              {contact.email && (
                <a className="t-btn" href={`mailto:${contact.email}`}>
                  Email me
                </a>
              )}
            </div>
            <div className="t-modules">
              <span className="t-muted">loaded_modules:</span>
              <ul aria-label="Main technologies">
                {terminal.modules.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          </div>
          <EditorWindow timings={terminal.perfLog} />
        </section>

        {/* ---------- About ---------- */}
        <section id="about" className="t-section" aria-labelledby="about-title">
          <Command id="about" name="About" cmd="cat about.system" />
          <div className="t-about">
            <aside className="t-card" aria-label="Profile">
              {/* The photo lives in the hero; the card uses the monogram so it isn't repeated. */}
              <div className="t-avatar" aria-hidden="true">
                FS
              </div>
              <dl className="t-fields">
                {terminal.profile.map((f) => (
                  <div key={f.key}>
                    <dt>{f.key}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
                <div>
                  <dt>status</dt>
                  <dd className="t-green">
                    <span className="t-live" aria-hidden="true" /> {terminal.status}
                  </dd>
                </div>
              </dl>
            </aside>
            <div className="t-blocks">
              <Block file="profile.log" cmd="whoami">
                <p>{terminal.whoami}</p>
              </Block>
              <Block file="profile.log" cmd="cat focus.txt">
                <p>{terminal.focus}</p>
              </Block>
              <Block file="profile.log" cmd="cat strengths.txt">
                <ul className="t-checks">
                  {terminal.strengths.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </Block>
            </div>
          </div>
        </section>

        {/* ---------- Experience ---------- */}
        <section id="experience" className="t-section" aria-labelledby="experience-title">
          <Command id="experience" name="Experience" cmd="git log --stat career" />
          <ol className="t-log">
            {terminal.commits.map((c, i) => (
              <CommitEntry key={c.hash} c={c} head={i === 0} />
            ))}
            <CommitEntry c={terminal.education} />
          </ol>
        </section>

        {/* ---------- Projects ---------- */}
        <section id="projects" className="t-section" aria-labelledby="projects-title">
          <Command id="projects" name="Projects" cmd="ls -la ~/projects" />
          <ul className="t-projects">
            {site.projects.map((p) => (
              <li key={p.name} className="t-project">
                <div className="t-project-head">
                  <h3>{p.url ? <External href={p.url}>{p.name}</External> : p.name}</h3>
                  <span className="t-badge">{p.status}</span>
                </div>
                <p>{p.summary}</p>
                <ul className="t-checks">
                  {p.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <ul className="t-tags" aria-label="Built with">
                  {p.stack.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- Skills ---------- */}
        <section id="skills" className="t-section" aria-labelledby="skills-title">
          <Command id="skills" name="Skills" cmd="cat skills.json" />
          <pre className="t-json">
            <code>{skillsJson}</code>
          </pre>
        </section>

        {/* ---------- Contact ---------- */}
        <section id="contact" className="t-section" aria-labelledby="contact-title">
          <Command id="contact" name="Contact" cmd="./contact.sh" />
          <p className="t-lead">I&apos;m looking for my next full stack or senior developer role. Email is the fastest way to reach me.</p>
          <ul className="t-contact">
            {contact.email && (
              <li>
                <span className="t-muted">email</span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
            )}
            {contact.linkedin && (
              <li>
                <span className="t-muted">linkedin</span>
                <External href={contact.linkedin}>{contact.linkedin.replace(/^https?:\/\/(www\.)?/, "")}</External>
              </li>
            )}
            {contact.github && (
              <li>
                <span className="t-muted">github</span>
                <External href={contact.github}>{contact.github.replace(/^https?:\/\//, "")}</External>
              </li>
            )}
            {contact.resume && (
              <li>
                <span className="t-muted">resume</span>
                <a href={contact.resume} download>
                  resume.pdf
                </a>
              </li>
            )}
          </ul>
        </section>

        <footer className="t-footer">
          <p className="t-muted">
            <span aria-hidden="true">while (alive) {"{ ship(); }"} · </span>© {year} {site.name}
          </p>
        </footer>
      </main>
    </div>
  );
}
