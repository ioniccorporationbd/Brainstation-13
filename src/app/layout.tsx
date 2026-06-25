import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/layout_Components/navbar/Navbar";
import Footer from "@/layout_Components/footer";

export const metadata: Metadata = {
  title: "Brain Station 23 Navbar",
  description: "Brain Station 23 inspired responsive navbar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-white text-[#050b18] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
