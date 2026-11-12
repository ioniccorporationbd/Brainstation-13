import Link from "next/link";
import { getTranslator } from "@/i18n/server";

export default async function TechnologyConsultingHeroSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[72px] text-[#0a0a0a] md:py-[96px] lg:py-[104px]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
        {/* Left Content */}
        <div>
          <span className="inline-flex rounded-[7px] bg-[#fdecec] px-4 py-2 text-[13px] font-bold uppercase leading-none tracking-[0.12em] text-[#c91f28]">{t("Technology Consulting")}</span>

          <h1 className="mt-7 max-w-[680px] text-[38px] font-bold leading-[1.1] tracking-[-0.03em] text-[#0a0a0a] md:text-[52px] lg:text-[56px]">{t("Navigate Complexity With Expert Guidance.")}</h1>

          <p className="mt-6 max-w-[560px] text-[17px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[19px]">{t("We help teams modernize systems, adopt emerging technology, and build digital products with strategy that scales.")}</p>

          <Link
            href="/schedule-a-call"
            className="mt-9 inline-flex rounded-full bg-[#c91f28] px-8 py-4 text-[16px] font-bold tracking-[-0.01em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
          >{t("Schedule a Call")}</Link>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="h-[340px] w-full max-w-[560px] overflow-hidden rounded-2xl border border-[#ececec] md:h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
              alt={t("Technology consulting strategy session")}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
