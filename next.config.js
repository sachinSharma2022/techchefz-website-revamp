/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "plus.unsplash.com",
      "images.unsplash.com",
      "127.0.0.1",
      "122.176.75.250",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NODEMAILER_FROM_EMAIL: "manoj.yadav@techchefz.com",
    NODEMAILER_TO_EMAIL: "khalid406090@gmail.com",
    NODEMAILER_PW: "ucpw vzze prbs wooi",
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: "6Lf9PHIpAAAAADV0YdvKjHZFuq2bNPnTttD8x7JP",
    RECAPTCHA_SECRET_KEY: "6Lf9PHIpAAAAACHATjXYUbLtFJIQtZLoDaaCOWKa",
  },
};

module.exports = nextConfig;
