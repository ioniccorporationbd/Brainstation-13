import React from "react";
import { getTranslator } from "@/i18n/server";
import StockPriceCaseStudyHero from "./StockPriceCaseStudyHero";
import StockPriceTrustedBySection from "./StockPriceTrustedBySection";
import StockPriceAboutSection from "./StockPriceAboutSection";
import StockPriceTechnologyCTASection from "./StockPriceTechnologyCTASection";

import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/seo";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return pageMetadata({
    route: "/services/business-intelligence",
    title: t("Business Intelligence & AI Analytics Solutions | Magnetic Solution Limited"),
    description: t("Turn raw data into decisions with AI-driven business intelligence, predictive analytics and machine-learning proof-of-concept solutions."),
  });
}


const page = () => {
  return (
    <div>
      <StockPriceCaseStudyHero />
      <StockPriceTrustedBySection />
      <StockPriceAboutSection />
      <StockPriceTechnologyCTASection />
    </div>
  );
};

export default page;
