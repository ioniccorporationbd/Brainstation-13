import Image from "next/image";
import { getTranslator } from "@/i18n/server";
import Link from "next/link";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85";

export default async function InsuranceHeroSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[72px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
        {/* Left content */}
        <div>
          <p className="mb-5 inline-flex rounded-full bg-[#fdecec] px-4 py-2 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Insurtech")}</p>

          <h1 className="text-[38px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0a0a0a] md:text-[52px] lg:text-[56px]">{t("AI-Driven Insurance Technology")}</h1>

          <p className="mt-6 max-w-[560px] text-[17px] font-medium leading-[1.6] tracking-[-0.01em] text-[#565656] md:text-[19px]">{t("Modular insurtech that modernizes claims, policies and agent operations — adopt one module or the full stack, integrate with your core systems.")}</p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/schedule-a-call"
              className="inline-flex items-center justify-center rounded-full bg-[#c91f28] px-8 py-4 text-[16px] font-bold tracking-[-0.01em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
            >{t("Schedule a Call")}</Link>

            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-full border border-[#c91f28] px-8 py-4 text-[16px] font-bold tracking-[-0.01em] text-[#c91f28] transition duration-300 hover:bg-[#c91f28] hover:text-white"
            >{t("View Case Study")}</Link>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] font-semibold text-[#565656]">
            <span>{t("Claims")}</span>
            <span className="h-1 w-1 rounded-full bg-[#c91f28]" />
            <span>{t("Policy Admin")}</span>
            <span className="h-1 w-1 rounded-full bg-[#c91f28]" />
            <span>{t("Distribution")}</span>
            <span className="h-1 w-1 rounded-full bg-[#c91f28]" />
            <span>{t("AI Automation")}</span>
          </div>
        </div>

        {/* Right image */}
        <div className="relative w-full">
          <div className="relative aspect-[4/3.4] w-full overflow-hidden rounded-2xl border border-[#ececec] bg-[#f7f7f7]">
            <Image
              src={HERO_IMAGE}
              alt={t("Insurance operations team working with digital policy documents")}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
