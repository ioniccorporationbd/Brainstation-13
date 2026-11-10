import type { Metadata } from "next";
import ShopifyHeroSection from "./ShopifyHeroSection";
import ShopifySolutionsSection from "./ShopifySolutionsSection";
import ShopifyPlatformsSection from "./ShopifyPlatformsSection";
import ShopifyTestimonialsSection from "./ShopifyTestimonialsSection";
import ShopifyAppsSection from "./ShopifyAppsSection";
import ShopifySuccessStoriesSection from "./ShopifySuccessStoriesSection";

export const metadata: Metadata = {
  title: "Shopify Services | Magnetic Solution Limited",
  description:
    "Shopify app development, storefront design, integrations and conversion optimization for merchants and B2B brands.",
};

export default function ShopifyServicesPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      <ShopifyHeroSection />
      <ShopifySolutionsSection />
      <ShopifyPlatformsSection />
      <ShopifyTestimonialsSection />
      <ShopifyAppsSection />
      <ShopifySuccessStoriesSection />
    </main>
  );
}
