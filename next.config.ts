import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Fully static export: `next build` emits a portable `out/` directory
  // that can be hosted on Vercel, Netlify, GitHub Pages, or any web server.
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  // Keeps the build root inside this project even when a lockfile exists in a
  // parent folder (for example a Documents or home directory).
  outputFileTracingRoot: path.join(__dirname),
  images: {
    // Static export cannot run the Next.js image optimisation server,
    // so images are served as-is. `sizes`/`priority` still control
    // responsive layout, lazy loading and fetch priority in the markup.
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;