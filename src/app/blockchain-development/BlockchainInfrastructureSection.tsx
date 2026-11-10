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
    title: "Blockchain Talent & Consultants",
    description:
      "Hire blockchain consultants and dedicated blockchain developers to transform enterprise adoption from concept to operational reality.",
    icon: BadgeCheck,
  },
];

export default function BlockchainInfrastructureSection() {
  return (
    <section className="w-full bg-white px-6 pb-[88px] text-[#0a0a0a] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[760px]">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Infrastructure
          </p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">
            Looking to Create Blockchain Infrastructure?
          </h2>

          <p className="mt-4 max-w-[620px] text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">
            Audit, identity, private networks and managed operations — the
            building blocks teams ask for most.
          </p>
        </div>

        <div className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {blockchainInfrastructureServices.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={20} strokeWidth={2.1} />
                </span>

                <h3 className="mt-5 text-[15.5px] font-bold leading-[1.35] tracking-[-0.01em] text-[#0a0a0a]">
                  {service.title}
                </h3>

                <p className="mt-3 text-[14px] font-medium leading-[1.6] text-[#565656]">
                  {service.description}
                </p>
              </article>
            );
          })}

          <article className="flex h-full flex-col justify-center rounded-2xl border border-[#ececec] bg-[#fafafa] p-6 text-center">
            <h3 className="text-[16.5px] font-bold leading-[1.35] tracking-[-0.01em] text-[#0a0a0a]">
              Looking for Dedicated Blockchain Developers?
            </h3>

            <Link
              href="/contact-us"
              className="mx-auto mt-5 inline-flex items-center justify-center rounded-full bg-[#c91f28] px-6 py-3 text-[13.5px] font-bold text-white transition duration-300 hover:bg-[#a71920]"
            >
              Let&apos;s Talk
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
