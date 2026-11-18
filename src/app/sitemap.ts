import type { MetadataRoute } from "next";
import { SITE_URL } from "@/i18n/seo";

/**
 * Every public route under src/app — keep in sync when pages are added.
 * Homepage first, then Service, Industry, Product, Resource and
 * non-navbar pages.
 */
const ROUTES: string[] = [
  "/",
  // Services Mega Menu
  "/3d-modeling-services",
  "/adobe-experience-manager",
  "/banking-solutions",
  "/blockchain-development",
  "/business-intelligence",
  "/case-study",
  "/case-study/digital-wallet",
  "/case-study/safety-at-sea",
  "/cloud-solutions",
  "/cyber-security",
  "/data-engineering",
  "/data-migration",
  "/data-science-business-intelligence",
  "/digital-transformation",
  "/ecommerce-development",
  "/enterprise-grade-security",
  "/erp-development",
  "/field-force-automation",
  "/game-studio",
  "/insurtech",
  "/lms-development",
  "/managed-service",
  "/ml-ai-development",
  "/mvp-development",
  "/qa-testing-and-automation",
  "/services",
  "/sharepoint-services",
  "/shopify-services",
  "/staff-augmentation",
  "/technology-consulting",
  "/web-mobile-app-development",
  // Industries Mega Menu
  "/automotive",
  "/e-commerce",
  "/education",
  "/fintech",
  "/industries",
  "/non-profit",
  "/pharma",
  "/real-estate",
  "/retail",
  "/software-ites",
  "/startup",
  "/telecom",
  // Products Mega Menu
  "/cross-border-payments-solution",
  "/digital-banking-software",
  "/digital-lending-credit",
  "/e-wallet-software",
  "/insurance-360",
  "/neuraflow-conversational-ai-agent",
  "/omnizia",
  "/proctoring-pro",
  "/shikkha-chat",
  "/testimonials",
  "/testimonials/anupom-syam",
  "/time2publish",
  // Resources Mega Menu
  "/about-us",
  "/blog",
  "/career",
  "/case-studies",
  "/contact",
  "/investor-relations",
  "/join-as-partner",
  "/media",
  "/partners",
  "/resources",
  "/sustainability",
  // Non-navbar / other
  "/global-offices",
  "/recognitions",
  "/schedule-a-call",
  "/solution-partner/swapno",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((route) => ({
    url: route === "/" ? `${SITE_URL}/` : `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
