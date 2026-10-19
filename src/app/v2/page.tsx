import type { Metadata } from "next";

// /v2 was the preview address for this design. It now sends visitors to the homepage.
export const metadata: Metadata = {
  title: "Moved",
  robots: { index: false, follow: true },
  alternates: { canonical: "/" },
};

export default function V2Redirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/" />
      <p style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
        This page has moved to <a href="/">the homepage</a>.
      </p>
    </>
  );
}
