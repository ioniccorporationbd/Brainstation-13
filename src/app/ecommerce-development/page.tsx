import type { Metadata } from "next";
import EcommerceHeroSection from "./EcommerceHeroSection";
import EcommerceIntroSection from "./EcommerceIntroSection";
import EcommerceFeaturesSection from "./EcommerceFeaturesSection";
import EcommerceStackSection from "./EcommerceStackSection";
import EcommercePlatformsSection from "./EcommercePlatformsSection";
import EcommerceCtaSection from "./EcommerceCtaSection";

export const metadata: Metadata = {
  title: "E-commerce Development | Magnetic Solution Limited",
  description:
    "Headless, composable commerce engineering — storefronts and back ends that load fast, integrate cleanly and scale.",
};

export default function Page() {
  return (
    <div>
      <EcommerceHeroSection />
      <EcommerceIntroSection />
      <EcommerceFeaturesSection />
      <EcommerceStackSection />
      <EcommercePlatformsSection />
      <EcommerceCtaSection />
    </div>
  );
}
