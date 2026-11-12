import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import { ArrowRight } from "lucide-react";

const caseStudy = {
  logoText: "otobi",
  category: "ERP HRMS Solution",
  title: "OTOBI",
  image:
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1400&auto=format&fit=crop",
  description:
    "Otobi, is the leading lifestyle solution brand in Bangladesh. The fundamental story behind the prestige of OTOBI is having modern manufacturing capacity, innovative designs & one of the largest distribution networks.",
  problems: [
    "Fragmented HR data management",
    "Manual attendance records",
    "Distribution-scale operations",
  ],
};

export default async function RetailCaseStudiesSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[640px]">
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Case studies")}</p>
            <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">{t("Retail work in production")}</h2>
            <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">{t("Check out our case studies that show how innovative solutions transformed businesses.")}</p>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-[#ececec] bg-white px-6 py-3 text-[14.5px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
          >{t("See all case studies")}<ArrowRight size={17} />
          </Link>
        </div>

        <article className="mt-10 grid grid-cols-1 overflow-hidden rounded-xl border border-[#ececec] bg-white lg:grid-cols-[1fr_1fr]">
          <div className="group overflow-hidden">
            <img
              src={caseStudy.image}
              alt={t("Modern sofa showroom for a lifestyle furniture brand")}
              className="h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] md:h-[320px] lg:h-full"
            />
          </div>

          <div className="p-6 md:p-9">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-[#fafafa] px-3 py-1.5 text-[13px] font-black tracking-[-0.01em] text-black ring-1 ring-[#ececec]">
                {t(caseStudy.logoText)}
              </span>
              <p className="text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">
                {t(caseStudy.category)}
              </p>
            </div>

            <h3 className="mt-4 text-[22px] font-semibold leading-[1.25] text-black md:text-[28px]">
              {t(caseStudy.title)}
            </h3>

            <p className="mt-4 text-[14.5px] leading-[1.75] text-[#55585e]">
              {t(caseStudy.description)}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {caseStudy.problems.map((problem) => (
                <li
                  key={problem}
                  className="rounded-lg border border-[#ececec] bg-[#fafafa] px-3 py-1.5 text-[12.5px] font-semibold text-black"
                >
                  {t(problem)}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-[14px] font-bold text-[#c91f28] transition-all duration-200 hover:gap-3.5"
              >{t("View case studies")}<ArrowRight size={16} />
              </Link>
              <Link
                href="/schedule-a-call"
                className="inline-flex items-center gap-2 rounded-lg bg-[#c91f28] px-5 py-2.5 text-[13.5px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >{t("Talk to our retail team")}</Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
