import Link from "next/link";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1920&q=90";

export default function StockPriceCaseStudyHero() {
  return (
    <section className="relative min-h-[720px] w-full overflow-hidden bg-black">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Content wrapper */}
      <div className="relative z-10 mx-auto flex min-h-[720px] w-full max-w-[1400px] items-center justify-center px-5 py-[90px] sm:px-8 lg:justify-end xl:px-0">
        <div className="w-full max-w-[720px] bg-white/85 px-[34px] py-[48px] backdrop-blur-[2px] sm:px-[54px] sm:py-[62px] lg:mr-[20px]">
          <p className="text-[15px] font-semibold uppercase tracking-[0.55em] text-black">
            Case Study
          </p>

          <h1 className="mt-[28px] max-w-[640px] text-[44px] font-bold leading-[1.05] tracking-[-0.045em] text-black sm:text-[58px] lg:text-[64px]">
            Stock Price
            <br />
            Prediction With AI
            <br />
            (POC)
          </h1>

          <div className="mt-[28px] space-y-[18px] text-[20px] font-semibold leading-[1.4] text-black sm:text-[24px]">
            <p>
              <span className="font-bold">Solution:</span> AI &amp; ML Enabled
              Stock Price Prediction Model
            </p>

            <p>
              <span className="font-bold">Industry:</span> Fin-tech Industry
            </p>
          </div>

          <div className="mt-[34px] flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-[130px]">
            <Link
              href="/case-studies/stock-price-prediction-with-ai"
              className="inline-flex h-[52px] w-fit items-center justify-center rounded-full bg-[#ffad2f] px-[30px] text-[15px] font-bold uppercase text-black transition hover:bg-[#f59b15]"
            >
              Explore
            </Link>

            <Link
              href="/case-studies/stock-price-prediction-with-ai#testimonial"
              className="inline-flex h-[52px] w-fit items-center justify-center rounded-full bg-[#ffad2f] px-[30px] text-[16px] font-semibold text-black transition hover:bg-[#f59b15]"
            >
              Testimonial
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}