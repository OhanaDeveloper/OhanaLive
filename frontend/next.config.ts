import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      { source: '/resources', destination: '/toolkit', permanent: true },
      { source: '/resources/:path*', destination: '/toolkit/:path*', permanent: true },
      { source: '/give', destination: '/support', permanent: true },
      { source: '/donate', destination: '/support', permanent: true },
      { source: '/support-us', destination: '/support', permanent: true },
    ]
  },
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
