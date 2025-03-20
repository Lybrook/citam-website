import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  metadataBase: new URL("http://localhost:3000"), // Set the base URL for metadata
  images: {
    // Configure image optimization for better performance
    domains: ['localhost'],
    // Enable more image formats for better optimization
    formats: ['image/avif', 'image/webp'],
    // Configure image sizes for responsive design
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Configure image quality
    // quality: 80,
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Configure performance optimizations
  // Configure static exports
  // output: 'export',
  // Configure trailing slashes
  trailingSlash: true,
};

export default nextConfig;
