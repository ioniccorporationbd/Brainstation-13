import type { MetadataRoute } from "next";

/**
 * Web App Manifest — minimal installable-PWA support only.
 *
 * This file exists for exactly one reason: so Chrome / Edge on desktop can
 * offer "Install Magnetic Solution Limited" and launch the site in its own
 * standalone window against the live (internet-backed) website.
 *
 * Deliberately absent: service worker, offline caching, push notifications,
 * background sync, custom install prompts. Next.js serves this at
 * /manifest.webmanifest and links it from every page automatically.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Magnetic Solution Limited",
    short_name: "Magnetic Solution",
    description:
      "Enterprise-grade software, staff augmentation, Shopify, blockchain, LMS, AI, data, and digital transformation services.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    theme_color: "#C91F28",
    background_color: "#FFFFFF",
    // Generated from the approved Magnetic Solution Limited logo mark
    // (the same artwork behind src/app/icon.png), on the brand-white card.
    // "maskable" variants keep the mark inside the 80% safe-zone circle.
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/maskable-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
