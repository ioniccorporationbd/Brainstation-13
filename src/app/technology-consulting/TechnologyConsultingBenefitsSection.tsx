import { Cpu, Lightbulb, Map, ShieldCheck } from "lucide-react";
import { getTranslator } from "@/i18n/server";

type BenefitCard = {
  title: string;
  points: string[];
  icon: React.ElementType;
};

const benefits: BenefitCard[] = [
  {
    title: "Strategic IT Roadmap",
    points: [
      "Prioritize high-impact initiatives that deliver fast ROI.",
      "Align teams, timelines, budgets, and business outcomes before development.",
    ],
    icon: Map,
  },
  {
    title: "Optimized Architecture",
    points: [
      "Design resilient, future-proof systems that scale with you.",
      "Eliminate waste by consolidating platforms and modernizing the stack.",
    ],
    icon: Cpu,
  },
  {
    title: "Security & Compliance",
    points: [
      "Comprehensive audits uncover vulnerabilities and compliance gaps.",
      "Implement policies, controls, and technologies to safeguard data.",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Accelerated Innovation",
    points: [
      "Evaluate AI/ML, IoT, and blockchain for your specific context.",
      "Rapid proof of concepts validate viability before full investment.",
    ],
    icon: Lightbulb,
  },
];

export default async function TechnologyConsultingBenefitsSection() {
  const { t } = await getTranslator();
  return (
    <section className="bg-white px-6 py-[80px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto max-w-[1240px]">
        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Consulting Advantage")}</p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Key Benefits")}</h2>

          <p className="mx-auto mt-5 max-w-[640px] text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[17px]">{t("Our consulting helps businesses reduce risk, modernize architecture, improve security, and unlock innovation through practical, business-aligned technology decisions.")}</p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-[18px] font-bold leading-[1.25] tracking-[-0.015em] text-[#0a0a0a]">
                  {t(card.title)}
                </h3>

                <ul className="mt-3 space-y-3">
                  {card.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-[14px] font-medium leading-[1.5] tracking-[-0.01em] text-[#565656]"
                    >
                      <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#c91f28]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
