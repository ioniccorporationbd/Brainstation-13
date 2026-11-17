import { CheckCircle2 } from "lucide-react";
import { getTranslator } from "@/i18n/server";

import ShikkhaFrame from "./ShikkhaFrame";

const items = [
  "AI Tutor",
  "Smart Lessons",
  "Lesson Planner",
  "Online Quizzes",
  "Assessments",
  "Learning Progress",
  "Personalised Study Plan",
  "Content review & AI safety",
];

export default async function ShikkhaAiPathshalaSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-20 md:py-24">
      <div className="mx-auto grid brand-container items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <ShikkhaFrame
          src="/images/shikkha/sc-learning.webp"
          alt={t("Shikkha Chat learning modules on website.shikkhachat.com")}
          url="website.shikkhachat.com"
          className="lg:order-1"
        />
        <div className="lg:order-2">
          <p className="text-[13px] font-bold uppercase tracking-normal text-[#c91f28]">{t("AI Pathshala")}</p>
          <h2 className="mt-4 text-[clamp(27px,8vw,32px)] font-semibold leading-[1.12] tracking-[-0.02em] text-black md:text-[46px] lg:text-[50px] text-balance">{t("Learning Around Each Student")}</h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-[#52525B] md:text-[16px] text-pretty">{t("AI Pathshala turns published lessons into a personal learning loop. Students read smart lessons, ask the AI Tutor in their own words, and take quizzes and assessments — while the platform tracks progress and shapes a personalised study plan. Teachers publish, planners plan, and reviewers keep it safe.")}</p>
          <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-2">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <CheckCircle2
                  size={15}
                  strokeWidth={2.4}
                  className="shrink-0 text-[#c91f28]"
                />
                <span className="text-[14px] font-medium text-[#3f434a]">
                  {t(item)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
