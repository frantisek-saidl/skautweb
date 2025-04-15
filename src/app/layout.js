import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
