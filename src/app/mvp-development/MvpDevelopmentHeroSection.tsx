import Link from "next/link";
import { getTranslator } from "@/i18n/server";

export default async function MvpDevelopmentHeroSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white py-[48px] text-[#0a0a0a] md:py-[104px] lg:py-[104px]">
      <div className="grid brand-container grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
        {/* Left Content */}
        <div>
          <span className="inline-flex rounded-[7px] bg-[#fdecec] px-4 py-2 text-[13px] font-bold uppercase leading-none tracking-[0.12em] text-[#c91f28]">{t("MVP Development")}</span>

          <h1 className="mt-7 max-w-[680px] text-[38px] font-bold leading-[1.1] tracking-[-0.03em] text-[#0a0a0a] md:text-[52px] lg:text-[56px]">{t("Turn Ideas Into MVPs — Faster.")}</h1>

          <p className="mt-6 max-w-[560px] text-[15px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B] md:text-[19px]">{t("Validate your concept with a lean, high-impact product built to attract early users, prove value, and support your next funding round.")}</p>

          <Link
            href="/schedule-a-call"
            className="mt-9 inline-flex rounded-full bg-[#c91f28] px-8 py-4 text-[16px] font-bold tracking-[-0.01em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
          >{t("Schedule a Call")}</Link>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="h-[280px] w-full overflow-hidden rounded-2xl border border-[#ececec] md:h-[420px] lg:h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1400&auto=format&fit=crop"
              alt={t("Product team building an MVP prototype")}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
