import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Enable modern image formats (AVIF and WebP)
    // Next.js automatically serves the best format supported by the browser
    formats: ['image/avif', 'image/webp'],
    // Allow remote images from your deployed projects
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.vercel.app',
      },
      {
        protocol: 'https',
        hostname: '**.github.io',
      },
    ],
  },
  // Enable general compression
  compress: true,
};

export default nextConfig;
