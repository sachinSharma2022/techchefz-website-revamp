import localFont from "next/font/local";

export const aeonik = localFont({
  display: "swap",
  variable: "--font-primary",
  src: [
    {
      path: "../public/fonts/Aeonik-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Aeonik-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Aeonik-Bold.otf",
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
      path: "../public/fonts/HelveticaNowDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNowDisplay-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNowDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});
