import Footer from "@/components/layouts/footer";
import ThemeProvider from "@/context/theme";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/layouts/header";
import { aeonik, helvetica } from "../lib/fonts";
import { cn } from "../lib/utils";
import "../styles/globals.scss";

export const metadata = {
  title: "Home || Techchefz",
  description:
    "TechChefz Digital (TCZ Digital Private Ltd) is a new breed of innovative digital transformation agency, redefining storytelling for an always-on world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(aeonik.variable, helvetica.variable)}>
        <ThemeProvider>
          <Header />
          <main className="main-style">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
