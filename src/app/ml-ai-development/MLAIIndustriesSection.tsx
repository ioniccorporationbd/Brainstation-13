import {
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  Microscope,
  Pill,
  RadioTower,
  ShoppingCart,
} from "lucide-react";

type Industry = {
  title: string;
  icon: React.ElementType;
};

const industries: Industry[] = [
  { title: "Banking & Financial Services", icon: Landmark },
  { title: "Real Estate & Property Management", icon: Building2 },
  { title: "Biomolecular & Scientific Research", icon: Microscope },
  { title: "Pharmaceuticals & Life Sciences", icon: Pill },
  { title: "E-commerce & Retail", icon: ShoppingCart },
  { title: "Healthcare & Diagnostics", icon: HeartPulse },
  { title: "Telecommunications", icon: RadioTower },
  { title: "Education & eLearning", icon: GraduationCap },
  { title: "Manufacturing & Industrial Operations", icon: Factory },
];

export default function MLAIIndustriesSection() {
  return (
    <section className="w-full bg-white px-6 py-[80px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Clients We Have Served In
          </p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">
            Industries
          </h2>

          <p className="mx-auto mt-5 max-w-[640px] text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[17px]">
            We build domain-aligned AI models for the sectors we serve, tailored
            to how each industry actually works.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <article
                key={industry.title}
                className="group flex items-center gap-4 rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <h3 className="text-[15.5px] font-bold leading-[1.4] tracking-[-0.01em] text-[#0a0a0a]">
                  {industry.title}
                </h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
