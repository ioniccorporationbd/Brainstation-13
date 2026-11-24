import type { ComponentType } from "react";
import { getTranslator } from "@/i18n/server";
import { Clock, ShieldAlert, Timer, Users } from "lucide-react";

type ResultItem = {
  title: string;
  description: string;
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
};

const results: ResultItem[] = [
  {
    title: "Faster Claims Settlement",
    description:
      "Automation removes manual steps across adjudication, payment and notification.",
    icon: Clock,
  },
  {
    title: "Agent Networks at Scale",
    description:
      "Digital onboarding and progress tracking support large, distributed agent networks.",
    icon: Users,
  },
  {
    title: "Real-Time Calculations",
    description:
      "Claim amounts are calculated instantly inside the claims workflow.",
    icon: Timer,
  },
  {
    title: "AI-Assisted Fraud Detection",
    description:
      "Anomalies are flagged before settlement, reducing financial leakage risk.",
    icon: ShieldAlert,
  },
];

export default async function InsuranceProvenResultsSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white pb-[52px] max-sm:pb-7 pt-[8px] text-[#0a0a0a] md:pb-[96px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:text-center">{t("Outcomes")}</p>

          <h2 className="max-sm:mx-auto max-sm:text-center text-[#0a0a0a] font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Proven Results")}</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-7 max-sm:p-4 text-center transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-[#0a0a0a] font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px]">
                  {t(item.title)}
                </h3>

                <p className="mt-3 text-[14.5px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B] text-pretty">
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
