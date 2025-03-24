import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  metadataBase: new URL("http://localhost:3000"), // Set the base URL for metadata
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  reactStrictMode: true,
  trailingSlash: true,
};

export default nextConfig;
