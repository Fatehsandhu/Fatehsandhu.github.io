import type { Metadata } from "next";
import { site } from "@/content/site";

// Temporary page behind the "Resume" buttons until public/resume.pdf is added.
// When the PDF is in place, set contact.resume to "/resume.pdf" in site.ts; this page can then be deleted.
export const metadata: Metadata = {
  title: `Resume | ${site.name}`,
  robots: { index: false, follow: true },
};

export default function ResumePage() {
  const { contact } = site;
  return (
    <div className="t-root">
      <main className="t-wrap t-resume">
        <p className="t-resume-cmd" aria-hidden="true">
          <span className="t-prompt">$ </span>open resume.pdf
        </p>
        <h1 className="t-h2">My updated resume is on its way</h1>
        <p className="t-lead">
          I&apos;m putting the finishing touches on a new version. In the meantime, email me and I&apos;ll send a copy
          straight away, or see my experience on LinkedIn.
        </p>
        <div className="t-actions">
          {contact.email && (
            <a className="t-btn t-btn-primary" href={`mailto:${contact.email}?subject=Resume%20request`}>
              Email for a copy
            </a>
          )}
          {contact.linkedin && (
            <a className="t-btn" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          )}
          <a className="t-btn" href="/#experience">
            See experience
          </a>
        </div>
        <p className="t-muted t-resume-back">
          <a href="/">Back to the homepage</a>
        </p>
      </main>
    </div>
  );
}
