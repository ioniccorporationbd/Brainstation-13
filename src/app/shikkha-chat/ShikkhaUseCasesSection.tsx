import type { ElementType } from "react";
import { getTranslator } from "@/i18n/server";
import {
  Building2,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Presentation,
  Users,
} from "lucide-react";

type UseCase = { icon: ElementType; title: string; description: string };

const useCases: UseCase[] = [
  {
    icon: Building2,
    title: "For schools",
    description:
      "One admin spine for students, teachers, classes, attendance and analytics — replacing scattered spreadsheets and tools.",
  },
  {
    icon: Presentation,
    title: "For teachers",
    description:
      "Class rosters, attendance, lesson publishing and teaching analytics in a single focused dashboard.",
  },
  {
    icon: GraduationCap,
    title: "For students",
    description:
      "An AI tutor and a personalised study plan that adapt to each learner, across every class, section and subject.",
  },
  {
    icon: Users,
    title: "For parents",
    description:
      "Real-time attendance, results and weekly insights, with a direct message line to teachers.",
  },
  {
    icon: HeartHandshake,
    title: "For NGOs",
    description:
      "Run multi-institution programmes and prove impact with outcome and coverage analytics.",
  },
  {
    icon: Landmark,
    title: "For government",
    description:
      "District-level oversight of enrolment, outcomes, equity and safety, backed by exportable reports.",
  },
];

export default async function ShikkhaUseCasesSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-24">
      <div className="mx-auto brand-container">
        <div className="max-w-[760px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Benefits & use cases")}</p>
          <h2 className="mt-4 text-[27px] font-semibold leading-[1.15] tracking-[-0.02em] text-black md:text-[46px] lg:text-[50px]">{t("Built for everyone in the education loop")}</h2>
          <p className="mt-4 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] md:text-[16.5px]">{t("From a single classroom to an entire district, each stakeholder gets a purpose-built experience backed by the same shared data.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-[18px] font-semibold leading-[1.3] tracking-[-0.01em] text-black md:text-[20px]">
                  {t(item.title)}
                </h3>
                <p className="mt-2.5 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B]">
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
