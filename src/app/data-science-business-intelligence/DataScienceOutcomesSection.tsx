import { Compass, Gauge, MessagesSquare, ShieldCheck } from "lucide-react";
import { getTranslator } from "@/i18n/server";

const outcomes = [
  { title: "Decisions you can defend", description: "One agreed definition per metric, documented next to the dashboard that uses it.", icon: Compass },
  { title: "Less time assembling", description: "Scheduled pipelines replace the manual export-and-stitch routine.", icon: Gauge },
  { title: "Shared language", description: "Finance, sales and operations read from the same model.", icon: MessagesSquare },
  { title: "Trust in the numbers", description: "Quality checks and lineage surface problems before a report does.", icon: ShieldCheck },
];

export default async function DataScienceOutcomesSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white pb-[56px] md:pb-[104px]">
      <div className="brand-container">
        <div className="rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-9 md:px-10 md:py-11">
          <div className="max-w-[700px]">
            <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Benefits")}</p>
            <h2 className="mt-3 text-[26px] font-semibold leading-[1.12] tracking-[-0.02em] text-black md:text-[34px]">{t("What a working data stack changes")}</h2>
            <p className="mt-3 text-[15px] leading-[1.7] text-[#52525B] md:text-[15.5px]">{t("Outcomes we review with every client — described, not scored.")}</p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((item) => (
              <article
                key={item.title}
                className="group flex h-full flex-col rounded-xl border border-[#ececec] bg-white p-5 transition-colors duration-200 hover:border-[#c91f28]/50"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                  <item.icon size={19} />
                </span>
                <h3 className="mt-4 text-[15.5px] font-semibold text-black">{t(item.title)}</h3>
                <p className="mt-1.5 text-[13.5px] leading-[1.65] text-[#52525B]">
                  {t(item.description)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
