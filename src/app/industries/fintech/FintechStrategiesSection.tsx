import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import { ArrowRight, CreditCard, Landmark, Banknote, Globe2 } from "lucide-react";

const strategies = [
  {
    title: "Smart digital wallet for financial control",
    description: "Wallet architecture, agent networks and cash-in/out flows designed for scale.",
    href: "/products/e-wallet-software",
    icon: CreditCard,
  },
  {
    title: "iBank23: secure digital banking app",
    description: "Account access, transfers, bill pay and onboarding in one mobile experience.",
    href: "/products/digital-banking-software",
    icon: Landmark,
  },
  {
    title: "Digital lending for modern finance",
    description: "Origination, scoring, approval workflows and repayment tracking automated.",
    href: "/products/digital-lending-credit",
    icon: Banknote,
  },
  {
    title: "Cross-border Global Payments",
    description: "Multi-currency wallets, real-time FX and local rail integrations.",
    href: "/products/cross-border-payments-solution",
    icon: Globe2,
  },
];

export default async function FintechStrategiesSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white pb-[56px] max-sm:pb-7 md:pb-[104px]">
      <div className="mx-auto brand-container">
        <div className="max-w-[720px]">
          <p className="text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:text-center">{t("Proven strategies")}</p>
          <h2 className="max-sm:mx-auto max-sm:text-center mt-4 text-black font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("How we solve banking challenges")}</h2>
          <p className="mt-4 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("Approach notes from the products we build, and the problems they solve for financial institutions.")}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {strategies.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex h-full flex-col rounded-xl border border-[#ececec] bg-white p-7 max-sm:p-4 transition-colors duration-200 hover:border-[#c91f28]/50"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                <item.icon size={21} />
              </span>
              <h3 className="mt-5 text-black font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px]">{t(item.title)}</h3>
              <p className="mt-2 flex-1 text-[14.5px] leading-[1.6] text-[#52525B] text-pretty">{t(item.description)}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-bold text-[#c91f28] transition-all duration-200 group-hover:gap-2.5 max-sm:min-h-[44px]">{t("Read more")}<ArrowRight size={15} strokeWidth={2.2} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
