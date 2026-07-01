"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type TelecomCaseStudy = {
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

const caseStudies: TelecomCaseStudy[] = [
  {
    id: "bt",
    logoText: "BT",
    logoColor: "text-[#1b4f9c]",
    category: "Order Management Journey",
    title: "British Telecom",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
    description:
      "We developed a customer facing website and portal for BT. The application receives huge orders each year and we helped BT to process their whole order journey. We used Adobe Experience Manager (AEM) - a comprehensive content management (CMS) tool for the large enterprise sector. We have helped BT Group with infrastructure and dev support.",
    stats: [
      {
        value: "90%",
        label: "Online bill pay",
      },
      {
        value: "85%",
        label: "Track an order",
      },
    ],
    href: "/case-studies/british-telecom",
  },
  {
    id: "telenor",
    logoText: "telenor",
    logoColor: "text-[#1889c9]",
    category: "Telecom Digital Platform",
    title: "Telenor",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1400&auto=format&fit=crop",
    description:
      "We helped telecom teams improve customer engagement, self-service access, digital content management, and operational visibility through scalable software platforms and enterprise integration support.",
    stats: [
      {
        value: "88%",
        label: "Customer self-service",
      },
      {
        value: "80%",
        label: "Faster support flow",
      },
    ],
    href: "/case-studies/telenor",
  },
];

export default function TelecomCaseStudiesSection() {
  const [active, setActive] = useState<TelecomCaseStudy>(caseStudies[0]);

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
                <span
                  className={`text-center text-[24px] font-black leading-none tracking-[-0.05em] ${item.logoColor}`}
                >
                  {item.logoText}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="mt-[86px] grid grid-cols-1 items-center gap-[78px] lg:grid-cols-[0.9fr_1fr]">
          {/* Left Image */}
          <div className="group relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-[8px] bg-white">
            <div className="absolute inset-x-8 bottom-6 h-16 rounded-full bg-black/10 blur-2xl" />

            <img
              key={active.image}
              src={active.image}
              alt={active.title}
              className="relative z-10 h-[330px] w-full max-w-[620px] rounded-[12px] object-cover shadow-[0_24px_70px_rgba(17,30,64,0.12)] transition duration-700 group-hover:scale-[1.05] md:h-[390px]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white via-transparent to-[#3f93cf]/5" />
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

                  <p className="mt-5 text-[18px] font-medium leading-[1.35] tracking-[-0.035em] text-[#42637a] md:text-[21px]">
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