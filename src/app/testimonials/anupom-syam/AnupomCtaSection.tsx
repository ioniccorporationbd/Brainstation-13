import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import { ArrowRight } from "lucide-react";

export default async function AnupomCtaSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 md:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-10 md:px-12 md:py-14">
          <div className="flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[36px]">{t("Get the same speed advantage")}</h2>
              <p className="mt-3 max-w-[620px] text-[15.5px] leading-[1.7] text-[#55585e] md:text-[16.5px]">{t("See how augmentation can accelerate your roadmap without growing permanent headcount.")}</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/schedule-a-call"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >{t("Book a discovery call")}<ArrowRight size={17} />
              </Link>
              <Link
                href="/testimonials"
                className="inline-flex items-center justify-center rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >{t("Read more stories")}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
