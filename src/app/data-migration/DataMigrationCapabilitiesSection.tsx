import {
  BadgeCheck,
  Clock,
  Database,
  Fingerprint,
  Layers,
  LifeBuoy,
  Plug,
  Settings2,
  ShieldCheck,
  Wand2,
} from "lucide-react";

type Reason = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const reasons: Reason[] = [
  {
    title: "Seamless Legacy Modernization",
    description:
      "Migration from legacy systems to modern, scalable platforms without disrupting day-to-day operations.",
    icon: Layers,
  },
  {
    title: "Trusted, Accurate Data",
    description:
      "Data cleaning, validation, transformation, and deduplication so migrated records stay accurate and reliable.",
    icon: BadgeCheck,
  },
  {
    title: "Unique Customer Identity",
    description:
      "Accurate customer identification and de-duplication for clearer, more dependable business insights.",
    icon: Fingerprint,
  },
  {
    title: "High-Performance Transfer",
    description:
      "Optimized pipelines for high-performance, high-volume data transfer with minimal downtime.",
    icon: Settings2,
  },
  {
    title: "Secure, Centralized Data",
    description:
      "Centralized, secured data foundations that power analytics and confident decision-making.",
    icon: ShieldCheck,
  },
  {
    title: "Deep Domain Expertise",
    description:
      "Complex migrations across finance, healthcare, e-commerce, and enterprise environments.",
    icon: Database,
  },
  {
    title: "Complete End-to-End Support",
    description:
      "Full support across assessment, mapping, migration, validation, and handover.",
    icon: LifeBuoy,
  },
  {
    title: "Proven Tools & Frameworks",
    description:
      "Advanced, battle-tested tooling for fast, accurate, and efficient data transfers.",
    icon: Wand2,
  },
  {
    title: "Secure & Compliant Delivery",
    description:
      "Security-first, compliance-ready migrations designed around your business requirements.",
    icon: Clock,
  },
  {
    title: "Tailored, Business-Ready Fit",
    description:
      "Every migration is shaped to your systems so data lands exactly where your business needs it.",
    icon: Plug,
  },
];

export default function DataMigrationCapabilitiesSection() {
  return (
    <section className="w-full bg-white px-6 py-[80px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Why Magnetic
          </p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">
            Why Magnetic Solution Limited
          </h2>

          <p className="mx-auto mt-5 max-w-[640px] text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[17px]">
            A migration partner that pairs deep technical depth with a process
            built for accuracy, security, and minimal downtime.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="group flex h-full items-start gap-4 rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <div>
                  <h3 className="text-[16px] font-bold leading-[1.35] tracking-[-0.01em] text-[#0a0a0a]">
                    {reason.title}
                  </h3>

                  <p className="mt-2 text-[14.5px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656]">
                    {reason.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
