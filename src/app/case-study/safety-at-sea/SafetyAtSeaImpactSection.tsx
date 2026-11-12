import { BellRing, Compass, Eye, Waves } from "lucide-react";
import { getTranslator } from "@/i18n/server";

const results = [
  {
    title: "Faster rescue coordination",
    description: "Responders reach an incident with position and vessel context already in hand.",
    icon: BellRing,
  },
  {
    title: "Fleet-wide visibility",
    description: "Owners see where every vessel is, without calling the crew to ask.",
    icon: Eye,
  },
  {
    title: "Live incident timelines",
    description: "Authorities work from a shared dashboard instead of relayed phone reports.",
    icon: Compass,
  },
  {
    title: "Built for thin coverage",
    description: "The platform keeps working where connectivity drops in and out.",
    icon: Waves,
  },
];

const snapshot = [
  "Continuous fleet monitoring",
  "Alert-first incident flow",
  "Store-and-forward sync",
  "Owner and responder access",
];

export default async function SafetyAtSeaImpactSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-9 md:px-10 md:py-11">
          <div className="max-w-[720px]">
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Impact")}</p>
            <h2 className="mt-3 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("The results that mattered")}</h2>
            <p className="mt-3 text-[15px] leading-[1.7] text-[#55585e] md:text-[15.5px]">{t("Outcomes described in terms of what changed, not projected percentages.")}</p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((item) => (
              <article
                key={item.title}
                className="group flex h-full flex-col rounded-xl border border-[#ececec] bg-white p-5 transition-colors duration-200 hover:border-[#c91f28]/50"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                  <item.icon size={19} />
                </span>
                <h3 className="mt-4 text-[15.5px] font-semibold leading-[1.35] text-black">{t(item.title)}</h3>
                <p className="mt-1.5 text-[13.5px] leading-[1.65] text-[#55585e]">{t(item.description)}</p>
              </article>
            ))}
          </div>

          <ul className="mt-8 flex flex-wrap gap-2.5 border-t border-[#ececec] pt-6">
            {snapshot.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-[#ececec] bg-white px-3.5 py-1.5 text-[13px] font-semibold text-black"
              >
                {t(item)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
