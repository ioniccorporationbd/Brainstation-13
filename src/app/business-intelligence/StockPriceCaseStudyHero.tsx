import Image from "next/image";
import { getTranslator } from "@/i18n/server";
import Link from "next/link";

export default async function StockPriceCaseStudyHero() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white py-[48px] text-[#0a0a0a] md:py-[104px]">
      <div className="grid brand-container grid-cols-1 items-center max-sm:gap-8 gap-12 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
        {/* Left - Text */}
        <div>
          <p className="mb-5 inline-flex rounded-full bg-[#fdecec] px-4 py-2 text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:flex max-sm:w-fit max-sm:mx-auto">{t("Case Study")}</p>

          <h1 className="max-sm:mx-auto max-sm:text-center font-bold text-[#0a0a0a] text-[clamp(28px,8.387vw,36px)] leading-[1.08] tracking-[-0.035em] sm:text-[40px] md:text-[50px] lg:text-[54px]">{t("Stock Price Prediction With AI")}</h1>

          <p className="max-sm:mx-auto max-sm:text-center mt-6 max-w-[560px] font-medium tracking-[-0.01em] text-[#52525B] text-pretty leading-[1.6] text-[16px] sm:text-[18px]">{t("An AI and machine-learning proof of concept that predicts the most profitable time to buy or sell a stock.")}</p>

          <dl className="mt-7 grid max-w-[540px] grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#ececec] bg-white p-4">
              <dt className="text-[12px] font-bold uppercase tracking-normal text-[#c91f28]">{t("Solution")}</dt>
              <dd className="mt-1.5 text-[15px] font-semibold leading-[1.4] text-[#0a0a0a]">{t("AI & ML Enabled Stock Price Prediction Model")}</dd>
            </div>

            <div className="rounded-2xl border border-[#ececec] bg-white p-4">
              <dt className="text-[12px] font-bold uppercase tracking-normal text-[#c91f28]">{t("Industry")}</dt>
              <dd className="mt-1.5 text-[15px] font-semibold leading-[1.4] text-[#0a0a0a]">{t("Fin-tech Industry")}</dd>
            </div>
          </dl>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-full bg-[#c91f28] px-8 py-4 text-[16px] font-bold tracking-[-0.01em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
            >{t("Explore Case Study")}</Link>

            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-full border border-[#c91f28] px-8 py-4 text-[16px] font-bold tracking-[-0.01em] text-[#c91f28] transition duration-300 hover:bg-[#c91f28] hover:text-white"
            >{t("Testimonial")}</Link>
          </div>
        </div>

        {/* Right - Image */}
        <div className="group relative h-[280px] w-full overflow-hidden rounded-2xl border border-[#ececec] md:h-[420px] lg:h-[480px]">
          <Image
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1400&auto=format&fit=crop"
            alt={t("Stock price prediction and financial analytics")}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 560px"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
