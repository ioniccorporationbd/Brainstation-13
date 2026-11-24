import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import { ArrowRight } from "lucide-react";

export default async function EcommerceCtaSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white pb-[56px] max-sm:pb-7 text-[#0a0a0a] md:pb-[112px]">
      <div className="brand-container overflow-hidden rounded-2xl border border-[#ececec] bg-[#fafafa] px-8 py-12 max-sm:py-8 text-center md:px-16 md:py-16">
        <p className="mb-4 text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:text-center">{t("Next Step")}</p>

        <h2 className="max-sm:mx-auto max-sm:text-center mx-auto max-w-[720px] text-[#0a0a0a] font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Replatforming or launching?")}</h2>

        <p className="mx-auto mt-4 max-w-[620px] text-[15px] font-medium leading-[1.6] text-[#52525B] md:text-[16px] text-pretty">{t("We'll scope the fastest safe path to a high-performing storefront.")}</p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <Link
            href="/schedule-a-call"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c91f28] px-8 py-4 text-[15px] font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
          >{t("Book a commerce audit")}<ArrowRight size={16} strokeWidth={2.2} />
          </Link>

          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center rounded-full border border-[#c91f28] px-8 py-4 text-[15px] font-bold text-[#c91f28] transition duration-300 hover:bg-[#c91f28] hover:text-white"
          >{t("Browse case studies")}</Link>
        </div>
      </div>
    </section>
  );
}
