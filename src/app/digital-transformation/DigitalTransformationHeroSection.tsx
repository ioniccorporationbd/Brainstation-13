import Link from "next/link";
import { getTranslator } from "@/i18n/server";

export default async function DigitalTransformationHeroSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white py-[48px] text-[#0a0a0a] md:py-[104px] lg:py-[104px]">
      <div className="grid brand-container grid-cols-1 items-center max-sm:gap-8 gap-14 lg:grid-cols-[1fr_0.9fr]">
        {/* Left Content */}
        <div>
          <span className="inline-flex rounded-[7px] bg-[#fdecec] px-4 py-2 text-[13px] font-bold uppercase leading-none tracking-normal text-[#c91f28]">{t("Digital Transformation")}</span>

          <h1 className="max-sm:mx-auto max-sm:text-center mt-7 max-w-[680px] font-bold text-[#0a0a0a] text-[clamp(28px,8.387vw,36px)] leading-[1.08] tracking-[-0.035em] sm:text-[40px] md:text-[50px] lg:text-[54px]">{t("Modernize legacy systems with AI")}</h1>

          <p className="max-sm:mx-auto max-sm:text-center mt-6 max-w-[560px] font-medium tracking-[-0.01em] text-[#52525B] text-pretty leading-[1.6] text-[16px] sm:text-[18px]">{t("Turn outdated applications and manual processes into intelligent, automated workflows with AI, RPA, and cloud.")}</p>

          <Link
            href="/schedule-a-call"
            className="mt-9 inline-flex rounded-full bg-[#c91f28] px-8 py-4 text-[16px] font-bold tracking-[-0.01em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
          >{t("Schedule a Call")}</Link>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="h-[280px] w-full overflow-hidden rounded-2xl border border-[#ececec] md:h-[420px] lg:h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1400&auto=format&fit=crop"
              alt={t("Digital transformation and connected systems")}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
