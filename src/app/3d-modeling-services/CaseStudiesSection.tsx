import Image from "next/image";
import { getTranslator } from "@/i18n/server";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CASE_IMG =
  "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=1200&auto=format&fit=crop";

const studies = [
  "Nissan Driver’s Guide",
  "Advanced Manufacturing Visualization",
  "Immersive Digital Showroom",
];

export default async function CaseStudiesSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white pb-[56px] pt-[8px] text-[#0a0a0a] md:pb-[104px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[780px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Case Studies")}</p>

          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[46px] lg:text-[50px]">{t("Complex Stories, Rendered Simply")}</h2>

          <p className="mx-auto mt-5 max-w-[660px] text-[15px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B] md:text-[15px]">{t("Expert 3D modeling and animation for industrial applications. From semiconductor fabs to global logistics, we visualize complex systems with cinematic clarity.")}</p>
        </div>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          {studies.map((study, index) => (
            <span
              key={study}
              className={`rounded-full px-4 py-2 text-[13px] font-bold transition-colors duration-300 ${
                index === 0
                  ? "bg-[#fdecec] text-[#c91f28]"
                  : "border border-[#ececec] bg-white text-[#52525B]"
              }`}
            >
              {t(study)}
            </span>
          ))}
        </div>

        <div className="mt-12 grid items-center gap-10 overflow-hidden rounded-2xl border border-[#ececec] bg-white p-6 sm:p-8 lg:grid-cols-[0.95fr_1fr] lg:gap-14 lg:p-10">
          <div className="relative aspect-[4/3.6] w-full overflow-hidden rounded-xl bg-[#f7f7f7]">
            <Image
              src={CASE_IMG}
              alt={t("Nissan Driver’s Guide AR experience")}
              fill
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Automotive AR Experience")}</p>

            <h3 className="mt-3 text-[26px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#0a0a0a] md:text-[32px]">{t("Driver’s Guide for Nissan")}</h3>

            <p className="mt-4 max-w-[520px] text-[15.5px] font-medium leading-[1.65] tracking-[-0.01em] text-[#52525B] md:text-[15px]">{t("AR mobile app for Nissan Middle East replacing traditional manuals. Built with Unity 3D, drivers scan interior controls for instant alerts and emergency procedures. Multilingual with cloud updates.")}</p>

            <Link
              href="/case-studies"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#c91f28] px-6 py-3 text-[14.5px] font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
            >{t("View Case Study")}<ArrowRight size={16} strokeWidth={2.2} />
            </Link>

            <div className="mt-8 grid grid-cols-2 gap-8 border-t border-[#ececec] pt-7">
              <div>
                <h4 className="text-[34px] font-bold leading-none tracking-[-0.02em] text-[#c91f28]">
                  80%
                </h4>

                <p className="mt-2 text-[14px] font-medium leading-[1.45] text-[#52525B]">{t("Faster knowledge access")}</p>
              </div>

              <div>
                <h4 className="text-[34px] font-bold leading-none tracking-[-0.02em] text-[#c91f28]">
                  99.5%
                </h4>

                <p className="mt-2 text-[14px] font-medium leading-[1.45] text-[#52525B]">{t("Better customer retention")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
