/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  // scope: '/app',
  // sw: 'service-worker.js',
  //...
});

const nextConfig = withPWA({
  reactStrictMode: true,
  env: {
    DB_HOST: "localhost",
    SUPP_EMAIL: "locped@email.com",
    URL_DEFAULT: "https://locped.vercel.app",
    URL_PACOTES: "https://locped.vercel.app/pacotes/",
    DIEVIN_PORTFOLIO: 'https://dievanodantas.netlify.app'
  },
});

module.exports = nextConfig
