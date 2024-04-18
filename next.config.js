/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: [
      "plus.unsplash.com",
      "images.unsplash.com",
      "flagcdn.com",
      "127.0.0.1",
      "122.176.75.250",
      "cms-strapi.techchefz.in",
      "cms-strapi.techchefz.digital",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NODEMAILER_FROM_EMAIL: "contactus@techchefz.com",
    NODEMAILER_TO_EMAIL: "sales@techchefz.com",
    NODEMAILER_TO_JOB_EMAIL: "joinus@techchefz.com",
    NODEMAILER_PW: "ovps czuv bujv wlwp",
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: "6LevJ7ApAAAAAF5ZRMjbt3ii4S5ZPdrO-ht7vHi_",
    RECAPTCHA_SECRET_KEY: "6LevJ7ApAAAAAJGJYMiS4ozpdGAQ7h7rMeZW3oIm",
    NEXT_PUBLIC_GA_ID: "G-PFWD6G0FVF",
  },
};

module.exports = nextConfig;
