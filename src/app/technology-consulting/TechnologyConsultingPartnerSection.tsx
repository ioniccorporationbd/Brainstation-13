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
    <section className="bg-white px-6 py-[80px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto max-w-[1240px]">
        {/* Heading */}
        <div className="mx-auto max-w-[820px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Consulting Partnership")}</p>

          <h2 className="text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0a0a0a] sm:text-[34px] lg:text-[40px]">{t("Why Partner with Magnetic Solution Limited?")}</h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[17px]">{t("We help organizations make better technology decisions with practical guidance, proven delivery models, and enterprise-ready support from strategy to execution.")}</p>
        </div>

        {/* Cards - 3 per row for 5 items */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {partnerPoints.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-[18px] font-bold leading-[1.25] tracking-[-0.015em] text-[#0a0a0a]">
                  {t(item.title)}
                </h3>

                <p className="mt-2 text-[14px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656]">
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
