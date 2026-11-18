import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import { ArrowRight } from "lucide-react";

export default async function SoftwareItesCtaSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white pb-[56px] pt-[8px] md:pb-[104px]">
      <div className="mx-auto brand-container">
        <div className="rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-10 md:px-12 md:py-14">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-[620px]">
              <h2 className="text-black font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Building a product or IT?")}</h2>
              <p className="mt-3 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] md:text-[16.5px] text-pretty">{t("Talk to a team that ships applications, enterprise platforms and analytics for ICT and software businesses.")}</p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:shrink-0 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 sm:shrink-0 rounded-lg max-sm:px-5 max-sm:py-3 max-sm:text-[14px] lg:max-xl:px-4 lg:max-xl:text-[13px] text-center bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >{t("Schedule a call")}<ArrowRight size={18} />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 sm:shrink-0 rounded-lg max-sm:px-5 max-sm:py-3 max-sm:text-[14px] lg:max-xl:px-4 lg:max-xl:text-[13px] text-center border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >{t("See case studies")}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
