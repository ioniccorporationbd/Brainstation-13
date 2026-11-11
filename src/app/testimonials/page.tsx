import type { Metadata } from "next";

import TestimonialsCtaSection from "./TestimonialsCtaSection";
import TestimonialsGridSection from "./TestimonialsGridSection";
import TestimonialsHeroSection from "./TestimonialsHeroSection";

export const metadata: Metadata = {
  title: "Testimonials | Magnetic Solution Limited",
  description:
    "First-hand accounts from fintech, education, cloud, commerce and enterprise engagements — original names, designations, companies and quotes.",
};

export default function TestimonialsPage() {
  return (
    <main>
      <TestimonialsHeroSection />
      <TestimonialsGridSection />
      <TestimonialsCtaSection />
    </main>
  );
}
