"use client";

import { useState } from "react";
import {
  Boxes,
  ChevronDown,
  CircleDot,
  Gem,
  Layers3,
  Network,
  Orbit,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

type BtpCard = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const cards: BtpCard[] = [
  {
    title: "Onboard Engineers in Days, Not Months",
    description:
      "Onboard top 1% pre-vetted tech talents in under 2 weeks so your project doesn’t lose momentum.",
    icon: Layers3,
  },
  {
    title: "Scale on Your Terms",
    description:
      "Scale up or down fast, without penalty. Remote, Hybrid, or Flexi-Remote — whatever fits your workflow and budget.",
    icon: Boxes,
  },
  {
    title: "You Focus on Work, We Handle the Team",
    description:
      "Get local account management support in your time zone — no more chasing offshore vendors.",
    icon: CircleDot,
  },
  {
    title: "Engineers Who Already Know Tomorrow",
    description:
      "Our teams come GenAI-trained and upskilled — no waiting, no extra training budget.",
    icon: Gem,
  },
  {
    title: "Teams That Grow as Fast as You Do",
    description:
      "From Trainees to Leads — Engineers evolve fast with our in-house L&D team.",
    icon: Network,
  },
  {
    title: "All the Roles. One Partner.",
    description:
      "Dev, QA, DevOps, Data, AI/ML, UI/UX — get any tech expertise, exactly when you need it.",
    icon: Orbit,
  },
  {
    title: "Engineers Who Stay, Grow, and Deliver",
    description:
      "Top employer brand, structured career growth, continuous learning and challenging projects — team retention ensured.",
    icon: Users,
  },
  {
    title: "Seamless Knowledge, Zero Downtime",
    description:
      "Agile teams, Scrum and Kanban fit — no relearning, full continuity, documented from day one.",
    icon: ShieldCheck,
  },
];

const topBullets = ["Hire in Days", "Scale Your Way", "We Manage", "Future Ready"];
const bottomBullets = ["Grow Together", "One Stop Talent", "Loyal Builders", "Always Flowing"];

export default function BtpDifferentSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white text-[#11182f]">
      <div className="relative bg-[#111E40] px-6 py-[42px] text-center">
        <h2 className="text-[24px] font-bold tracking-[-0.055em] text-white md:text-[30px]">
          Only Keep Reading If This Hits You
        </h2>

        <div className="absolute left-1/2 top-full z-20 flex h-[42px] w-[42px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#4fa0d1] text-white shadow-[0_10px_30px_rgba(79,160,209,0.35)]">
          <ChevronDown size={22} strokeWidth={2.8} />
        </div>
      </div>

      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-[70px] px-6 py-[78px] lg:grid-cols-[0.78fr_1fr]">
        {/* Left sticky content */}
        <div className="lg:sticky lg:top-[110px] lg:h-fit">
          <div className="max-w-[470px]">
            <p className="mb-4 text-[14px] font-bold uppercase tracking-[0.08em] text-[#4fa0d1]">
              Borderless Talent Advantage
            </p>

            <h3 className="text-[40px] font-bold leading-[1.08] tracking-[-0.065em] text-[#11182f] md:text-[48px]">
              What Makes Borderless Tech Professionals (BTP) Different?
            </h3>

            <p className="mt-6 max-w-[380px] text-[16px] font-bold leading-[1.55] tracking-[-0.025em] text-[#42637a]">
              The Fastest, Smartest, Risk-Free Way to Scale — Without the
              Overhead.
            </p>
          </div>

          <div className="mt-[92px]">
            <div className="mb-5 h-[2px] w-[32px] bg-[#4fa0d1]" />

            <ul className="space-y-[12px]">
              {topBullets.map((item, index) => (
                <li
                  key={item}
                  className={`flex items-center gap-3 text-[15px] font-bold ${
                    index === activeIndex % topBullets.length
                      ? "text-[#4fa0d1]"
                      : "text-[#11182f]"
                  }`}
                >
                  <span className="h-[5px] w-[5px] rounded-full bg-current" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-[360px] hidden lg:block">
            <ul className="space-y-[12px]">
              {bottomBullets.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[15px] font-bold text-[#11182f]"
                >
                  <span className="h-[5px] w-[5px] rounded-full bg-current" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Y Axis Swiper Cards */}
        <div className="relative">
          <div className="pointer-events-none absolute -left-10 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#d8e7ef] to-transparent lg:block" />

          <Swiper
            modules={[Autoplay, Mousewheel, Pagination]}
            direction="vertical"
            slidesPerView={2.15}
            spaceBetween={28}
            speed={850}
            mousewheel={{
              forceToAxis: true,
              releaseOnEdges: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".btp-different-pagination",
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="btp-different-swiper h-[760px]"
            breakpoints={{
              0: {
                direction: "vertical",
                slidesPerView: 1.15,
                spaceBetween: 22,
              },
              768: {
                direction: "vertical",
                slidesPerView: 1.55,
                spaceBetween: 24,
              },
              1024: {
                direction: "vertical",
                slidesPerView: 2.15,
                spaceBetween: 28,
              },
            }}
          >
            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <SwiperSlide key={card.title}>
                  <article className="group relative flex min-h-[330px] overflow-hidden rounded-[7px] bg-[#111E40] px-[38px] py-[38px] text-white shadow-[0_18px_50px_rgba(17,30,64,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(17,30,64,0.20)]">
                    <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                      <div className="absolute -right-16 -top-16 h-[190px] w-[190px] rounded-full bg-[#4fa0d1]/10 blur-2xl" />
                      <div className="absolute -bottom-20 left-10 h-[170px] w-[170px] rounded-full bg-[#ffb22c]/10 blur-2xl" />
                    </div>

                    <div className="relative z-10 flex w-full flex-col justify-between">
                      <Icon
                        size={42}
                        strokeWidth={1.35}
                        className="text-white/80"
                      />

                      <div className="mt-[70px]">
                        <h4 className="max-w-[430px] text-[32px] font-bold leading-[1.08] tracking-[-0.055em] text-white md:text-[36px]">
                          {card.title}
                        </h4>

                        <p className="mt-7 max-w-[430px] text-[17px] font-bold leading-[1.55] tracking-[-0.025em] text-white/85">
                          {card.description}
                        </p>
                      </div>
                    </div>

                    <span className="absolute bottom-5 right-7 text-[56px] font-bold leading-none text-white/[0.04]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="btp-different-pagination absolute -right-10 top-1/2 hidden -translate-y-1/2 flex-col gap-2 lg:flex" />
        </div>
      </div>

      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <Sparkles size={26} className="text-[#20a7e8]" />
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>

      <style jsx global>{`
        .btp-different-swiper {
          padding-right: 4px;
        }

        .btp-different-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #b7c6d3;
          opacity: 1;
          margin: 0 !important;
          transition: all 0.3s ease;
        }

        .btp-different-pagination .swiper-pagination-bullet-active {
          height: 24px;
          border-radius: 999px;
          background: #4fa0d1;
        }
      `}</style>
    </section>
  );
}