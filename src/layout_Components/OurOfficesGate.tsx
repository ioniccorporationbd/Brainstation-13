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
        (pathname ?? "").startsWith("/services") ||
        (pathname ?? "").startsWith("/industries") ||
        PRODUCT_ROUTES.has(pathname ?? "") ||
        RESOURCES_ROUTES.has(pathname ?? "")
      } />
    </div>
  );
}
