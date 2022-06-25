/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')


const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/bee.js",
        destination: "https://cdn.splitbee.io/sb.js",
      },
      {
        source: "/_hive/:slug",
        destination: "https://hive.splitbee.io/:slug",
      },
    ];
  },
  pwa: {
    dest: 'public'
  }

}

module.exports = withPWA(nextConfig);
