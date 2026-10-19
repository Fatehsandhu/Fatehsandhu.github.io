import type { Metadata } from "next";
import { site } from "@/content/site";
import { TerminalPage } from "@/components/v2/TerminalPage";
import "@/components/v2/terminal.css";

// Preview of a terminal-style redesign. Kept out of search results until it replaces the homepage.
export const metadata: Metadata = {
  title: `${site.name} | Full stack developer`,
  robots: { index: false, follow: false },
};

export default function V2() {
  return <TerminalPage />;
}
