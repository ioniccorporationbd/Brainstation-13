import {
  BadgeCheck,
  Globe2,
  Handshake,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import { getTranslator } from "@/i18n/server";

type PartnerPoint = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const partnerPoints: PartnerPoint[] = [
  {
    title: "Holistic Approach",
    description:
      "We blend business acumen, technical depth, and change management expertise.",
    icon: Layers3,
  },
  {
    title: "Proven Methodology",
    description:
      "Structured frameworks ensure repeatable success and predictable outcomes.",
    icon: BadgeCheck,
  },
  {
    title: "Cross Industry Experience",
    description:
      "HealthTech, FinTech, Pharma, Retail, Manufacturing, and more.",
    icon: Handshake,
  },
  {
    title: "Global Delivery",
    description:
      "On-site, nearshore, and remote consulting models to fit your timeline and budget.",
    icon: Globe2,
  },
  {
    title: "Trusted Advisors",
    description:
      "Seasoned consultants and certified architects with a track record of transformation.",
    icon: ShieldCheck,
  },
];

export default async function TechnologyConsultingPartnerSection() {
  const { t } = await getTranslator();
  return (
    <section className="bg-white py-[52px] max-sm:py-8 text-[#0a0a0a] md:py-[104px]">
      <div className="brand-container">
        {/* Heading */}
        <div className="mx-auto max-w-[820px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:text-center">{t("Consulting Partnership")}</p>

          <h2 className="max-sm:mx-auto max-sm:text-center text-[#0a0a0a] font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Why Partner with Magnetic Solution?")}</h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[15px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B] md:text-[16px] text-pretty">{t("We help organizations make better technology decisions with practical guidance, proven delivery models, and enterprise-ready support from strategy to execution.")}</p>
        </div>

        {/* Cards - 3 per row for 5 items */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {partnerPoints.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-7 max-sm:p-4 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-[#0a0a0a] font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px]">
                  {t(item.title)}
                </h3>

                <p className="mt-2 text-[14.5px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B] text-pretty">
                  {t(item.description)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
