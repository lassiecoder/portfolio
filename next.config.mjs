/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: [
      "github.com",
      "user-images.githubusercontent.com",
      "assets.aceternity.com"
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
