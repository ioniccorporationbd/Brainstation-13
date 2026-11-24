"use client";

import { usePathname } from "next/navigation";
import OurOfficesSection from "./OurOfficesSection";

/**
 * Renders the shared Our Offices section on every route except the ones
 * listed in HIDDEN_ROUTES. The shared component itself is untouched.
 */
const HIDDEN_ROUTES = ["/services/qa-testing-and-automation"];

const RESOURCES_ROUTES = new Set([
  "/about-us",
  "/blog",
  "/career",
  "/case-studies",
  "/contact",
  "/enterprise-grade-security",
  "/investor-relations",
  "/join-as-partner",
  "/media",
  "/partners",
  "/resources",
  "/sustainability",
]);

const PRODUCT_ROUTES = new Set([
  "/cross-border-payments-solution",
  "/digital-banking-software",
  "/digital-lending-credit",
  "/e-wallet-software",
  "/insurance-360",
  "/neuraflow-conversational-ai-agent",
  "/omnizia",
  "/proctoring-pro",
  "/shikkha-chat",
  "/time2publish",
  "/testimonials",
  "/testimonials/anupom-syam",
]);

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
  "/services/3d-modeling-services",
  "/services",
  "/enterprise-grade-security",
  "/services/adobe-experience-manager",
  "/services/banking-solutions",
  "/services/blockchain-development",
  "/services/business-intelligence",
  "/services/cloud-solutions",
  "/services/cyber-security",
  "/services/data-engineering",
  "/services/data-migration",
  "/services/data-science-business-intelligence",
  "/services/digital-transformation",
  "/services/ecommerce-development",
  "/services/erp-development",
  "/services/field-force-automation",
  "/services/game-studio",
  "/services/insurtech",
  "/services/lms-development",
  "/services/managed-service",
  "/services/ml-ai-development",
  "/services/mvp-development",
  "/services/qa-testing-and-automation",
  "/services/sharepoint-services",
  "/services/shopify-services",
  "/services/staff-augmentation",
  "/services/technology-consulting",
  "/services/web-mobile-app-development",
]);

export default function OurOfficesGate() {
  const pathname = usePathname();

  if (HIDDEN_ROUTES.includes(pathname ?? "")) {
    return null;
  }

  return (
    <div data-our-offices>
      <OurOfficesSection compact={
        pathname === "/" ||
        pathname === "/our-offices" ||
        pathname === "/recognitions" ||
        pathname.startsWith("/case-study") ||
        pathname === "/schedule-a-call" ||
        pathname === "/solution-partner/swapno" ||
        SERVICES_ROUTES.has(pathname ?? "") ||
        INDUSTRY_ROUTES.has(pathname ?? "") ||
        PRODUCT_ROUTES.has(pathname ?? "") ||
        RESOURCES_ROUTES.has(pathname ?? "")
      } />
    </div>
  );
}
