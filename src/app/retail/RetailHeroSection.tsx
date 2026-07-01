export default function RetailHeroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[92px] text-[#11182f]">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mx-auto max-w-[920px] text-center">
          <span className="inline-flex rounded-[8px] bg-[#f1f6fb] px-5 py-2 text-[16px] font-bold tracking-[-0.03em] text-[#3f93cf]">
            Industry
          </span>

          <h1 className="mt-7 text-[42px] font-medium leading-[1.08] tracking-[-0.07em] text-[#050b18] md:text-[58px]">
            Retail Services
          </h1>

          <p className="mx-auto mt-7 max-w-[920px] text-[18px] font-medium leading-[1.45] tracking-[-0.035em] text-[#42637a] md:text-[22px]">
            We serve retail enterprises to migrate or adopt digital innovations
            to meet the ever-increasing demand of their consumers, as well as
            stay up to date with the latest innovations. Whether its business
            automation or eCommerce solutions, we provide holistic solutions for
            the industry.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mx-auto mt-[82px] max-w-[1220px]">
          <div className="group overflow-hidden rounded-[8px] bg-[#111E40] shadow-[0_22px_70px_rgba(17,30,64,0.10)]">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1800&auto=format&fit=crop"
              alt="Retail customer payment at point of sale"
              className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-[1.04] md:h-[520px] lg:h-[590px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}