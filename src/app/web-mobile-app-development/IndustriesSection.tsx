import { Check } from "lucide-react";
import { getTranslator } from "@/i18n/server";

const industries = [
  "E-commerce",
  "Fin-Tech",
  "Telecommunication",
  "Pharmaceuticals",
  "Health Sector",
  "Local Enterprises",
  "Agricultural",
  "MNCs",
  "Startups",
];

export default async function IndustriesSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white px-6 pb-[88px] text-[#0a0a0a] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Industries We Build For")}</p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Industries We Serve")}</h2>

          <p className="mt-4 text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">{t("Domain experience across regulated, high-traffic and fast-moving sectors.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry}
              className="group flex items-center gap-4 rounded-2xl border border-[#ececec] bg-white px-5 py-4 transition-colors duration-300 hover:border-[#c91f28]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                <Check size={16} strokeWidth={2.6} />
              </span>

              <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#0a0a0a]">
                {t(industry)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
