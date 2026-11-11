import {
  BadgeCheck,
  Building2,
  Globe2,
  Layers3,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

const cards = [
  {
    title: "Privacy-first data handling",
    description: "Privacy and protection built into every stage of data handling.",
    icon: ShieldCheck,
  },
  {
    title: "Process-driven quality",
    description: "Structured development processes, reviews and release standards.",
    icon: BadgeCheck,
  },
  {
    title: "Global delivery network",
    description: "Teams across our offices in the USA and Europe.",
    icon: Globe2,
  },
  {
    title: "Regulatory-aware engineering",
    description: "Architected around PCI DSS, OWASP and other compliance requirements.",
    icon: Building2,
  },
  {
    title: "Peak-load readiness",
    description: "Event-driven design and load testing for high transaction volumes.",
    icon: Layers3,
  },
  {
    title: "Infrastructure safety",
    description: "Secure data centres, strict access controls and encrypted traffic.",
    icon: LockKeyhole,
  },
];

export default function FintechSecurityReliabilitySection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-9 md:px-10 md:py-11">
          <div className="max-w-[760px]">
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
              Enterprise trust layer
            </p>
            <h2 className="mt-3 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">
              Security, compliance and reliability from day one
            </h2>
            <p className="mt-3 text-[15px] leading-[1.7] text-[#55585e]">
              Fintech products demand security standards, regulatory awareness,
              enterprise infrastructure and disciplined delivery.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card.title}
                className="group flex h-full flex-col rounded-xl border border-[#ececec] bg-white p-5 transition-colors duration-200 hover:border-[#c91f28]/50"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                  <card.icon size={19} />
                </span>
                <h3 className="mt-4 text-[15.5px] font-semibold leading-[1.35] text-black">{card.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-[1.65] text-[#55585e]">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
