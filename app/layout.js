import ThemeProvider from "@/context/theme";
import { api_Home_Page } from "@/lib/constants";
import { getData } from "@/lib/fetchData";
import "../styles/grid.min.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { aeonik, helvetica } from "../lib/fonts";
import { cn } from "../lib/utils";
import "../styles/globals.scss";
import ChatBotContainer from "@/components/chatBot/chatBotContainer";
import Providers from "@/components/ui/pageTransition/ProgressBarProvider";
import { HotjarSnippet } from "@/lib/hotjar";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/layouts/header"));
const FooterContainer = dynamic(() =>
  import("@/components/layouts/footer/footerContainer")
);
export async function generateMetadata() {
  const data = await getData(api_Home_Page);
 
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TechChefz Digital",
    url: process.env.NEXT_PUBLIC_SITEMAP_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${process.env.NEXT_PUBLIC_SITEMAP_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
  return {
    title: data?.SeoData?.metaTitle,
    description: data?.SeoData?.metaDescription,
    keywords: data?.SeoData?.keywords,
    metaRobots: data?.SeoData?.metaRobots,
    structuredData: data?.SeoData?.structuredData,
    metaViewport: data?.SeoData?.metaViewport,
    canonicalURL: data?.SeoData?.canonicalURL,
    metaSocialTitle: data?.SeoData?.metaSocial?.socialNetwork?.title,
    metaSocialDescription: data?.SeoData?.metaSocial?.socialNetwork?.description,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_STRAPIE_BASE_URL}${data?.SeoData?.metaSocial?.socialNetwork?.image?.data?.attributes?.url}`, // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],

    openGraph: {
      title: data?.SeoData?.metaTitle,
      description: data?.SeoData?.metaDescription,
      url: process.env.NEXT_PUBLIC_SITEMAP_URL,
      type: "website",
      Context: "https://schema.org",
      locale: "en_US",
      siteName: "TechChefz Digital",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_STRAPIE_BASE_URL}${data?.SeoData?.metaImage?.data?.attributes?.url}`, // Must be an absolute URL
          width: 800,
          height: 600,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data?.SeoData?.metaTitle,
      description: data?.SeoData?.metaDescription,
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
        {/* <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GA_ID}');`,
          }} */}
        
        <ThemeProvider>
          <Header />
          <Providers>
            <div className={cn("main-style")}>{children}</div>
            <HotjarSnippet />
          </Providers>
          <ChatBotContainer/>
          <FooterContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
