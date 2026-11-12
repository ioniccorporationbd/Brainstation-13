import Link from "next/link";
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
    title: "Privacy Preserving Onchain Business Network (B2B & B2G)",
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

export default function BlockchainCapabilitySection() {
  return (
    <section className="w-full bg-white px-6 pb-[88px] text-[#0a0a0a] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Capabilities
          </p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">
            Turning Blockchain Complexity into Business Capability
          </h2>

          <p className="mt-4 text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">
            Six capability areas across settlement, compliance and tokenized
            assets.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={20} strokeWidth={2.1} />
                </span>

                <h3 className="mt-5 text-[16.5px] font-bold leading-[1.35] tracking-[-0.01em] text-[#0a0a0a]">
                  {service.title}
                </h3>

                <p className="mt-3 text-[14.5px] font-medium leading-[1.6] text-[#565656]">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-6 flex max-w-[420px] flex-col items-center rounded-2xl border border-[#ececec] bg-[#fafafa] px-8 py-10 text-center">
          <h3 className="text-[18px] font-bold leading-[1.35] tracking-[-0.01em] text-[#0a0a0a]">
            Have something more specific in mind?
          </h3>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#c91f28] px-7 py-3.5 text-[14px] font-bold text-white transition duration-300 hover:bg-[#a71920]"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </section>
  );
}
