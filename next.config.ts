import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",  // allow ANY hostname
      },
      {
        protocol: "http",
        hostname: "**",  // optional if you also want http
      },
    ],
  },
};

export default nextConfig;
