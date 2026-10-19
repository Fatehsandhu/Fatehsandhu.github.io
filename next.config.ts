import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Build to plain static files in out/ so the site can be hosted on GitHub Pages.
  output: "export",
  images: { unoptimized: true },
  // Emit /v2/index.html (not v2.html) so GitHub Pages serves /v2/ cleanly.
  trailingSlash: true,
};

export default nextConfig;
