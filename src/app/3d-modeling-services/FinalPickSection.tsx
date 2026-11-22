import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import { Phone } from "lucide-react";

export default async function FinalPickSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white pb-[56px] pt-[8px] text-[#0a0a0a] md:pb-[104px]">
      <div className="brand-container">
        <div className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-[#ececec] bg-white p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:gap-14">
          <div>
            <p className="mb-3 text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:text-center">{t("Let's Build")}</p>

            <h2 className="max-sm:mx-auto max-sm:text-center max-w-[620px] text-[#0a0a0a] font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Have a Complex Story to Show?")}</h2>

            <p className="max-sm:mx-auto max-sm:text-center mt-4 max-w-[580px] text-[15px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B] md:text-[16px] text-pretty">{t("From semiconductor fabs to automotive systems, we turn engineering data into cinematic 3D. Book a consultation to explore what's possible.")}</p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
            <Link
              href="/schedule-a-call"
              className="inline-flex items-center justify-center rounded-full bg-[#c91f28] px-8 py-4 text-[15px] font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
            >{t("Schedule a Call")}</Link>

            <a
              href="tel:+8801404055226"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c91f28] px-8 py-4 text-[15px] font-bold text-[#c91f28] transition duration-300 hover:bg-[#c91f28] hover:text-white"
            >
              <Phone size={16} strokeWidth={2.2} />
              +88 01404055226
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
