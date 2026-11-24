import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";
import { pageMetadata } from "@/i18n/seo";

import BankingFinancialHeroSection from "./BankingFinancialHeroSection";
import BankingFinancialIntroSection from "./BankingFinancialIntroSection";
import BankingFinancialServicesSection from "./BankingFinancialServicesSection";
import BankingFinancialTechnologiesSection from "./BankingFinancialTechnologiesSection";
import BankingFinancialIndustriesSection from "./BankingFinancialIndustriesSection";
import BankingFinancialClientsSection from "./BankingFinancialClientsSection";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return pageMetadata({
    route: "/services/banking-solutions",
    title: t("Banking Solutions | Magnetic Solution Limited"),
    description: t("Customized banking and financial software solutions — retail and corporate internet banking, mobile banking, card services, automation, security and cloud infrastructure."),
  });
}

export default async function BankingSolutionsPage() {
  const { t } = await getTranslator();
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
