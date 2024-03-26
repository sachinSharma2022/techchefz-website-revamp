import localFont from "next/font/local";

export const aeonik = localFont({
  display: "swap",
  variable: "--font-primary",
  src: [
    {
      path: "../public/fonts/Aeonik-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Aeonik-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Aeonik-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const helvetica = localFont({
  display: "swap",
  variable: "--font-secondary",
  src: [
    {
      path: "../public/fonts/HelveticaNowDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNowDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNowDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});
