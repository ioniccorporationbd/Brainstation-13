import type { Metadata } from "next";

import BankingFinancialHeroSection from "./BankingFinancialHeroSection";
import BankingFinancialIntroSection from "./BankingFinancialIntroSection";
import BankingFinancialServicesSection from "./BankingFinancialServicesSection";
import BankingFinancialTechnologiesSection from "./BankingFinancialTechnologiesSection";
import BankingFinancialIndustriesSection from "./BankingFinancialIndustriesSection";
import BankingFinancialClientsSection from "./BankingFinancialClientsSection";

export const metadata: Metadata = {
  title: "Banking Solutions | Magnetic Solution Limited",
  description:
    "Customized banking and financial software solutions — retail and corporate internet banking, mobile banking, card services, automation, security and cloud infrastructure.",
};

export default function BankingSolutionsPage() {
  return (
    <main>
      <BankingFinancialHeroSection />
      <BankingFinancialIntroSection />
      <BankingFinancialServicesSection />
      <BankingFinancialTechnologiesSection />
      <BankingFinancialIndustriesSection />
      <BankingFinancialClientsSection />
    </main>
  );
}
