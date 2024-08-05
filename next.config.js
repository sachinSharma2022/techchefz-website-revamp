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
      "4.186.56.66",
      "cms-strapi.techchefz.in",
      "cms-strapi.techchefz.digital",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  amp: {
    canonicalBase: 'http://localhost:3000/',
    hybrid: true,
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
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "commonCSP",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
      {
        source: "/:all*(svg|jpg|png|css|js|mp4|webp|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
