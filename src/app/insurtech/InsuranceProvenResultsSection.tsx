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
    <section className="w-full bg-white px-6 pb-[80px] pt-[8px] text-[#0a0a0a] md:pb-[96px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Outcomes")}</p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Proven Results")}</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-6 text-center transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-[16px] font-bold leading-[1.3] tracking-[-0.01em] text-[#0a0a0a]">
                  {t(item.title)}
                </h3>

                <p className="mt-3 text-[14.5px] font-medium leading-[1.6] tracking-[-0.01em] text-[#565656]">
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
