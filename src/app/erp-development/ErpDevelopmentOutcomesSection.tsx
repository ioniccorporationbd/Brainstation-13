import { Gauge, ShieldCheck, Sparkles, Waypoints } from "lucide-react";
import { getTranslator } from "@/i18n/server";

const outcomes = [
  {
    title: "Adoption",
    description:
      "People use the modules daily because the screens follow the process they already know.",
    icon: Sparkles,
  },
  {
    title: "Cycle time",
    description:
      "Approvals and handoffs move through automation instead of inboxes and spreadsheets.",
    icon: Gauge,
  },
  {
    title: "Data accuracy",
    description:
      "One record per order, invoice and item, validated at entry rather than reconciled later.",
    icon: ShieldCheck,
  },
  {
    title: "Integration coverage",
    description:
      "Payment, logistics, CRM and BI tools share the same source of truth.",
    icon: Waypoints,
  },
];

export default async function ErpDevelopmentOutcomesSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white pb-[56px] md:pb-[104px]">
      <div className="brand-container">
        <div className="rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-9 md:px-10 md:py-11">
          <div className="max-w-[700px]">
            <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("What we measure")}</p>
            <h2 className="mt-3 text-[27px] font-semibold leading-[1.12] tracking-[-0.02em] text-black md:text-[34px]">{t("Outcomes, not vanity metrics")}</h2>
            <p className="mt-3 text-[15px] leading-[1.7] text-[#52525B] md:text-[15.5px]">{t("Every engagement is reviewed against the same four questions.")}</p>
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
