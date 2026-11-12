import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";
import EcommerceHeroSection from "./EcommerceHeroSection";
import EcommerceIntroSection from "./EcommerceIntroSection";
import EcommerceFeaturesSection from "./EcommerceFeaturesSection";
import EcommerceStackSection from "./EcommerceStackSection";
import EcommercePlatformsSection from "./EcommercePlatformsSection";
import EcommerceCtaSection from "./EcommerceCtaSection";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("E-commerce Development | Magnetic Solution Limited"),
    description: t("Headless, composable commerce engineering — storefronts and back ends that load fast, integrate cleanly and scale."),
  };
}

export default async function Page() {
  const { t } = await getTranslator();
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
