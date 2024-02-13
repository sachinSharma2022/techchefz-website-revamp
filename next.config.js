/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["plus.unsplash.com", "images.unsplash.com", "127.0.0.1"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NODEMAILER_FROM_EMAIL: 'manoj.yadav@techchefz.com',
    NODEMAILER_TO_EMAIL: 'khalid406090@gmail.com',
    NODEMAILER_PW:"ucpw vzze prbs wooi"
  },
};

module.exports = nextConfig;
