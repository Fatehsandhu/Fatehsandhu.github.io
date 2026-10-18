import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Build to plain static files in out/ so the site can be hosted on GitHub Pages.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
