import Image from "next/image";
import { getTranslator } from "@/i18n/server";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop";

const keywords = ["Moodle", "Proctoring", "Integrations", "Hosting", "Support"];

export default async function MoodleHeroSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white pb-[48px] pt-[56px] text-[#0a0a0a] md:pb-[88px] md:pt-[72px]">
      <div className="grid brand-container items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <p className="mb-5 inline-flex rounded-full bg-[#fdecec] px-4 py-2 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("LMS Development")}</p>

          <h1 className="max-w-[620px] text-[38px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0a0a0a] md:text-[54px]">{t("Enterprise Moodle LMS & Proctoring")}</h1>

          <p className="mt-6 max-w-[560px] text-[15px] font-medium leading-[1.65] tracking-[-0.01em] text-[#52525B] md:text-[18px]">{t("Secure, scalable, audit-ready learning and assessment platforms for institutions that cannot afford downtime.")}</p>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Link
              href="/schedule-a-call"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c91f28] px-8 py-4 text-[15px] font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
            >{t("Book a Meeting")}<ArrowRight size={16} strokeWidth={2.2} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#c91f28] px-8 py-4 text-[15px] font-bold text-[#c91f28] transition duration-300 hover:bg-[#c91f28] hover:text-white"
            >{t("Request Free Assessment")}</Link>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2">
            {keywords.map((word, index) => (
              <span key={word} className="flex items-center gap-3">
                {index > 0 ? (
                  <span className="h-1 w-1 rounded-full bg-[#d4d4d4]" />
                ) : null}
                <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#52525B]">
                  {t(word)}
                </span>
              </span>
            ))}
          </div>
        </div>

        <div className="relative w-full">
          <div className="relative aspect-[4/3.4] w-full overflow-hidden rounded-2xl border border-[#ececec] bg-[#f7f7f7]">
            <Image
              src={HERO_IMG}
              alt={t("Instructors collaborating on an online learning platform")}
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
