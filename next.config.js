/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "4.186.56.66",
        port: "4561",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cms-strapi.techchefz.in",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cms-strapi.techchefz.digital",
        port: "",
        pathname: "/**",
      },
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
