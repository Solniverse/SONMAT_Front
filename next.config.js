/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['storage.googleapis.com'],
  },
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = nextConfig;
