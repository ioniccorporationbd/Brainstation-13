import {
  BadgeDollarSign,
  CalendarDays,
  Fingerprint,
  HandCoins,
  Globe2,
  UserRoundCog,
  FileSearch,
} from "lucide-react";

type BenefitItem = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const benefits: BenefitItem[] = [
  {
    title: "New Revenue Streams",
    description:
      "Launch multi-use wallets with payments, cards, loyalty, FX, and nano-credit—without building from scratch.",
    icon: BadgeDollarSign,
  },
  {
    title: "Go Live in 6 Weeks",
    description:
      "A proven implementation path plus pre-built modules means you launch months ahead of traditional development.",
    icon: CalendarDays,
  },
  {
    title: "Unlimited Use Cases",
    description:
      "Retail payments, merchant QR/NFC, corporate payouts, salary disbursements, loyalty, rewards—everything runs on one unified ledger.",
    icon: Fingerprint,
  },
  {
    title: "Built-in Compliance & Security",
    description:
      "Identity verification, SIM/device binding, AML, fraud controls, and PCI-DSS-grade protection included by default.",
    icon: HandCoins,
  },
  {
    title: "Scale Without Re-platforming",
    description:
      "Microservices, Kubernetes orchestration, and high-performance data layers let you scale to millions of transactions effortlessly.",
    icon: Globe2,
  },
  {
    title: "Integrate with Anything",
    description:
      "Card networks, core banking, credit bureaus, payment processors, and external ecosystems—out of the box connectivity.",
    icon: UserRoundCog,
  },
  {
    title: "Total Control & Visibility",
    description:
      "Admin consoles, transaction views, logging, monitoring, and observability dashboards keep every action transparent.",
    icon: FileSearch,
  },
];

export default function Wallet23BenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f3f3f3] px-6 py-[105px] text-[#07112b]">
      <div className="pointer-events-none absolute -left-[220px] top-[120px] h-[520px] w-[520px] rounded-full bg-[#08a7df]/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-260px] bottom-[80px] h-[560px] w-[560px] rounded-full bg-[#111E40]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1180px]">
        <div className="max-w-[540px]">
          <span className="inline-flex rounded-full bg-white px-5 py-2 text-[14px] font-bold tracking-[-0.02em] text-[#079ed8] shadow-[0_12px_30px_rgba(17,30,64,0.06)]">
            Wallet23 Benefits
          </span>

          <h2 className="mt-6 text-[42px] font-black leading-[1.08] tracking-[-0.075em] text-[#07112b] md:text-[56px]">
            What You Get With
            <br />
            Wallet23
          </h2>

          <p className="mt-5 max-w-[560px] text-[17px] font-medium leading-[1.55] tracking-[-0.035em] text-[#42637a]">
            A complete white-label wallet foundation designed to help you
            launch faster, scale securely, and unlock new digital revenue.
          </p>
        </div>

        <div className="mt-[72px] grid grid-cols-1 gap-y-9 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            const hasLeftBorder = index % 3 !== 0;

            return (
              <article
                key={item.title}
                className={`group relative min-h-[260px] rounded-[22px] px-0 py-2 transition duration-300 md:px-8 lg:rounded-none ${
                  hasLeftBorder ? "lg:border-l lg:border-[#d9e4ec]" : ""
                }`}
              >
                <div className="mb-8 flex h-[56px] w-[56px] items-center justify-center rounded-[18px] bg-white text-[#08a7df] shadow-[0_14px_40px_rgba(17,30,64,0.06)] transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#08a7df] group-hover:text-white">
                  <Icon size={34} strokeWidth={1.7} />
                </div>

                <h3 className="max-w-[350px] text-[30px] font-black leading-[1.08] tracking-[-0.07em] text-[#07112b] md:text-[36px]">
                  {item.title}
                </h3>

                <p className="mt-6 max-w-[360px] text-[15px] font-medium leading-[1.6] tracking-[-0.025em] text-[#31475c] md:text-[16px]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}