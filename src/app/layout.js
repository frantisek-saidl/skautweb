import Header from "@/components/layout/Header";
import "./globals.css";
import Footer from "@/components/layout/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <html lang="cs" className="scroll-smooth">
        <body>{children}</body>
      </html>
      <Footer />
    </>
  );
}
