"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type SoftwareCaseStudy = {
  id: string;
  logoText: string;
  logoColor: string;
  category: string;
  title: string;
  image: string;
  description: string;
  stats: {
    value: string;
    label: string;
  }[];
  href: string;
};

const caseStudies: SoftwareCaseStudy[] = [
  {
    id: "splash-360",
    logoText: "SPLASH 360°",
    logoColor: "text-[#61b8e9]",
    category: "Complete Email Marketing Solution",
    title: "Splash 360",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop",
    description:
      "Splash 360 is an USA based company who are working with email, social marketing and also in digital printing. We have been developing and upgrading splash since 2008 and it has been a great hit in USA’s market.",
    stats: [
      {
        value: "90%",
        label: "Immense Email Campaigning",
      },
      {
        value: "85%",
        label: "Super Mobile Responsive",
      },
    ],
    href: "/case-studies/splash-360",
  },
];

export default function SoftwareItesCaseStudiesSection() {
  const [active, setActive] = useState<SoftwareCaseStudy>(caseStudies[0]);

  return (
    <section className="relative overflow-hidden bg-white px-6 py-[92px] text-[#11182f]">
      <div className="mx-auto max-w-[1240px]">
        {/* Top Header */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-[42px] font-medium leading-none tracking-[-0.065em] text-[#050b18] md:text-[58px]">
              Case Studies
            </h2>

            <p className="mt-7 max-w-[520px] text-[18px] font-medium leading-[1.45] tracking-[-0.035em] text-[#42637a] md:text-[21px]">
              Check out our case studies that show how innovative solutions
              transformed businesses.
            </p>
          </div>

          <Link
            href="/case-studies"
            className="mt-3 inline-flex w-fit items-center justify-center rounded-full bg-[#ffab2e] px-8 py-4 text-[15px] font-bold tracking-[-0.02em] text-black transition duration-300 hover:-translate-y-1 hover:bg-[#ffc15a] hover:shadow-[0_16px_38px_rgba(255,171,46,0.35)]"
          >
            See all Case Studies
          </Link>
        </div>

        {/* Logo Tabs */}
        <div className="mt-[74px] flex flex-wrap gap-5">
          {caseStudies.map((item) => {
            const isActive = active.id === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item)}
                className={`flex h-[92px] w-[150px] items-center justify-center rounded-[8px] bg-[#f3f6fa] px-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(17,30,64,0.12)] ${
                  isActive
                    ? "border-b-[3px] border-[#3f93cf] shadow-[0_12px_36px_rgba(17,30,64,0.08)]"
                    : "border-b-[3px] border-transparent"
                }`}
              >
                <div className="flex h-[36px] w-[124px] items-center justify-center rounded-[2px] bg-[#122535]">
                  <span
                    className={`text-center text-[15px] font-black leading-none tracking-[-0.03em] ${item.logoColor}`}
                  >
                    {item.logoText}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="mt-[86px] grid grid-cols-1 items-center gap-[78px] lg:grid-cols-[0.9fr_1fr]">
          {/* Left Image */}
          <div className="group relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-[8px] bg-white">
            <div className="absolute inset-x-10 bottom-8 h-16 rounded-full bg-black/10 blur-2xl" />

            <div className="relative z-10 w-full max-w-[620px] overflow-hidden rounded-[12px] bg-white shadow-[0_24px_70px_rgba(17,30,64,0.12)]">
              <img
                key={active.image}
                src={active.image}
                alt={active.title}
                className="h-[330px] w-full object-cover transition duration-700 group-hover:scale-[1.05] md:h-[390px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <p className="text-[22px] font-medium leading-none tracking-[-0.035em] text-[#3f93cf]">
              {active.category}
            </p>

            <h3 className="mt-7 max-w-[760px] text-[36px] font-medium leading-[1.1] tracking-[-0.07em] text-[#050b18] md:text-[46px]">
              {active.title}
            </h3>

            <p className="mt-8 max-w-[720px] text-[19px] font-medium leading-[1.45] tracking-[-0.035em] text-[#42637a] md:text-[22px]">
              {active.description}
            </p>

            <Link
              href={active.href}
              className="mt-10 inline-flex items-center gap-3 text-[18px] font-bold tracking-[-0.025em] text-[#ff9f1c] transition duration-300 hover:gap-5 hover:text-[#3f93cf]"
            >
              View Case Study
              <ArrowRight size={19} strokeWidth={2.2} />
            </Link>

            <div className="mt-10 h-px w-full bg-[#dce7f0]" />

            {/* Stats */}
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {active.stats.map((stat) => (
                <div key={stat.label}>
                  <h4 className="text-[58px] font-light leading-none tracking-[-0.08em] text-[#4fa0d1] md:text-[68px]">
                    {stat.value}
                  </h4>

                  <p className="mt-5 max-w-[280px] text-[18px] font-medium leading-[1.35] tracking-[-0.035em] text-[#42637a] md:text-[21px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>
    </section>
  );
}