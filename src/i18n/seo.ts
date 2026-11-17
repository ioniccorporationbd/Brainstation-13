import type { Metadata } from "next";
import { getLocale } from "./server";
import type { Locale } from "./config";

/**
 * Single source of truth for SEO defaults used by every route's
 * generateMetadata(). Keeps canonical URLs, Open Graph and Twitter cards
 * consistent across all pages and both locales.
 */

/** Override with NEXT_PUBLIC_SITE_URL in the deploy environment. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://magneticsolutionlimited.com"
).replace(/\/+$/, "");

export const SITE_NAME: Record<Locale, string> = {
  bn: "ম্যাগনেটিক সলিউশন লিমিটেড",
  en: "Magnetic Solution Limited",
};

const OG_LOCALE: Record<Locale, string> = { bn: "bn_BD", en: "en_US" };

/** 1200×630 brand card (public/images/brand/magnetic-og.png). */
export const OG_IMAGE = {
  url: "/images/brand/magnetic-og.png",
  width: 1200,
  height: 630,
};

export function absoluteUrl(route: string): string {
  if (!route || route === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${route.startsWith("/") ? route : `/${route}`}`;
}

/**
 * Builds the full metadata block for one page: localized title/description
 * (already containing the "| Magnetic Solution Limited" lockup), canonical
 * URL, Open Graph and Twitter card.
 */
export async function pageMetadata(input: {
  route: string;
  title: string;
  description: string;
}): Promise<Metadata> {
  const locale = await getLocale();
  const url = absoluteUrl(input.route);
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: url },
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      siteName: SITE_NAME[locale],
      locale: OG_LOCALE[locale],
      type: "website",
      images: [{ ...OG_IMAGE, alt: SITE_NAME[locale] }],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [OG_IMAGE.url],
    },
  };
}
