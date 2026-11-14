"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/LanguageProvider";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type BlockchainEnterpriseItem = {
  tab: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  image: string;
};

const enterpriseItems: BlockchainEnterpriseItem[] = [
  {
    tab: "Audit Trail",
    title: "Blockchain Audit Trail",
    description:
      "We implement secure audit trails that track every transaction and action end-to-end from Web2 to Web3, giving organizations full transparency, accountability, and a reliable record for audits and compliance.",
    buttonText: "Schedule a Demo",
    buttonHref: "/schedule-a-call",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    tab: "DAO",
    title: "DAO Governance Platform",
    description:
      "We build DAO governance systems that help organizations manage proposals, voting, treasury actions, contributor permissions, and transparent decision-making through secure blockchain-based workflows.",
    buttonText: "Explore DAO",
    buttonHref: "/schedule-a-call",
    image:
      "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1200&auto=format&fit=crop",
  },
  {
    tab: "Cross Border Settlement",
    title: "Cross Border Blockchain Settlement",
    description:
      "We enable fast, transparent, and secure cross-border settlement using blockchain infrastructure that reduces reconciliation delays, improves transaction visibility, and supports enterprise-grade financial operations.",
    buttonText: "Start Settlement Pilot",
    buttonHref: "/schedule-a-call",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    tab: "Privacy Preserving DeFi",
    title: "Privacy Preserving DeFi",
    description:
      "We design privacy-first DeFi infrastructure that protects sensitive transaction data while enabling compliant digital asset operations, secure liquidity flows, and enterprise-ready decentralized finance services.",
    buttonText: "Discuss DeFi",
    buttonHref: "/schedule-a-call",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    tab: "AI Financial Guardian",
    title: "AI Financial Guardian",
    description:
      "We integrate AI with blockchain monitoring to detect suspicious activity, analyze risk patterns, automate compliance checks, and provide intelligent financial protection for Web3 and enterprise ecosystems.",
    buttonText: "Book a Demo",
    buttonHref: "/schedule-a-call",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function BlockchainEnterpriseSection() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = enterpriseItems[activeIndex];

  return (
    <section className="w-full bg-white pb-[56px] text-[#0a0a0a] md:pb-[104px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Industry Solutions")}</p>

          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Blockchain for Enterprise")}</h2>

          <p className="mt-4 text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">{t("Our blockchain and Web3 solutions help financial institutions reduce risk, increase transparency, and operate with confidence — from secure transactions and real-time visibility to automated compliance and smarter decision-making.")}</p>
        </div>

        <div className="mx-auto mt-10 flex max-w-[1000px] flex-wrap items-center justify-center gap-2 rounded-2xl border border-[#ececec] bg-white p-2">
          {enterpriseItems.map((item, index) => (
            <button
              key={item.tab}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-full px-4 py-2.5 text-[13px] font-bold leading-none transition-colors duration-300 ${
                activeIndex === index
                  ? "bg-[#c91f28] text-white"
                  : "bg-transparent text-[#565656] hover:bg-[#f7f7f7] hover:text-[#0a0a0a]"
              }`}
            >
              {t(item.tab)}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-[1100px] rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-8 md:px-12 md:py-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <h3 className="text-[24px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#0a0a0a] md:text-[32px]">
                {t(activeItem.title)}
              </h3>

              <p className="mt-4 max-w-[500px] text-[15.5px] font-medium leading-[1.65] text-[#565656] md:text-[16.5px]">
                {t(activeItem.description)}
              </p>

              <Link
                href={activeItem.buttonHref}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#c91f28] px-7 py-3.5 text-[14px] font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
              >
                {t(activeItem.buttonText)}
                <ArrowRight size={15} strokeWidth={2.2} />
              </Link>
            </div>

            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#ececec] bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
