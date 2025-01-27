const withBuilderDevTools = require('@builder.io/dev-tools/next')();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverActions: true
  }
});

module.exports = nextConfig;
