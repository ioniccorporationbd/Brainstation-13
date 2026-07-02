const circles = Array.from({ length: 36 }, (_, index) => 180 + index * 44);

export default function ContactHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#111E40] px-6 py-[88px] text-white">
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

      <div className="relative z-10 mx-auto max-w-[980px] text-center">
        <p className="text-[16px] font-bold tracking-[-0.02em] text-[#1da7ff]">
          Contact Us
        </p>

        <h1 className="mx-auto mt-6 max-w-[720px] text-[42px] font-medium leading-[1.08] tracking-[-0.08em] text-white md:text-[56px] lg:text-[62px]">
          Get in Touch - Your Vision, Our Expertise
        </h1>

        <p className="mx-auto mt-8 max-w-[760px] text-[17px] font-semibold leading-[1.45] tracking-[-0.035em] text-white md:text-[20px]">
          Have a project in mind? Our experts are just a message away. Let&apos;s
          collaborate to create cutting-edge solutions that drive growth
        </p>
      </div>
    </section>
  );
}