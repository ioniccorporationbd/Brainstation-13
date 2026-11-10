import { Gamepad2 } from "lucide-react";

const whyItems = [
  "Our designers are passionate about game design and experts in holistic design",
  "Our artists know how to use their artistic vision to bring unique and mesmerizing worlds to life",
  "Our programmers are experts in creating engaging gameplay mechanics",
  "Our developers are enthusiastic about video games",
];

export default function WhyChooseJourneySection() {
  return (
    <section className="w-full bg-white px-6 pb-[16px] text-[#0a0a0a] md:pb-[24px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Why Us
          </p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">
            Why Choose Us
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1040px] gap-4 sm:grid-cols-2">
          {whyItems.map((item) => (
            <div
              key={item}
              className="flex items-start gap-4 rounded-2xl border border-[#ececec] bg-white p-5 transition-colors duration-300 hover:border-[#c91f28] md:p-6"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28]">
                <Gamepad2 size={18} strokeWidth={2.2} />
              </span>

              <p className="text-[15px] font-semibold leading-[1.6] text-[#565656] md:text-[15.5px]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
