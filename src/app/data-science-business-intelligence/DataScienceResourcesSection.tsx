import { Check } from "lucide-react";

const resources = [
  "TensorFlow Developers",
  "AWS Solution Architect Associates",
  "AWS Specialization ML",
  "Alteryx",
  "MIT x Pro",
  "Azure Big Data",
];

export default function DataScienceResourcesSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f7] px-6 py-[120px] text-black">
      <div className="mx-auto grid max-w-[1220px] grid-cols-1 items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left Title */}
        <div className="lg:pl-8">
          <p className="text-[14px] font-medium uppercase tracking-[0.12em] text-black">
            Our Certified
          </p>

          <h2 className="mt-7 text-[62px] font-light leading-[0.98] tracking-[-0.07em] text-black md:text-[78px]">
            Resources
          </h2>

          <div className="mt-9 h-[2px] w-[88px] bg-[#28a8e0]" />
        </div>

        {/* Right List */}
        <div className="mx-auto w-full max-w-[650px]">
          <ul className="space-y-[24px]">
            {resources.map((item) => (
              <li
                key={item}
                className="group flex items-center gap-7 text-left"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center text-[#69bee8] transition duration-300 group-hover:scale-110 group-hover:text-[#ffab2e]">
                  <Check size={38} strokeWidth={3.4} />
                </span>

                <span className="text-[24px] font-light leading-[1.2] tracking-[-0.04em] text-black transition duration-300 group-hover:text-[#28a8e0] md:text-[29px]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}