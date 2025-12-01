import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    // Allow unoptimized images for external sources on Vercel
    unoptimized: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
