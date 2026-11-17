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
import { getTranslator } from "@/i18n/server";

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

export default async function MLAIIndustriesSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white py-[52px] text-[#0a0a0a] md:py-[104px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-normal text-[#c91f28]">{t("Clients We Have Served In")}</p>

          <h2 className="text-[clamp(27px,8vw,32px)] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[46px] lg:text-[50px] text-balance">{t("Industries")}</h2>

          <p className="mx-auto mt-5 max-w-[640px] text-[15px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B] md:text-[16px] text-pretty">{t("We build domain-aligned AI models for the sectors we serve, tailored to how each industry actually works.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <article
                key={industry.title}
                className="group flex items-center gap-4 rounded-2xl border border-[#ececec] bg-white p-7 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <h3 className="text-[15.5px] md:text-[16px] leading-[1.35] font-semibold tracking-[-0.01em] text-[#0a0a0a] text-balance">
                  {t(industry.title)}
                </h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
