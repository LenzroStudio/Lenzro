import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";


export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
