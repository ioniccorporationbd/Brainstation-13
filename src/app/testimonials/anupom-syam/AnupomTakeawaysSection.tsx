import type { ElementType } from "react";
import { getTranslator } from "@/i18n/server";
import { Banknote, Lock, Sparkles, Target, Users, Zap } from "lucide-react";

import TestimonialProvenanceNote from "../TestimonialProvenanceNote";

type Feature = { icon: ElementType; title: string; description: string };

const features: Feature[] = [
  {
    icon: Banknote,
    title: "Senior fintech team",
    description: "Engineers who understood regulated finance from day one.",
  },
  {
    icon: Sparkles,
    title: "AI-assisted delivery",
    description: "Accelerated build without compromising quality.",
  },
  {
    icon: Users,
    title: "Elastic capacity",
    description: "A team that scaled up around key milestones.",
  },
  {
    icon: Target,
    title: "Ownership",
    description: "A partner accountable for outcomes, not tickets.",
  },
  {
    icon: Lock,
    title: "Security-first",
    description: "Compliance built into every sprint.",
  },
  {
    icon: Zap,
    title: "Speed",
    description: "8X faster than the original plan.",
  },
];

const facts = [
  { value: "8X", label: "Faster delivery" },
  { value: "Fintech", label: "Domain" },
  { value: "Founder", label: "Perspective" },
  { value: "Augmentation", label: "Engagement type" },
];

export default async function AnupomTakeawaysSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[820px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("The engagement")}</p>
          <h2 className="mt-4 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("What made the difference")}</h2>
          <div className="mt-5 space-y-4 text-[15.5px] leading-[1.75] text-[#55585e] md:text-[16.5px]">
            <p>{t("The engagement blended senior fintech engineers with AI-assisted delivery, letting a lean founding team ship a production platform without building a large in-house department.")}</p>
            <p>{t("The points below group the qualities highlighted in the testimonial — the things that, in the client’s words, made the difference.")}</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="rounded-xl border border-[#ececec] bg-white p-6 transition-colors duration-200 hover:border-[#c91f28]/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                  <Icon size={20} strokeWidth={1.9} />
                </div>
                <h3 className="mt-4 text-[16.5px] font-bold leading-[1.3] tracking-[-0.01em] text-black">
                  {t(feature.title)}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.65] text-[#55585e]">
                  {t(feature.description)}
                </p>
              </article>
            );
          })}
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[#ececec] bg-[#ececec] md:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="bg-white px-6 py-6">
              <dd className="text-[24px] font-bold leading-[1.1] tracking-[-0.02em] text-[#c91f28] md:text-[28px]">
                {fact.value}
              </dd>
              <dt className="mt-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#6b6f76]">
                {t(fact.label)}
              </dt>
            </div>
          ))}
        </dl>

        <TestimonialProvenanceNote className="mt-10" />
      </div>
    </section>
  );
}
