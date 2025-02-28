/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // This allows all external image sources
      },
      {
        protocol: "http",
        hostname: "**", // This allows all external image sources
      },
    ],
    domains: ["apod.nasa.gov", "cdn.nasa.gov"],
  },
};


export default nextConfig;
