import {
  BadgeCheck,
  CreditCard,
  Globe2,
  IdCard,
  Landmark,
} from "lucide-react";

type InfrastructureItem = {
  title: string;
  icon: React.ElementType;
  bullets: {
    bold: string;
    text: string;
  }[];
};

const infrastructureItems: InfrastructureItem[] = [
  {
    title: "Multi-Asset, Multi-Use",
    icon: BadgeCheck,
    bullets: [
      {
        bold: "Unified Ledger",
        text: "Stored value, multi-currency, loyalty points, nano-loans, and promotions — all in one place.",
      },
      {
        bold: "All Use-Cases",
        text: "Core retail and merchant use cases on one platform.",
      },
      {
        bold: "User Limits",
        text: "User-level daily and monthly transaction limits.",
      },
      {
        bold: "Operational Views",
        text: "Transaction history, filters, downloadable statements.",
      },
    ],
  },
  {
    title: "Cards & Controls",
    icon: CreditCard,
    bullets: [
      {
        bold: "Card Management",
        text: "Virtual card issuance within the wallet.",
      },
      {
        bold: "Loyalty",
        text: "Rewards capabilities alongside core payments.",
      },
      {
        bold: "Corporate Payments",
        text: "Bulk salary disbursement and business tools.",
      },
    ],
  },
  {
    title: "Ecosystem Connectivity",
    icon: Globe2,
    bullets: [
      {
        bold: "Banking & Processors",
        text: "Connect to core banking and payment processors.",
      },
      {
        bold: "Back-Office & APIs",
        text: "Sync with back-office systems and third-party services.",
      },
    ],
  },
  {
    title: "Frictionless Payments",
    icon: Landmark,
    bullets: [
      {
        bold: "Retail Rails",
        text: "P2P, QR/NFC based merchant pay, billers and utilities. PCI DSS compliant.",
      },
      {
        bold: "Remittance Stack",
        text: "FX management, reporting, and analytics.",
      },
      {
        bold: "Bank-Grade Security",
        text: "Built-in compliance and anti-fraud controls.",
      },
    ],
  },
  {
    title: "Onboarding & Risk",
    icon: IdCard,
    bullets: [
      {
        bold: "Identity Verification",
        text: "OCR, face recognition, liveness checks.",
      },
      {
        bold: "Account Security",
        text: "Device and SIM binding to prevent takeover.",
      },
      {
        bold: "Compliance",
        text: "Signature-card management and built-in compliance.",
      },
    ],
  },
];

export default function Wallet23PaymentsInfrastructureSection() {
  return (
    <section className="relative overflow-hidden bg-[#f6f9fc] px-6 py-[110px] text-[#050b18]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-[180px] top-[80px] h-[520px] w-[520px] rounded-full bg-[#0aa7df]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-[220px] bottom-[80px] h-[560px] w-[560px] rounded-full bg-[#111E40]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="max-w-[760px]">
          <span className="inline-flex rounded-full bg-[#eaf6fc] px-5 py-2 text-[14px] font-bold tracking-[-0.02em] text-[#079ed8]">
            Wallet23 Infrastructure
          </span>

          <h2 className="mt-6 max-w-[720px] text-[42px] font-black leading-[1.08] tracking-[-0.075em] text-[#07112b] md:text-[58px] lg:text-[64px]">
            End-to-end Payments Infrastructure
          </h2>

          <p className="mt-6 max-w-[620px] text-[17px] font-medium leading-[1.55] tracking-[-0.035em] text-[#42637a] md:text-[19px]">
            Everything required to launch, operate, secure, and scale a modern
            white-label wallet platform across customers, merchants, agents, and
            enterprise payment workflows.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-[72px] grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {infrastructureItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative min-h-[360px] overflow-hidden rounded-[22px] border border-[#dce8f2] bg-white p-8 shadow-[0_18px_55px_rgba(17,30,64,0.06)] transition duration-300 hover:-translate-y-2 hover:border-[#0aa7df]/60 hover:shadow-[0_28px_80px_rgba(17,30,64,0.12)]"
              >
                {/* Top accent */}
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#0aa7df] via-[#51c5ee] to-[#ffab2e] opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="mb-8 flex h-[62px] w-[62px] items-center justify-center rounded-[18px] bg-[#eaf6fc] text-[#08a7df] transition duration-300 group-hover:bg-[#08a7df] group-hover:text-white">
                  <Icon size={34} strokeWidth={1.7} />
                </div>

                <h3 className="max-w-[340px] text-[30px] font-black leading-[1.08] tracking-[-0.07em] text-[#07112b] md:text-[34px]">
                  {item.title}
                </h3>

                <ul className="mt-7 space-y-4">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet.bold}
                      className="relative pl-5 text-[14px] font-medium leading-[1.5] tracking-[-0.025em] text-[#1b2535] md:text-[15px]"
                    >
                      <span className="absolute left-0 top-[8px] h-1.5 w-1.5 rounded-full bg-[#08a7df]" />
                      <span className="font-black text-black">
                        {bullet.bold}
                      </span>
                      <span className="mx-1 text-[#6a7a89]">—</span>
                      <span className="text-[#374b5f]">{bullet.text}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}

          {/* CTA Card for empty 6th space */}
          <article className="relative min-h-[360px] overflow-hidden rounded-[22px] bg-[#111E40] p-8 text-white shadow-[0_28px_80px_rgba(17,30,64,0.20)]">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#1f69a6]/50" />
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-[#1f69a6]/50" />
            <div className="absolute bottom-0 left-0 h-1 w-full bg-[#ffab2e]" />

            <h3 className="max-w-[320px] text-[32px] font-black leading-[1.08] tracking-[-0.07em]">
              Ready to launch your wallet ecosystem?
            </h3>

            <p className="mt-6 max-w-[320px] text-[15px] font-medium leading-[1.55] text-white/75">
              Build customer wallets, merchant payments, remittance workflows,
              compliance, reporting, and integrations from one platform.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-[#ffab2e] px-7 py-3.5 text-[15px] font-black tracking-[-0.02em] text-black transition duration-300 hover:bg-[#ffc15a]"
            >
              Schedule a Call
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}