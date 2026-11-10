"use client";

import { usePathname } from "next/navigation";
import GlobalOfficesSection from "./GlobalOfficesSection";

/**
 * Renders the shared Global Offices section on every route except the ones
 * listed in HIDDEN_ROUTES. The shared component itself is untouched.
 */
const HIDDEN_ROUTES = ["/qa-testing-and-automation"];

export default function GlobalOfficesGate() {
  const pathname = usePathname();

  if (HIDDEN_ROUTES.includes(pathname ?? "")) {
    return null;
  }

  return <GlobalOfficesSection />;
}
