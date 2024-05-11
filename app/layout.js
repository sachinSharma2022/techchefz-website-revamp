//import { FooterContainer } from "@/components/layouts/footer/footerContainer";
import ThemeProvider from "@/context/theme";
import { api_Home_Page } from "@/lib/constants";
import { getData } from "@/lib/fetchData";
import "bootstrap/dist/css/bootstrap.css";
//import Header from "../components/layouts/header";
import { aeonik, helvetica } from "../lib/fonts";
import { cn } from "../lib/utils";
import "../styles/globals.scss";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { HotjarSnippet } from "@/lib/hotjar";
import dynamic from "next/dynamic";
import Providers from "@/components/ui/pageTransition/ProgressBarProvider";
const Header = dynamic(() => import("@/components/layouts/header"));
const FooterContainer = dynamic(() =>
  import("@/components/layouts/footer/footerContainer")
);
export async function generateMetadata() {
  const data = await getData(api_Home_Page);
  return {
    title: data?.SeoData?.Title,
    description: data?.SeoData?.Description,
    '@type': 'WebPage',
    '@context': 'http://schema.org',
    siteName : "TechChefz Digital",
    openGraph: {
      title: data?.SeoData?.Title,
      description: data?.SeoData?.Description,
      url: process.env.NEXT_PUBLIC_SITEMAP_URL,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_STRAPIE_BASE_URL}${data?.SeoData?.Images?.data?.attributes?.url}`, // Must be an absolute URL
          width: 800,
          height: 600,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data?.SeoData?.Title,
      description: data?.SeoData?.Description,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_STRAPIE_BASE_URL}${data?.SeoData?.Images?.data?.attributes?.url}`, // Must be an absolute URL
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className={cn(aeonik.variable, helvetica.variable)}>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        <ThemeProvider>
          <Header />
          <Providers>
            <div className={cn("main-style")}>{children}</div>
            <HotjarSnippet />
          </Providers>

          <FooterContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
