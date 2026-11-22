import Image from "next/image";
import { getTranslator } from "@/i18n/server";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop";

const keywords = ["AEM Sites", "AEM Assets", "AEM Forms", "Migration", "Managed Services"];

export default async function AemHeroSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white pb-[48px] pt-[56px] text-[#0a0a0a] md:pb-[88px] md:pt-[72px]">
      <div className="grid brand-container items-center max-sm:gap-8 gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
        <div>
          <p className="mb-5 inline-flex rounded-full bg-[#fdecec] px-4 py-2 text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:flex max-sm:w-fit max-sm:mx-auto">{t("Adobe Experience Manager")}</p>

          <h1 className="max-sm:mx-auto max-sm:text-center max-w-[640px] font-semibold font-sans text-[#0a0a0a] text-[clamp(28px,8.387vw,36px)] leading-[1.08] tracking-[-0.035em] sm:text-[40px] md:text-[50px] lg:text-[54px]">{t("Adobe Experience Manager")}</h1>

          <p className="max-sm:mx-auto max-sm:text-center mt-6 max-w-[560px] text-[15px] font-medium leading-[1.65] tracking-[-0.01em] text-[#52525B] md:text-[18px]">{t("Implementation, integration, managed service, migration and upgrade — the full AEM lifecycle handled by engineers who work in it daily.")}</p>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Link
              href="/schedule-a-call"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c91f28] px-8 py-4 text-[15px] font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
            >{t("Book a Consultation")}<ArrowRight size={16} strokeWidth={2.2} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#c91f28] px-8 py-4 text-[15px] font-bold text-[#c91f28] transition duration-300 hover:bg-[#c91f28] hover:text-white"
            >{t("Talk to an AEM Team")}</Link>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-2 max-sm:justify-center">
            {keywords.map((word) => (
              <span
                key={word}
                className="rounded-full border border-[#ececec] bg-white px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-normal text-[#52525B]"
              >
                {t(word)}
              </span>
            ))}
          </div>
        </div>

        <div className="relative w-full">
          <div className="relative aspect-[4/3.4] w-full overflow-hidden rounded-2xl border border-[#ececec] bg-[#f7f7f7]">
            <Image
              src={HERO_IMG}
              alt={t("Digital experience dashboard on a laptop")}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
