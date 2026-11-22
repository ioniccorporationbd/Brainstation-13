import Image from "next/image";
import { getTranslator } from "@/i18n/server";
import Link from "next/link";

const aiStats = [
  {
    number: "70%",
    label: "Faster Development",
    title: "Intelligent Coding",
    description:
      "AI-powered code synthesis and auto-completion reduce manual effort while maintaining enterprise-grade standards.",
  },
  {
    number: "99.9%",
    label: "Defect-Free Releases",
    title: "Bulletproof QA",
    description:
      "Self-learning test suites detect bugs early, with automated fixes for flawless deployments.",
  },
  {
    number: "40%",
    label: "Higher Efficiency",
    title: "Peak Performance",
    description:
      "ML algorithms optimize resource allocation, predict scaling needs, and eliminate bottlenecks in real-time.",
  },
  {
    number: "90%",
    label: "Faster Deployments",
    title: "Zero-Downtime Ops",
    description:
      "AI-driven CI/CD pipelines automate rollbacks and canary releases for seamless updates.",
  },
];

export default async function AIDevelopmentExcellenceSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white py-11 sm:py-[76px] md:py-[96px] lg:py-[118px]">
      <div className="brand-container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[420px_1fr] lg:gap-16">
          {/* Left: heading + intro + CTA */}
          <div className="max-sm:text-center">
            <h2 className="max-w-[420px] max-sm:mx-auto text-[clamp(24px,6.9vw,29px)] font-semibold leading-[1.12] tracking-[-0.03em] text-[#0A0A0A] sm:text-[36px] md:text-[40px] lg:text-[44px] text-balance">{t("Excellence in AI Development")}</h2>

            <p className="mt-4 max-w-[440px] max-sm:mx-auto sm:mt-6 text-[17px] font-normal leading-[1.6] text-[#52525B] text-pretty">{t("We integrate cutting-edge AI across the development lifecycle— delivering solutions 10X faster with unmatched reliability. Our engineers augment human expertise with AI to automate, optimize, and future-proof your software.")}</p>

            <Link
              href="/schedule-a-call"
              className="mt-6 inline-flex h-11 min-h-[44px] items-center justify-center rounded-full bg-primary px-6 text-[14px] font-semibold max-sm:mx-auto sm:mt-8 sm:h-12 sm:px-7 sm:text-[15px] text-white transition-colors duration-200 hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >{t("Schedule a Call")}</Link>
          </div>

          {/* Right: statistics as a 2x2 card grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
            {aiStats.map((item) => (
              <div
                key={item.title}
                className="flex h-full flex-col rounded-[16px] border border-black/[0.08] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] sm:p-7"
              >
                <span className="text-[clamp(27px,8.0vw,34px)] font-semibold leading-none tracking-[-0.02em] text-primary sm:text-[44px]">
                  {t(item.number)}
                </span>

                <span className="mt-2 text-[12px] font-semibold uppercase tracking-normal text-primary/70">
                  {t(item.label)}
                </span>

                <h3 className="mt-4 text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#0A0A0A] sm:text-[20px] md:text-[22px] lg:text-[22px] text-balance">
                  {t(item.title)}
                </h3>

                <p className="mt-2 text-[15px] font-normal leading-[1.55] text-[#52525B] text-pretty">
                  {t(item.description)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom feature bar */}
        <div className="mt-10 border-t border-black/[0.08] pt-8 sm:mt-14 sm:pt-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto_auto] lg:items-center lg:gap-12">
            <div className="border-l-2 border-primary pl-5">
              <h3 className="text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#0A0A0A] sm:text-[20px] md:text-[22px] lg:text-[22px] text-balance">{t("10X Faster Delivery")}</h3>

              <p className="mt-2 max-w-[560px] text-[15px] font-normal leading-[1.55] text-[#52525B] text-pretty">{t("Our world-class engineers leverage cutting-edge AI to deliver solutions 10X faster without compromising quality.")}</p>
            </div>

            <div className="flex items-center gap-3 lg:border-l lg:border-black/[0.08] lg:pl-8">
              <Image
                src="/images/ai-excellence/icon-shield.svg"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <p className="text-[15px] font-medium text-[#52525B] text-pretty">{t("100% IP Protection")}</p>
            </div>

            <div className="flex items-center gap-3 lg:border-l lg:border-black/[0.08] lg:pl-8">
              <Image
                src="/images/ai-excellence/icon-talent.svg"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <p className="text-[15px] font-medium text-[#52525B] text-pretty">{t("Top 1% Talent")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
