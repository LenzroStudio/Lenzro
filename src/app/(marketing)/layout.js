import { M_PLUS_1_Code, Outfit } from "next/font/google";
import Navbar from "@/components/shared/navbar";
import { Footer } from "react-day-picker";

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
      <body className={`${mplusone.variable} antialiased`}>
          <Navbar />
          {children}
          <Footer/>
      </body>
    </html>
  );
}
