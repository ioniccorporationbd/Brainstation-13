import Link from "next/link";
import {
  BadgeCheck,
  ChartNetwork,
  FileSearch,
  Fingerprint,
  Network,
  Plane,
  ScrollText,
  Settings2,
} from "lucide-react";

const blockchainInfrastructureServices = [
  {
    title: "Smart Contract Audit Services",
    description:
      "We provide smart contract audit services to identify security risks, logic flaws, and gas inefficiencies using static and dynamic analysis",
    icon: FileSearch,
  },
  {
    title: "Blockchain Identity Management",
    description:
      "We design blockchain identity management systems using decentralized identifiers (DIDs)",
    icon: Fingerprint,
  },
  {
    title: "Private Blockchain Development",
    description:
      "As a private blockchain development company, we build permissioned & permissionless blockchain infrastructures that organizations can fully control and operate independently.",
    icon: Network,
  },
  {
    title: "Web3 Development Services",
    description:
      "Our web3 development services cover end-to-end infrastructure that integrates seamlessly with existing business processes and digital platforms.",
    icon: ChartNetwork,
  },
  {
    title: "DevOps Managed Services",
    description:
      "We provide ongoing DevOps support to ensure Web3 platforms remain stable, secure, and performant.",
    icon: Settings2,
  },
  {
    title: "Proof-of-Concept & Pilot Programs",
    description:
      "We help organizations validate Web3 ideas quickly through structured proof-of-concept and pilot implementations.",
    icon: Plane,
  },
  {
    title: "Blockchain Data Analytics",
    description:
      "We transform blockchain data analytics into actionable insights to support better business and operational decisions.",
    icon: ScrollText,
  },
  {
    title: "Blockchain Certified Professionals",
    description:
      "Hire blockchain consultants and dedicated blockchain developers to transform enterprise adoption from concept to operational reality.",
    icon: BadgeCheck,
  },
];

export default function BlockchainInfrastructureSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[96px] text-[#11182f]">
      <div className="mx-auto max-w-[970px]">
        <h2 className="mb-[66px] text-[38px] font-light leading-[1.1] tracking-[-0.065em] text-[#11182f] md:text-[44px]">
          Looking to Create Blockchain Infrastructure?
        </h2>

        <div className="grid grid-cols-1 gap-y-[46px] md:grid-cols-2 lg:grid-cols-3">
          {blockchainInfrastructureServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className={`min-h-[210px] px-[26px] ${
                  index % 3 !== 0 ? "lg:border-l lg:border-[#dceaf3]" : ""
                } ${index % 2 !== 0 ? "md:border-l md:border-[#dceaf3] lg:border-l" : ""}`}
              >
                <Icon
                  size={46}
                  strokeWidth={1.55}
                  className="mb-[22px] text-[#4fa0d1]"
                />

                <h3 className="mb-[20px] text-[24px] font-normal leading-[1.28] tracking-[-0.055em] text-[#050b18]">
                  {service.title}
                </h3>

                <p className="max-w-[280px] text-[15.5px] font-medium leading-[1.45] tracking-[-0.035em] text-[#42637a]">
                  {service.description}
                </p>
              </div>
            );
          })}

          <div className="flex min-h-[220px] items-center justify-center px-[26px] md:border-l md:border-[#dceaf3] lg:border-l">
            <div className="flex h-[220px] w-full max-w-[280px] flex-col items-center justify-center rounded-[7px] bg-[#243f5a] px-8 text-center text-white">
              <h3 className="text-[18px] font-bold leading-[1.4] tracking-[-0.04em] text-white">
                Looking for Certified <br />
                Blockchain Developers?
              </h3>

              <Link
                href="/contact-us"
                className="mt-6 inline-flex rounded-full bg-[#ffab2e] px-5 py-3 text-[13px] font-bold text-black transition hover:bg-[#ffc15a]"
              >
                Let&apos;s Talk
              </Link>
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