import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import { ArrowRight } from "lucide-react";

const highlights = [
  "Email campaigning",
  "Social marketing",
  "Digital printing",
];

const caseStudy = {
  category: "Email marketing platform",
  title: "Splash 360",
  logoText: "SPLASH 360°",
  image:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop",
  description:
    "Splash 360 is a US-based company working with email, social marketing and digital printing. We have been developing and upgrading Splash since 2008, and the platform has found a strong following in the US market.",
};

export default async function SoftwareItesCaseStudiesSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[640px]">
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Case studies")}</p>
            <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">{t("Software work in production")}</h2>
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
              alt={caseStudy.title}
              className="h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] md:h-[320px] lg:h-full"
            />
          </div>

          <div className="p-6 md:p-9">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-[#fafafa] px-3 py-1.5 text-[12px] font-black tracking-[-0.01em] text-[#c91f28] ring-1 ring-[#ececec]">
                {caseStudy.logoText}
              </span>
              <p className="text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">
                {caseStudy.category}
              </p>
            </div>

            <h3 className="mt-4 text-[22px] font-semibold leading-[1.25] text-black md:text-[28px]">
              {t(caseStudy.title)}
            </h3>

            <p className="mt-4 text-[14.5px] leading-[1.75] text-[#55585e]">
              {t(caseStudy.description)}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-lg border border-[#ececec] bg-[#fafafa] px-3 py-1.5 text-[12.5px] font-semibold text-black"
                >
                  {highlight}
                </li>
              ))}
            </ul>

            <Link
              href="/case-studies"
              className="mt-7 inline-flex items-center gap-2 text-[14px] font-bold text-[#c91f28] transition-all duration-200 hover:gap-3.5"
            >{t("View case studies")}<ArrowRight size={16} />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
