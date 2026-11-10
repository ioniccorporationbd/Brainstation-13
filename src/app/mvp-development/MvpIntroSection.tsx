import Image from "next/image";
import { Check } from "lucide-react";

const highlights = ["Validate faster", "Reduce build risk", "Launch lean"];

export default function MvpIntroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[80px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto max-w-[1240px]">
        {/* Centered Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            MVP Foundation
          </p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">
            What Is an MVP?
          </h2>

          <p className="mx-auto mt-5 max-w-[680px] text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[17px]">
            A Minimum Viable Product is the simplest version of your product
            that delivers core value to real users — so you can test
            product-market fit, gather feedback, and iterate quickly without
            overbuilding.
          </p>
        </div>

        {/* Image + Points */}
        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="group relative h-[320px] w-full overflow-hidden rounded-2xl border border-[#ececec] md:h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1400&auto=format&fit=crop"
              alt="MVP planning discussion with a business team"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <div>
            <h3 className="text-[22px] font-bold leading-[1.3] tracking-[-0.015em] text-[#0a0a0a] md:text-[26px]">
              Focus on what matters, prove what works
            </h3>

            <p className="mt-4 text-[15px] font-medium leading-[1.6] tracking-[-0.01em] text-[#565656] md:text-[16px]">
              We strip the product down to the essential features that validate
              your idea, saving time, budget, and risk compared to full-scale
              development.
            </p>

            <ul className="mt-7 space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28]">
                    <Check size={16} strokeWidth={2.6} />
                  </span>
                  <span className="text-[16px] font-bold tracking-[-0.01em] text-[#0a0a0a]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
