import React from "react";
import { getTranslator } from "@/i18n/server";
import StockPriceCaseStudyHero from "./StockPriceCaseStudyHero";
import StockPriceTrustedBySection from "./StockPriceTrustedBySection";
import StockPriceAboutSection from "./StockPriceAboutSection";
import StockPriceTechnologyCTASection from "./StockPriceTechnologyCTASection";

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
