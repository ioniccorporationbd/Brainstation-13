import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import {
  BadgeDollarSign,
  Blocks,
  FileCheck2,
  Landmark,
  ScrollText,
  ShoppingCart,
} from "lucide-react";

const services = [
  {
    title: "Real time Settlement",
    description:
      "We deliver a blockchain reconciliation platform that acts as a single source of truth across B2B and B2G systems—eliminating manual reconciliation, reducing audit overhead, and resolving disputes automatically through shared ledger verification.",
    icon: BadgeDollarSign,
  },
  {
    title: "AI blockchain integration",
    description:
      "Our AI powered blockchain solutions integrate agentic AI with on-chain systems to validate transactions, optimize liquidity, and monitor risk in real time—turning passive infrastructure into intelligent, self-optimizing operations.",
    icon: Blocks,
  },
  {
    title: "Blockchain Reconciliation Platform",
    description:
      "We provide blockchain-powered reconciliation services designed to simplify audits, ensure data integrity, and support regulatory compliance.",
    icon: ScrollText,
  },
  {
    title: "On-chain Blockchain Compliance",
    description:
      "We provide an always-on blockchain compliance layer that evaluates every transaction before execution, enabling automated AML controls, privacy-preserving KYC, fraud detection, and audit-ready financial operations.",
    icon: FileCheck2,
  },
  {
    title: "Privacy Onchain Network for B2B & B2G",
    description:
      "We design privacy preserving enterprise blockchain networks using zero-knowledge verification, allowing organizations to leverage public blockchain efficiency without exposing sensitive business data, trade volumes, or partner relationships.",
    icon: Landmark,
  },
  {
    title: "RWA tokenization",
    description:
      "We enable real world asset tokenization by transforming physical and financial assets into programmable, traceable digital instruments—unlocking liquidity, enabling fractional ownership, and supporting compliant secondary markets.",
    icon: ShoppingCart,
  },
];

export default async function BlockchainCapabilitySection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white pb-[56px] max-sm:pb-7 text-[#0a0a0a] md:pb-[104px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:text-center">{t("Capabilities")}</p>

          <h2 className="max-sm:mx-auto max-sm:text-center text-[#0a0a0a] font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("From Blockchain to Capability")}</h2>

          <p className="mt-4 text-[15px] font-medium leading-[1.6] text-[#52525B] md:text-[16px] text-pretty">{t("Six capability areas across settlement, compliance and tokenized assets.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-7 max-sm:p-4 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={20} strokeWidth={2.1} />
                </span>

                <h3 className="mt-5 text-[#0a0a0a] font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px]">
                  {t(service.title)}
                </h3>

                <p className="mt-3 text-[14.5px] font-medium leading-[1.6] text-[#52525B] text-pretty">
                  {t(service.description)}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-6 flex max-w-[420px] flex-col items-center rounded-2xl border border-[#ececec] bg-[#fafafa] px-8 py-10 max-sm:py-8 text-center">
          <h3 className="text-[#0a0a0a] font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px]">{t("Have something specific in mind?")}</h3>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#c91f28] px-7 py-3.5 text-[14px] font-bold text-white transition duration-300 hover:bg-[#a71920]"
          >{t("Let's Talk")}</Link>
        </div>
      </div>
    </section>
  );
}
