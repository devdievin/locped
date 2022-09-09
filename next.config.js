/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_HOST: "localhost",
    SUPP_EMAIL: "locped@email.com",
    URL_DEFAULT: "https://locped.vercel.app",
    URL_PACOTES: "https://locped.vercel.app/pacotes/",
  },
}

module.exports = nextConfig
