import type { Metadata } from "next";
import { site } from "@/content/site";

// /resume/ was a temporary placeholder. It now forwards to the resume PDF so any shared links keep working.
export const metadata: Metadata = {
  title: `Resume | ${site.name}`,
  robots: { index: false, follow: true },
};

export default function ResumeRedirect() {
  const href = site.contact.resume;
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${href}`} />
      <p style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
        Opening the resume… If nothing happens, <a href={href}>download it here</a>.
      </p>
    </>
  );
}
