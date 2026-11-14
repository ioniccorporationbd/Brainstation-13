import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import { ArrowRight } from "lucide-react";

export default async function ErpDevelopmentCtaSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white pb-[56px] pt-[8px] md:pb-[112px]">
      <div className="brand-container">
        <div className="rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-10 md:px-12 md:py-14">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-[620px]">
              <h2 className="text-[26px] font-semibold leading-[1.12] tracking-[-0.02em] text-black md:text-[36px]">{t("Outgrowing your current ERP?")}</h2>
              <p className="mt-3 text-[15.5px] leading-[1.7] text-[#52525B] md:text-[16.5px]">{t("Let's map the modules and integrations you need first.")}</p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/schedule-a-call"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >{t("Book an ERP consult")}<ArrowRight size={18} />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >{t("See our work")}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
