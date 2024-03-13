import { FooterContainer } from "@/components/layouts/footer/footerContainer";
import ThemeProvider from "@/context/theme";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/layouts/header";
import { aeonik, helvetica } from "../lib/fonts";
import { cn } from "../lib/utils";

import "../styles/globals.scss";

export const metadata = {
  title: "TechChefz Digital | Humanizing Digital Experiences",
  description: "TechChefz Digital | Humanizing Digital Experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className={cn(aeonik.variable, helvetica.variable)}>
        <ThemeProvider>
          <Header />
          <div className={cn("main-style")}>{children}</div>
          <FooterContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
