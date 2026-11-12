import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import { ArrowLeft, ArrowRight, ChevronRight, Quote } from "lucide-react";

export default async function AnupomHeroSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[56px] pt-[40px] text-black md:pb-[72px] md:pt-[52px]">
      <div className="mx-auto max-w-[1240px]">
        <nav
          aria-label={t("Breadcrumb")}
          className="flex items-center gap-1.5 text-[13px] text-[#6b6f76]"
        >
          <Link href="/" className="transition-colors hover:text-[#c91f28]">{t("Home")}</Link>
          <ChevronRight size={14} strokeWidth={2} className="text-[#c9ccd1]" />
          <Link
            href="/testimonials"
            className="transition-colors hover:text-[#c91f28]"
          >{t("Testimonials")}</Link>
          <ChevronRight size={14} strokeWidth={2} className="text-[#c9ccd1]" />
          <span className="font-medium text-black">{t("Anupom Syam")}</span>
        </nav>

        <div className="mt-9 grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">{t("Testimonial · Fintech")}</span>
            <h1 className="mt-6 text-[32px] font-bold leading-[1.08] tracking-[-0.03em] text-black md:text-[46px] lg:text-[50px]">{t("“8X faster than we expected”")}</h1>
            <p className="mt-5 max-w-[560px] text-[15.5px] leading-[1.7] text-[#55585e] md:text-[16.5px]">{t("Anupom Syam, Founder & CEO at Tackle, on how resource augmentation changed the delivery velocity of their fintech platform.")}</p>

            <div className="mt-7 flex items-center gap-4 rounded-xl border border-[#ececec] bg-white px-5 py-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fdecec] text-[15px] font-bold text-[#c91f28]">{"AS"}</span>
              <div>
                <p className="text-[16px] font-semibold leading-[1.3] text-black">{t("Anupom Syam")}</p>
                <p className="mt-0.5 text-[13.5px] leading-[1.4] text-[#6b6f76]">{t("Founder & CEO, Tackle")}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/testimonials"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-6 py-3.5 text-[14.5px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >
                <ArrowLeft size={16} />{t("All testimonials")}</Link>
              <Link
                href="/schedule-a-call"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-6 py-3.5 text-[14.5px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >{t("Talk to our team")}<ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <figure className="rounded-2xl border border-[#ececec] bg-[#fafafa] p-7 md:p-9">
            <Quote size={26} strokeWidth={1.6} className="text-[#f0c9cb]" />
            <blockquote className="mt-5 text-[17px] font-medium leading-[1.65] text-[#22252a] md:text-[19px]">{t("“Brain Station 23’s resource augmentation transformed our development velocity. Their AI-powered approach delivered our fintech platform 8X faster than expected.”")}</blockquote>
            <figcaption className="mt-6 border-t border-[#ececec] pt-5 text-[13.5px] text-[#6b6f76]">
              <span className="font-semibold text-black">{t("Anupom Syam")}</span>{" "}{t("· Founder & CEO, Tackle — reproduced verbatim from the original testimonial.")}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
