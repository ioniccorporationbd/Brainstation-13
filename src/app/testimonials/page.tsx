import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";

import TestimonialsCtaSection from "./TestimonialsCtaSection";
import TestimonialsGridSection from "./TestimonialsGridSection";
import TestimonialsHeroSection from "./TestimonialsHeroSection";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("Testimonials | Magnetic Solution Limited"),
    description: t("First-hand accounts from fintech, education, cloud, commerce and enterprise engagements — original names, designations, companies and quotes."),
  };
}

export default async function TestimonialsPage() {
  const { t } = await getTranslator();
  return (
    <main>
      <TestimonialsHeroSection />
      <TestimonialsGridSection />
      <TestimonialsCtaSection />
    </main>
  );
}
