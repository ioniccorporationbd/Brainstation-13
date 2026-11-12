import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/layout_Components/navbar/Navbar";
import Footer from "@/layout_Components/footer";
import GlobalOfficesGate from "@/layout_Components/GlobalOfficesGate";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { getLocale } from "@/i18n/server";
import { HTML_LANG } from "@/i18n/config";

const META: Record<"bn" | "en", { title: string; description: string }> = {
  bn: {
    title:
      "Magnetic Solution Limited | ডিজিটাল ট্রান্সফরমেশন ও এন্টারপ্রাইজ আইটি সার্ভিস",
    description:
      "Enterprise-grade software, staff augmentation, Shopify, blockchain, LMS, AI ও data—এন্টারপ্রাইজ ডিজিটাল ট্রান্সফরমেশন সার্ভিস Magnetic Solution Limited-এর পক্ষ থেকে।",
  },
  en: {
    title: "Magnetic Solution Limited | Digital Transformation & IT Services",
    description:
      "Enterprise-grade software, staff augmentation, Shopify, blockchain, LMS, AI, data, and digital transformation services.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: META[locale].title,
    description: META[locale].description,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={HTML_LANG[locale]} translate="no" className="h-full">
      <head>
        {/* The site translates itself; browser auto-translation (Chrome/Google
            Translate) rewrites the DOM and would fight the app's locale state. */}
        <meta name="google" content="notranslate" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full overflow-x-clip bg-white text-[#050b18] antialiased">
        <LanguageProvider initialLocale={locale}>
          <Navbar />
          {children}
          <GlobalOfficesGate />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
