import { Check } from "lucide-react";

const industries = [
  "Healthcare & Life Science",
  "Retail",
  "Manufacturing",
  "Aerospace",
  "Ecommerce",
];

export default function DataScienceIndustriesCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#1FA2D3] text-white">
      <div className="relative mx-auto grid min-h-[590px] max-w-[1600px] grid-cols-1 items-start gap-12 px-6 py-[76px] lg:grid-cols-[0.85fr_1fr_1fr] lg:px-20">
        <div className="pt-8">
          <p className="text-[14px] font-medium uppercase tracking-[0.08em] text-white">
            Our Experience In
          </p>

          <h2 className="mt-7 text-[56px] font-light leading-none tracking-[-0.06em] text-white md:text-[70px]">
            Industries
          </h2>

          <div className="mt-8 h-[2px] w-[88px] bg-[#158BB9]" />
        </div>

        <div className="pt-4">
          <ul className="space-y-8">
            {industries.map((item) => (
              <li
                key={item}
                className="group flex items-center gap-6 text-[24px] font-medium uppercase leading-[1.2] tracking-[0.15em] text-white md:text-[28px]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center text-white transition duration-300 group-hover:scale-110 group-hover:text-[#FFAB2E]">
                  <Check size={30} strokeWidth={3.2} />
                </span>

                <span className="transition duration-300 group-hover:text-[#FFAB2E]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <img
            src="https://ouch-cdn2.icons8.com/vSxO1lSeMTLP1ZdGCH55K6rR-betxjlqc9tLhPBP_fM/rs:fit:1200:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjU4/LzNhZjE0N2QwLWM1/MGItNDg3OC1iZjU2LWQ2ZjM0MzQ3Y2I4Ny5zdmc.png"
            alt="Business analytics illustration"
            className="h-auto w-full max-w-[560px] object-contain"
          />
        </div>
      </div>

      <div className="bg-[#0E88AA] px-6 py-[38px]">
        <div className="mx-auto flex max-w-[1220px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-[28px] font-bold leading-[1.2] tracking-[-0.04em] text-white md:text-[34px]">
              Would like to start a project with us?
            </h3>

            <p className="mt-5 text-[15px] font-medium leading-[1.5] text-white">
              Feel free to drop an email{" "}
              <a
                href="mailto:sales@brainstation-23.com"
                className="font-bold text-white hover:text-[#FFAB2E]"
              >
                sales@brainstation-23.com
              </a>{" "}
              and share your idea.
            </p>
          </div>

          <a
            href="tel:+8801404055226"
            className="inline-flex w-fit items-center justify-center rounded-full bg-[#FFAB2E] px-8 py-4 text-[16px] font-bold tracking-[-0.02em] text-black transition duration-300 hover:-translate-y-1 hover:bg-[#FFC15A] hover:shadow-[0_16px_38px_rgba(255,171,46,0.35)]"
          >
            +8801404055226
          </a>
        </div>
      </div>
    </section>
  );
}