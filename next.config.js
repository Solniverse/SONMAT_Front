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
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
        exclude: ['/node_modules/'],
      },
    ],
  },
};

module.exports = nextConfig;
