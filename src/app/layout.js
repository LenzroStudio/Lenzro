import { M_PLUS_1_Code, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import CookieConsent from "@/components/shared/CookieConsent";

const outifit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: "400",
});

const mplusone = M_PLUS_1_Code({
  variable: "--font-m-plus-1-code",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lenzro",
  description: "The operating system for modern businesses and startups",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${mplusone.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <CookieConsent />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
