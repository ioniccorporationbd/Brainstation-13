import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/layout_Components/navbar/Navbar";
import Footer from "@/layout_Components/footer";
import OurOfficesGate from "@/layout_Components/OurOfficesGate";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { getLocale } from "@/i18n/server";
import { HTML_LANG } from "@/i18n/config";
import { SITE_URL, SITE_NAME, OG_IMAGE } from "@/i18n/seo";

const META: Record<"bn" | "en", { title: string; description: string }> = {
  bn: {
    title:
      "ম্যাগনেটিক সলিউশন লিমিটেড | ডিজিটাল ট্রান্সফরমেশন ও এন্টারপ্রাইজ আইটি সার্ভিস",
    description:
      "Enterprise-grade software, staff augmentation, Shopify, blockchain, LMS, AI ও data—এন্টারপ্রাইজ ডিজিটাল ট্রান্সফরমেশন সার্ভিস ম্যাগনেটিক সলিউশন লিমিটেড-এর পক্ষ থেকে।",
  },
  en: {
    title: "Magnetic Solution Limited | Digital Transformation & IT Services",
    description:
      "Enterprise-grade software, staff augmentation, Shopify, blockchain, LMS, AI, data, and digital transformation services.",
  },
};

/** Browser chrome colour (tab / installed-window title bar) — brand red. */
export const viewport: Viewport = {
  themeColor: "#C91F28",
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME[locale],
    title: {
      default: META[locale].title,
      template: `%s`,
    },
    description: META[locale].description,
    // Favicon / app icons come from the file conventions in src/app
    // (favicon.ico, icon.png, apple-icon.png) — all generated from the
    // Magnetic Solution Limited logo mark.
    openGraph: {
      type: "website",
      siteName: SITE_NAME[locale],
      locale: locale === "bn" ? "bn_BD" : "en_US",
      title: META[locale].title,
      description: META[locale].description,
      url: "/",
      images: [{ ...OG_IMAGE, alt: SITE_NAME[locale] }],
    },
    twitter: {
      card: "summary_large_image",
      title: META[locale].title,
      description: META[locale].description,
      images: [OG_IMAGE.url],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/**
 * Sitewide Organization + WebSite structured data. Values mirror the
 * metadata above (same SITE_URL / SITE_NAME / logo) — no invented claims.
 * Locale-specific names only, since the site serves one URL per locale
 * via the magnetic-locale cookie rather than /bn, /en prefixes.
 */
function SiteStructuredData({ locale }: { locale: "bn" | "en" }) {
  const logo = `${SITE_URL}${OG_IMAGE.url}`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME[locale],
        url: `${SITE_URL}/`,
        logo: { "@type": "ImageObject", url: logo, width: 1200, height: 630 },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME[locale],
        url: `${SITE_URL}/`,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: HTML_LANG[locale],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      // Static, server-built JSON (no user input) — safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
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
        <SiteStructuredData locale={locale} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
        {/* Bangla font — identical to the reference ionic-main build
            (Noto Serif Bengali, variable wght 100..900, Google Fonts). */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Bengali:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full overflow-x-clip bg-white text-[#050b18] antialiased">
        <LanguageProvider initialLocale={locale}>
          <Navbar />
          {children}
          <OurOfficesGate />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
