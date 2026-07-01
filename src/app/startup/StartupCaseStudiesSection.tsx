"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type StartupCaseStudy = {
  id: string;
  logoText: string;
  logoClassName: string;
  logoWrapperClassName: string;
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

const caseStudies: StartupCaseStudy[] = [
  {
    id: "vallie",
    logoText: "vallie",
    logoClassName: "text-[28px] font-bold tracking-[-0.06em] text-white",
    logoWrapperClassName: "bg-[#d90b1f]",
    category: "Web & Mobile App",
    title: "Vallie",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1400&auto=format&fit=crop",
    description:
      "‘Vallie’ is London’s first on-demand valet parking app to reduce people’s worry about finding a parking lot in London. In office hours it’s really an added mental stress whether you will be able to find a place for parking or not.",
    stats: [
      {
        value: "90%",
        label: "Real-time Application in IOS and Android",
      },
      {
        value: "85%",
        label: "Location and car park status tracker",
      },
    ],
    href: "/case-studies/vallie",
  },
  {
    id: "track-my-tradie",
    logoText: "Track my Tradie",
    logoClassName: "text-[18px] font-black leading-[1] text-[#45aee2]",
    logoWrapperClassName: "bg-white",
    category: "Service Marketplace",
    title: "Track my Tradie",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop",
    description:
      "Track my Tradie helps customers connect with service professionals, track job progress, and improve service visibility through a modern digital platform designed for startup growth.",
    stats: [
      {
        value: "88%",
        label: "Service tracking improved",
      },
      {
        value: "82%",
        label: "Customer communication faster",
      },
    ],
    href: "/case-studies/track-my-tradie",
  },
];

export default function StartupCaseStudiesSection() {
  const [active, setActive] = useState<StartupCaseStudy>(caseStudies[0]);

  return (
    <section className="relative overflow-hidden border-b-[4px] border-[#111E40] bg-white px-6 py-[92px] text-[#11182f]">
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
                <div
                  className={`flex h-[48px] w-[124px] items-center justify-center rounded-[2px] px-3 ${item.logoWrapperClassName}`}
                >
                  <span className={item.logoClassName}>{item.logoText}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="mt-[44px] grid grid-cols-1 items-center gap-[78px] lg:grid-cols-[0.9fr_1fr]">
          {/* Left Image */}
          <div className="group relative overflow-hidden rounded-[8px] bg-[#f4f8fc] shadow-[0_22px_70px_rgba(17,30,64,0.08)]">
            <img
              key={active.image}
              src={active.image}
              alt={active.title}
              className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-[1.05] md:h-[520px]"
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-[#e00016]/55 via-[#ff9f1c]/35 to-transparent" />

            <div className="absolute bottom-8 left-8">
              <p className="text-[34px] font-black uppercase leading-none tracking-[-0.04em] text-white md:text-[42px]">
                {active.title}
              </p>
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