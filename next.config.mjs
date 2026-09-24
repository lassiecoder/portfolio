/** @type {import('next').NextConfig} */

// GitHub Pages serves this site from https://lassiecoder.github.io/portfolio/
// (a subpath), while Vercel serves it from https://lassiecoder.com/ (the
// domain root). GITHUB_ACTIONS is only set to "true" by GitHub's runners, so
// this keeps the Vercel build untouched and only prefixes GitHub Pages builds.
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repo = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.replace(/.*?\//, "")
  : "portfolio";

const basePath = isGithubActions ? `/${repo}` : "";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  // Exposed to client code (see src/lib/basePath.ts) because next/image with
  // images.unoptimized doesn't auto-prefix raw string `src`s with basePath.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    domains: [
      "github.com",
      "user-images.githubusercontent.com",
      "assets.aceternity.com",
      "i.ytimg.com"
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/lassiecoder/**"
      }
    ]
  }
};

export default nextConfig;
