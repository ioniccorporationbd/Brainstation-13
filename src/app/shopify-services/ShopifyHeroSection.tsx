import Link from "next/link";

export default function ShopifyHeroSection() {
  return (
    <section className="relative min-h-[640px] overflow-hidden bg-[#111E40] text-white">
      {/* Circle Background */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 44 }).map((_, index) => (
          <div
            key={index}
            className="absolute rounded-full border border-[#1f6aa0]/20"
            style={{
              width: `${1320 - index * 30}px`,
              height: `${1320 - index * 30}px`,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid min-h-[640px] max-w-[1220px] grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-[0.92fr_1fr]">
        {/* Left Content */}
        <div>
          <h1 className="max-w-[620px] text-[48px] font-bold leading-[1.08] tracking-[-0.055em] text-white md:text-[58px]">
            Commerce Without <br />
            Limits. Powered by <br />
            Shopify Expertise.
          </h1>

          <p className="mt-7 max-w-[640px] text-[19px] font-semibold leading-[1.35] tracking-[-0.035em] text-white">
            From fast-growing startups to established enterprise brands, we
            serve merchants, product companies, and B2B clients that demand more
            than out-of-the-box Shopify.
          </p>

          <Link
            href="/shopify-apps"
            className="mt-10 inline-flex rounded-full bg-[#ffab2e] px-7 py-4 text-[16px] font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffc15a] hover:shadow-[0_12px_28px_rgba(255,171,46,0.35)]"
          >
            Shopify Apps
          </Link>
        </div>

        {/* Right Image Area */}
        <div className="relative flex min-h-[430px] items-center justify-center lg:justify-end">
          {/* Phone */}
          <div className="relative z-20 w-[220px] sm:w-[250px]">
            <img
              src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=700&auto=format&fit=crop"
              alt="Shopify mobile commerce app"
              className="h-[420px] w-full rounded-[34px] border-[8px] border-black object-cover shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
            />

            <div className="absolute left-1/2 top-3 h-[22px] w-[96px] -translate-x-1/2 rounded-full bg-black" />

            <div className="absolute inset-x-[14px] top-[52px] rounded-[18px] bg-white p-3 text-black">
              <div className="mb-3 flex items-center justify-center">
                <span className="text-[16px] font-bold text-[#4f9c2f]">
                  shopify
                </span>
              </div>

              <div className="rounded-[10px] bg-[#f1f7ed] p-3">
                <p className="text-[10px] font-bold text-black">
                  Shop the best products online
                </p>
                <button className="mt-2 rounded bg-[#75b843] px-3 py-1 text-[8px] font-bold text-white">
                  Shop Now
                </button>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="rounded-[8px] border border-[#e5e7eb] bg-white p-2"
                  >
                    <div className="h-[42px] rounded bg-[#eef2f4]" />
                    <p className="mt-1 text-[7px] font-semibold">
                      Product Item
                    </p>
                    <button className="mt-1 w-full rounded bg-[#75b843] py-1 text-[6px] font-bold text-white">
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Businessman */}
          <img
            src="https://pngimg.com/uploads/businessman/businessman_PNG6561.png"
            alt="Shopify business expert"
            className="relative z-30 -ml-8 hidden h-[410px] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)] md:block"
          />
        </div>
      </div>
    </section>
  );
}