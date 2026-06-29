"use client";

import { useState } from "react";
import Link from "next/link";

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
      "https://img.freepik.com/free-vector/blockchain-technology-security-concept_23-2149164881.jpg",
  },
  {
    tab: "DAO",
    title: "DAO Governance Platform",
    description:
      "We build DAO governance systems that help organizations manage proposals, voting, treasury actions, contributor permissions, and transparent decision-making through secure blockchain-based workflows.",
    buttonText: "Explore DAO",
    buttonHref: "/schedule-a-call",
    image:
      "https://img.freepik.com/free-vector/decentralized-finance-concept-illustration_114360-8532.jpg",
  },
  {
    tab: "Cross Border Blockchain Settlement",
    title: "Cross Border Blockchain Settlement",
    description:
      "We enable fast, transparent, and secure cross-border settlement using blockchain infrastructure that reduces reconciliation delays, improves transaction visibility, and supports enterprise-grade financial operations.",
    buttonText: "Start Settlement Pilot",
    buttonHref: "/schedule-a-call",
    image:
      "https://img.freepik.com/free-vector/gradient-international-money-transfer-illustration_23-2149179376.jpg",
  },
  {
    tab: "Privacy Preserving DeFi",
    title: "Privacy Preserving DeFi",
    description:
      "We design privacy-first DeFi infrastructure that protects sensitive transaction data while enabling compliant digital asset operations, secure liquidity flows, and enterprise-ready decentralized finance services.",
    buttonText: "Discuss DeFi",
    buttonHref: "/schedule-a-call",
    image:
      "https://img.freepik.com/free-vector/cryptocurrency-concept-illustration_114360-7699.jpg",
  },
  {
    tab: "AI Financial Guardian",
    title: "AI Financial Guardian",
    description:
      "We integrate AI with blockchain monitoring to detect suspicious activity, analyze risk patterns, automate compliance checks, and provide intelligent financial protection for Web3 and enterprise ecosystems.",
    buttonText: "Book a Demo",
    buttonHref: "/schedule-a-call",
    image:
      "https://img.freepik.com/free-vector/artificial-intelligence-isometric-flowchart_1284-64808.jpg",
  },
];

export default function BlockchainEnterpriseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = enterpriseItems[activeIndex];

  return (
    <section className="relative overflow-hidden bg-white px-6 py-[94px] text-[#11182f]">
      <div className="mx-auto max-w-[1120px]">
        <div className="mx-auto max-w-[1040px] text-center">
          <h2 className="text-[42px] font-light leading-none tracking-[-0.07em] text-[#11182f] md:text-[48px]">
            Blockchain for Enterprise
          </h2>

          <p className="mx-auto mt-7 max-w-[1020px] text-[18px] font-medium leading-[1.45] tracking-[-0.035em] text-[#42637a]">
            Our Blockchain and Web3 solutions help financial institutions reduce
            risk, increase transparency, and operate with confidence.
            <br className="hidden lg:block" />
            We enable secure transactions, real-time visibility, automated
            compliance, and smarter decision-making through enterprise-
            <br className="hidden lg:block" />
            ready platforms built for scale and trust.
          </p>
        </div>

        <div className="mx-auto mt-[76px] max-w-[870px] rounded-full bg-white p-[10px] shadow-[0_7px_22px_rgba(0,0,0,0.28)]">
          <div className="flex flex-wrap items-center justify-center gap-2 lg:flex-nowrap">
            {enterpriseItems.map((item, index) => (
              <button
                key={item.tab}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-full px-5 py-[10px] text-[14px] font-bold leading-none transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[#5b2ee6] text-white shadow-[0_8px_18px_rgba(91,46,230,0.28)]"
                    : "bg-transparent text-[#11182f] hover:bg-[#f2f5f8]"
                }`}
              >
                {item.tab}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-[54px] max-w-[1060px] rounded-[8px] bg-[#f4f8fc] px-[54px] py-[54px]">
          <div className="grid min-h-[310px] grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1fr]">
            <div>
              <h3 className="text-[34px] font-light leading-[1.08] tracking-[-0.065em] text-[#11182f]">
                {activeItem.title}
              </h3>

              <p className="mt-6 max-w-[475px] text-[18px] font-medium leading-[1.5] tracking-[-0.035em] text-[#11182f]">
                {activeItem.description}
              </p>

              <Link
                href={activeItem.buttonHref}
                className="mt-7 inline-flex rounded-full bg-[#ffab2e] px-6 py-3.5 text-[14px] font-bold text-black transition-all duration-300 hover:bg-[#ffc15a]"
              >
                {activeItem.buttonText}
              </Link>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="h-[310px] w-full max-w-[455px] overflow-hidden rounded-[8px] bg-white">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>
    </section>
  );
}