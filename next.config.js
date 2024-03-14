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
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NODEMAILER_FROM_EMAIL: "manoj.yadav@techchefz.com",
    NODEMAILER_TO_EMAIL: "nowsheen.ayoubbhat@techchefz.com",
    NODEMAILER_PW: "ucpw vzze prbs wooi",
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: "6LcmhoQpAAAAAIwjH8R1VFF6bfJW9yXyiUMFPDlF",
    RECAPTCHA_SECRET_KEY: "6LcmhoQpAAAAAHPLccD_GcVT879yK1R6tBG3hzpI",
  },
};

module.exports = nextConfig;
