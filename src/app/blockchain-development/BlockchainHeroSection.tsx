import { getTranslator } from "@/i18n/server";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const keywords = [
  "Smart Contracts",
  "Web3",
  "Tokenization",
  "Settlement",
  "Security Audit",
];

export default async function BlockchainHeroSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white pb-[48px] pt-[56px] text-[#0a0a0a] md:pb-[88px] md:pt-[72px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-5 inline-flex rounded-full bg-[#fdecec] px-4 py-2 text-[13px] font-bold uppercase tracking-normal text-[#c91f28] mx-auto">{t("Blockchain / Web3 Solutions")}</p>

          <h1 className="mx-auto text-center max-w-[620px] font-bold text-[#0a0a0a] text-[clamp(28px,8.387vw,36px)] leading-[1.08] tracking-[-0.035em] sm:text-[40px] md:text-[50px] lg:text-[54px]">{t("Enterprise Blockchain")}</h1>

          <p className="mx-auto text-center mt-6 max-w-[560px] text-[15px] font-medium leading-[1.65] tracking-[-0.01em] text-[#52525B] md:text-[18px]">{t("Decentralized, privacy-preserving systems for reconciliation, settlement and digital assets — from smart contracts to managed infrastructure.")}</p>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center sm:justify-center">
            <Link
              href="/schedule-a-call"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c91f28] px-8 py-4 text-[15px] font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
            >{t("Start a Blockchain Pilot")}<ArrowRight size={16} strokeWidth={2.2} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#c91f28] px-8 py-4 text-[15px] font-bold text-[#c91f28] transition duration-300 hover:bg-[#c91f28] hover:text-white"
            >{t("Talk to Our Team")}</Link>
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-2">
            {keywords.map((word) => (
              <span
                key={word}
                className="rounded-full border border-[#ececec] bg-white px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-normal text-[#52525B]"
              >
                {t(word)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
