import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import { ArrowRight, Quote } from "lucide-react";

export default async function TestimonialsHeroSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[64px] pt-[56px] text-black md:pb-[80px] md:pt-[76px]">
      <div className="mx-auto grid max-w-[1240px] items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">{t("Testimonials")}</span>
          <h1 className="mt-6 text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-black md:text-[46px] lg:text-[50px]">{t("What teams say after building with us")}</h1>
          <p className="mt-5 max-w-[560px] text-[15.5px] leading-[1.7] text-[#55585e] md:text-[16.5px]">{t("First-hand accounts from fintech, education, cloud, commerce and enterprise engagements — kept exactly as they were given, with the original names, roles and companies.")}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/schedule-a-call"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
            >{t("Book a discovery call")}<ArrowRight size={17} />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
            >{t("View case studies")}</Link>
          </div>
        </div>

        <Link
          href="/testimonials/anupom-syam"
          className="group block rounded-2xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50 md:p-8"
        >
          <div className="flex items-start justify-between">
            <span className="rounded-md bg-[#fdecec] px-2.5 py-1 text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#c91f28]">{t("Featured · Fintech")}</span>
            <Quote size={24} strokeWidth={1.6} className="text-[#f0c9cb]" />
          </div>
          <p className="mt-6 text-[20px] font-bold leading-[1.35] tracking-[-0.01em] text-black md:text-[24px]">{t("“8X faster than we expected”")}</p>
          <p className="mt-3 text-[14.5px] leading-[1.7] text-[#55585e]">{t("“Their resource augmentation transformed our development velocity. Their AI-powered approach delivered our fintech platform 8X faster than expected.”")}</p>
          <div className="mt-6 flex items-center justify-between border-t border-[#f2f2f2] pt-5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdecec] text-[14px] font-bold text-[#c91f28]">{t("AS")}</span>
              <div>
                <p className="text-[14.5px] font-semibold text-black">{t("Anupom Syam")}</p>
                <p className="text-[13px] text-[#6b6f76]">{t("Founder & CEO, Tackle")}</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#c91f28]">{t("Read story")}<ArrowRight
                size={15}
                strokeWidth={2.2}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
