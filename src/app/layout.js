import { M_PLUS_1_Code, Outfit } from "next/font/google";
import "./globals.css";
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
  openGraph: {
    title: "Lenzro",
    description: "The operating system for modern businesses and startups",
    url: "https://lenzro.com/",
    siteName: "Lenzro",
    images: [
      {
        url: "/window.svg",
        width: 1200,
        height: 630,
        alt: "Lenzro Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lenzro",
    description: "The operating system for modern businesses and startups",
    site: "@lenzro",
    creator: "@lenzro",
    images: ["/window.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mplusone.variable} antialiased`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CookieConsent />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
