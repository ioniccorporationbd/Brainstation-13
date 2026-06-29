import Link from "next/link";
import {
  BadgeDollarSign,
  Blocks,
  FileCheck2,
  Landmark,
  Network,
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
    title: "Privacy Preserving Onchain Business Network(B2B & B2G)",
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
    <section className="relative overflow-hidden bg-[#111E40] px-6 py-[72px] text-white">
      <div className="mx-auto max-w-[980px]">
        <h2 className="mx-auto max-w-[760px] text-center text-[42px] font-light leading-[1.08] tracking-[-0.065em] text-white md:text-[54px]">
          Turning Blockchain Complexity <br />
          into Business Capability.
        </h2>

        <div className="mt-[62px] grid grid-cols-1 gap-[24px] md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="min-h-[285px] rounded-[7px] bg-[#243f5a] px-[24px] py-[26px] text-white"
              >
                <Icon
                  size={36}
                  strokeWidth={1.6}
                  className="mb-[28px] text-white"
                />

                <h3 className="mb-[18px] text-[23px] font-semibold leading-[1.28] tracking-[-0.045em] text-white">
                  {service.title}
                </h3>

                <p className="text-[15.5px] font-medium leading-[1.45] tracking-[-0.035em] text-white">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-[24px] flex min-h-[145px] w-full max-w-[300px] flex-col items-center justify-center rounded-[7px] bg-[#243f5a] px-7 py-7 text-center">
          <h3 className="text-[18px] font-bold leading-[1.35] tracking-[-0.04em] text-white">
            Have something more specific <br />
            in mind?
          </h3>

          <Link
            href="/contact-us"
            className="mt-6 inline-flex rounded-full bg-[#ffab2e] px-5 py-3 text-[13px] font-bold text-black transition hover:bg-[#ffc15a]"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>

      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>
    </section>
  );
}