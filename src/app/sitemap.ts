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
  "/services/3d-modeling-services",
  "/services/adobe-experience-manager",
  "/services/banking-solutions",
  "/services/blockchain-development",
  "/services/business-intelligence",
  "/case-study",
  "/case-study/digital-wallet",
  "/case-study/safety-at-sea",
  "/services/cloud-solutions",
  "/services/cyber-security",
  "/services/data-engineering",
  "/services/data-migration",
  "/services/data-science-business-intelligence",
  "/services/digital-transformation",
  "/services/ecommerce-development",
  "/enterprise-grade-security",
  "/services/erp-development",
  "/services/field-force-automation",
  "/services/game-studio",
  "/services/insurtech",
  "/services/lms-development",
  "/services/managed-service",
  "/services/ml-ai-development",
  "/services/mvp-development",
  "/services/qa-testing-and-automation",
  "/services",
  "/services/sharepoint-services",
  "/services/shopify-services",
  "/services/staff-augmentation",
  "/services/technology-consulting",
  "/services/web-mobile-app-development",
  // Industries Mega Menu
  "/industries/automotive",
  "/industries/e-commerce",
  "/industries/education",
  "/industries/fintech",
  "/industries",
  "/industries/non-profit",
  "/industries/pharma",
  "/industries/real-estate",
  "/industries/retail",
  "/industries/software-ites",
  "/industries/startup",
  "/industries/telecom",
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
  "/our-offices",
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
