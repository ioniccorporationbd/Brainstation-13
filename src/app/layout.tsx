import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/layout_Components/navbar/Navbar";
import Footer from "@/layout_Components/footer";
import GlobalOfficesSection from "@/layout_Components/GlobalOfficesSection";


export const metadata: Metadata = {
  title: "Brain Station 23 | Digital Transformation & IT Services",
  description: "Enterprise-grade software, staff augmentation, Shopify, blockchain, LMS, AI, data, and digital transformation services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full bg-white text-[#050b18] antialiased">
        <Navbar />
        {children}
        <GlobalOfficesSection/>
        <Footer />
      </body>
    </html>
  );
}
