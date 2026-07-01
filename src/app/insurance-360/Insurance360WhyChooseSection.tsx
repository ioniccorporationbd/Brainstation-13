import {
  FileCheck2,
  ChartNoAxesCombined,
  Bot,
  Box,
} from "lucide-react";

type WhyChooseItem = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const whyChooseItems: WhyChooseItem[] = [
  {
    title: "One Unified Platform",
    description:
      "Brings policy administration, claims, customer self-service, and analytics into one secure interface.",
    icon: FileCheck2,
  },
  {
    title: "Real-Time Operational Visibility",
    description:
      "Live dashboards show claims, policy actions, service metrics, and performance insights.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "AI-Driven Process Automation",
    description:
      "Automate repetitive tasks, eliminate manual errors, and accelerate cycle times.",
    icon: Bot,
  },
  {
    title: "Seamless Integration",
    description:
      "Connect with core systems such as policy administration systems, CRMs, ERPs, and customer portals.",
    icon: Box,
  },
];

export default function Insurance360WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[96px] text-[#07112b]">
      <div className="mx-auto max-w-[1180px]">
        {/* Header */}
        <div className="mx-auto max-w-[760px] text-center">
          <span className="inline-flex rounded-full bg-[#eaf6fc] px-5 py-2 text-[14px] font-bold tracking-[-0.02em] text-[#079ed8]">
            Why Insurance 360
          </span>

          <h2 className="mt-6 text-[40px] font-black leading-[1.08] tracking-[-0.075em] text-[#07112b] md:text-[56px] lg:text-[62px]">
            Why Enterprise Insurers
            <br />
            Choose Insurance 360
          </h2>

          <p className="mx-auto mt-6 max-w-[650px] text-[17px] font-medium leading-[1.55] tracking-[-0.035em] text-[#42637a] md:text-[19px]">
            A secure, scalable, and connected insurance platform built to
            simplify operations, improve customer experience, and accelerate
            digital transformation.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-[72px] grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
          {whyChooseItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[26px] border border-[#e2edf5] bg-[#f8fbfe] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#0aa7df]/60 hover:bg-white hover:shadow-[0_28px_80px_rgba(17,30,64,0.12)]"
              >
                {/* Hover top line */}
                <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-[#08a7df] via-[#54c8ee] to-[#ffab2e] opacity-0 transition duration-300 group-hover:opacity-100" />

                {/* Light circle */}
                <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#08a7df]/10 blur-[45px] transition duration-300 group-hover:bg-[#08a7df]/20" />

                <div className="relative z-10">
                  <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[14px] bg-[#08a7df] text-white shadow-[0_16px_35px_rgba(8,167,223,0.25)] transition duration-300 group-hover:scale-105">
                    <Icon size={28} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-8 text-[24px] font-black leading-[1.12] tracking-[-0.055em] text-[#07112b] md:text-[28px]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[16px] font-medium leading-[1.58] tracking-[-0.025em] text-[#42637a] md:text-[17px]">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}