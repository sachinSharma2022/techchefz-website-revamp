import { FooterContainer } from "@/components/layouts/footer/footerContainer";
import ThemeProvider from "@/context/theme";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/layouts/header";
import { aeonik, helvetica } from "../lib/fonts";
import { cn } from "../lib/utils";
import "../styles/globals.scss";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "TechChefz Digital | Humanizing Digital Experiences",
  description: "TechChefz Digital | Humanizing Digital Experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `</script><link rel='preload' href='style.css' as='style' onload="this.onload=null;this.rel='stylesheet'"/><script>`,
          }}
        />
      </Head> */}

      <body className={cn(aeonik.variable, helvetica.variable)}>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        <ThemeProvider>
          <Header />
          <div className={cn("main-style")}>{children}</div>
          <FooterContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
