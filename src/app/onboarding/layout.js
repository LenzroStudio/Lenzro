import { M_PLUS_1_Code, Outfit } from "next/font/google";
import "../globals.css";


const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: "400",
});

const mplusone = M_PLUS_1_Code({
  variable: "--font-m-plus-1-code",
  subsets: ["latin"],
});

export const metadata = {
  title: "Onboarding",
  description: "Onboarding , Launch your business now",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${mplusone.variable} antialiased`}>
          {children}
      </body>
    </html>
  );
}
