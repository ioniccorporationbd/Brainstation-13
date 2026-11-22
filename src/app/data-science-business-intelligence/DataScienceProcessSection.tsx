import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import { ArrowRight } from "lucide-react";

const steps = [
  { title: "Discover & audit", description: "We inventory the sources, owners and questions the business already asks." },
  { title: "Model & architect", description: "Warehouse layers, definitions and metric logic agreed before any chart is built." },
  { title: "Build & validate", description: "Pipelines, dashboards and models built in increments, each checked against the source." },
  { title: "Enable & iterate", description: "Handover, training and a review rhythm so the numbers keep matching reality." },
];

export default async function DataScienceProcessSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white pb-[56px] md:pb-[104px]">
      <div className="brand-container">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="lg:sticky lg:top-24">
            <p className="text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:text-center">{t("How we work")}</p>
            <h2 className="max-sm:mx-auto max-sm:text-center mt-4 text-black font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Implementation process")}</h2>
            <p className="max-sm:mx-auto max-sm:text-center mt-4 max-w-[460px] text-[15px] leading-[1.6] text-[#52525B] md:text-[16px] text-pretty">{t("Four stages from the first data audit to a dashboard people keep open.")}</p>

            <Link
              href="/schedule-a-call"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#c91f28] px-6 py-3 text-[14.5px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
            >{t("Schedule a call")}<ArrowRight size={17} />
            </Link>
          </div>

          <ol className="relative space-y-4">
            {steps.map((item, index) => (
              <li
                key={item.title}
                className="group flex gap-5 rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[14.5px] font-bold text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-black font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px]">
                    {t(item.title)}
                  </h3>
                  <p className="mt-1.5 text-[14.5px] leading-[1.6] text-[#52525B] text-pretty">
                    {t(item.description)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
