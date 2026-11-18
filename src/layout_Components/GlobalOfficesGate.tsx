"use client";

import { usePathname } from "next/navigation";
import GlobalOfficesSection from "./GlobalOfficesSection";

/**
 * Renders the shared Global Offices section on every route except the ones
 * listed in HIDDEN_ROUTES. The shared component itself is untouched.
 */
const HIDDEN_ROUTES = ["/qa-testing-and-automation"];

// Industries Mega Menu pages follow the homepage typography scale.
const INDUSTRY_ROUTES = new Set([
  "/automotive",
  "/e-commerce",
  "/education",
  "/fintech",
  "/non-profit",
  "/pharma",
  "/real-estate",
  "/retail",
  "/software-ites",
  "/startup",
  "/telecom",
  "/industries",
]);

// Services Mega Menu pages follow the homepage typography scale.
const SERVICES_ROUTES = new Set([
  "/3d-modeling-services",
  "/services",
  "/enterprise-grade-security",
  "/adobe-experience-manager",
  "/banking-solutions",
  "/blockchain-development",
  "/business-intelligence",
  "/cloud-solutions",
  "/cyber-security",
  "/data-engineering",
  "/data-migration",
  "/data-science-business-intelligence",
  "/digital-transformation",
  "/ecommerce-development",
  "/erp-development",
  "/field-force-automation",
  "/game-studio",
  "/insurtech",
  "/lms-development",
  "/managed-service",
  "/ml-ai-development",
  "/mvp-development",
  "/qa-testing-and-automation",
  "/sharepoint-services",
  "/shopify-services",
  "/staff-augmentation",
  "/technology-consulting",
  "/web-mobile-app-development",
]);

export default function GlobalOfficesGate() {
  const pathname = usePathname();

  if (HIDDEN_ROUTES.includes(pathname ?? "")) {
    return null;
  }

  return (
    <div data-global-offices>
      <GlobalOfficesSection compact={pathname === "/" || SERVICES_ROUTES.has(pathname ?? "") || INDUSTRY_ROUTES.has(pathname ?? "")} />
    </div>
  );
}
