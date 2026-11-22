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
import { getTranslator } from "@/i18n/server";

type Reason = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const reasons: Reason[] = [
  {
    title: "Legacy Modernization",
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
    title: "Unique Customer ID",
    description:
      "Accurate customer identification and de-duplication for clearer, more dependable business insights.",
    icon: Fingerprint,
  },
  {
    title: "High-Speed Transfer",
    description:
      "Optimized pipelines for high-performance, high-volume data transfer with minimal downtime.",
    icon: Settings2,
  },
  {
    title: "Centralized Data",
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
    title: "Compliant Delivery",
    description:
      "Security-first, compliance-ready migrations designed around your business requirements.",
    icon: Clock,
  },
  {
    title: "Tailored Business Fit",
    description:
      "Every migration is shaped to your systems so data lands exactly where your business needs it.",
    icon: Plug,
  },
];

export default async function DataMigrationCapabilitiesSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white py-[52px] text-[#0a0a0a] md:py-[104px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:text-center">{t("Why Magnetic")}</p>

          <h2 className="max-sm:mx-auto max-sm:text-center text-[#0a0a0a] font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Why Magnetic Solution Limited")}</h2>

          <p className="mx-auto mt-5 max-w-[640px] text-[15px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B] md:text-[16px] text-pretty">{t("A migration partner that pairs deep technical depth with a process built for accuracy, security, and minimal downtime.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="group flex h-full items-start gap-4 rounded-2xl border border-[#ececec] bg-white p-7 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-[#0a0a0a] text-[17px] font-medium leading-[1.3] tracking-[-0.01em] md:text-[18px]">
                    {t(reason.title)}
                  </p>

                  <p className="mt-2 text-[16px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B] text-pretty md:text-[17px]">
                    {t(reason.description)}
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
