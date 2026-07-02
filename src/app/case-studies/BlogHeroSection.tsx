const circles = Array.from({ length: 36 }, (_, index) => 180 + index * 44);

export default function BlogHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#111E40] px-6 py-[96px] text-white">
      {/* Circle Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {circles.map((size, index) => (
          <div
            key={index}
            className="absolute left-1/2 top-1/2 rounded-full border border-[#1f69a6]/30"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1100px] text-center">
        <p className="text-[16px] font-bold tracking-[-0.02em] text-[#1da7ff]">
          Blog
        </p>

        <h1 className="mt-7 text-[42px] font-medium leading-[1.08] tracking-[-0.08em] text-white md:text-[58px] lg:text-[64px]">
          Insights &amp; Updates
        </h1>

        <p className="mx-auto mt-8 max-w-[820px] text-[18px] font-semibold leading-[1.45] tracking-[-0.035em] text-white md:text-[22px]">
          Stay informed with the latest industry developments, product updates,
          and company news
          <br className="hidden md:block" />
          —all in one place.
        </p>
      </div>
    </section>
  );
}