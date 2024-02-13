/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["plus.unsplash.com", "images.unsplash.com", "122.176.75.250"],
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
