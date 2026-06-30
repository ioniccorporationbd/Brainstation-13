"use client";

import {
  BadgeCheck,
  Box,
  Boxes,
  BriefcaseBusiness,
  Clock3,
  Globe2,
  Handshake,
  Network,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

type FeatureCard = {
  title: string;
  description: string;
  highlight?: boolean;
  icon: React.ElementType;
};

const cards: FeatureCard[] = [
  {
    title: "2 Weeks Deployment",
    description: "Onboard pre-vetted tech talents, fast.",
    icon: Box,
  },
  {
    title: "Local Oversight",
    description: "Managed from The USA.",
    icon: Network,
  },
  {
    title: "Flexible Models",
    description: "Remote, Hybrid, or Flexi-Remote — Flexible Monthly Contract.",
    icon: Boxes,
  },
  {
    title: "2-Week Moneyback Guarantee",
    description: "Only pay if you’re satisfied.",
    icon: ShieldCheck,
    highlight: true,
  },
  {
    title: "Pre-vetted Engineers",
    description: "Access skilled developers already screened for quality.",
    icon: BadgeCheck,
  },
  {
    title: "Dedicated Teams",
    description: "Scale with dedicated offshore teams for long-term delivery.",
    icon: Users,
  },
  {
    title: "Fast Hiring",
    description: "Reduce hiring delays and start projects faster.",
    icon: Clock3,
  },
  {
    title: "Global Talent Pool",
    description: "Hire experienced professionals across multiple technologies.",
    icon: Globe2,
  },
  {
    title: "Account Management",
    description: "Get reliable delivery support with local management.",
    icon: Handshake,
  },
  {
    title: "Enterprise Ready",
    description: "Built for startups, SMEs, and enterprise delivery needs.",
    icon: BriefcaseBusiness,
  },
];

function BtpCard({ card, index }: { card: FeatureCard; index: number }) {
  const Icon = card.icon;

  return (
    <article className="group relative h-[255px] w-[318px] shrink-0 overflow-hidden rounded-[18px] border border-white/0 bg-[#111E40] px-[28px] py-[28px] text-white shadow-[0_18px_50px_rgba(17,30,64,0.12)] transition-all duration-300 hover:-translate-y-2 hover:border-[#4fa0d1]/70 hover:bg-[#18315a] hover:shadow-[0_28px_80px_rgba(17,30,64,0.22)]">
      {/* SIM-card chip style */}
      <div className="absolute right-[24px] top-[24px] grid h-[46px] w-[58px] grid-cols-2 gap-[4px] rounded-[10px] border border-white/20 bg-white/8 p-[7px] opacity-60 transition-all duration-300 group-hover:border-[#ffb22c]/60 group-hover:bg-[#ffb22c]/10 group-hover:opacity-100">
        <span className="rounded-[4px] bg-white/18" />
        <span className="rounded-[4px] bg-white/18" />
        <span className="rounded-[4px] bg-white/18" />
        <span className="rounded-[4px] bg-white/18" />
      </div>

      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-[190px] w-[190px] rounded-full bg-[#4fa0d1]/0 blur-2xl transition-all duration-300 group-hover:bg-[#4fa0d1]/25" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[210px] w-[210px] rounded-full bg-[#ffb22c]/0 blur-2xl transition-all duration-300 group-hover:bg-[#ffb22c]/12" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-center justify-between gap-4">
          <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#1b365f] text-[#78c9f3] ring-1 ring-white/10 transition-all duration-300 group-hover:bg-[#4fa0d1] group-hover:text-white">
            <Icon size={28} strokeWidth={1.6} />
          </div>

          <span className="text-[16px] font-bold leading-none text-white/20 transition-all duration-300 group-hover:text-[#ffb22c]/70">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div>
          <h3
            className={`max-w-[250px] text-[28px] font-bold leading-[1.08] tracking-[-0.06em] ${
              card.highlight ? "text-[#ffb22c]" : "text-white"
            }`}
          >
            {card.title}
          </h3>

          <p className="mt-[18px] max-w-[250px] text-[15px] font-bold leading-[1.45] tracking-[-0.035em] text-white/82">
            {card.description}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#4fa0d1] transition-all duration-300 group-hover:w-full" />
    </article>
  );
}

export default function BorderlessTechProfessionalsSection() {
  const repeatedCards = [...cards, ...cards, ...cards];

  return (
    <section className="relative overflow-hidden bg-[#f4f8fc] px-6 py-[96px] text-[#11182f]">
      <div className="mx-auto max-w-[1220px]">
        <p className="mb-5 text-[14px] font-bold uppercase tracking-[0.16em] text-[#4fa0d1]">
          Borderless Talent Advantage
        </p>

        <h2 className="max-w-[760px] text-[42px] font-bold leading-[1.08] tracking-[-0.07em] text-[#11182f] md:text-[56px]">
          Borderless Tech Professionals (BTP)
        </h2>

        <p className="mt-6 max-w-[660px] text-[19px] font-medium leading-[1.6] tracking-[-0.035em] text-[#42637a]">
          Scale faster with pre-vetted engineers, flexible engagement models,
          local oversight, and risk-free onboarding support.
        </p>
      </div>

      <div className="relative mt-[70px] overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-[150px] bg-gradient-to-r from-[#f4f8fc] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-[150px] bg-gradient-to-l from-[#f4f8fc] to-transparent" />

        <Swiper
          modules={[Autoplay, FreeMode]}
          loop
          freeMode
          slidesPerView="auto"
          spaceBetween={28}
          speed={7500}
          allowTouchMove={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="btp-card-swiper"
        >
          {repeatedCards.map((card, index) => (
            <SwiperSlide key={`${card.title}-${index}`} className="!w-auto">
              <BtpCard card={card} index={index % cards.length} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .btp-card-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
          align-items: center;
        }
      `}</style>
    </section>
  );
}