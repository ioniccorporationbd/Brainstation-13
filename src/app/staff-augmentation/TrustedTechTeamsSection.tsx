"use client";

import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

type LogoItem = {
  name: string;
  text: string;
  mark?: string;
};

const logos: LogoItem[] = [
  {
    name: "Virtual Affairs",
    text: "Virtual Affairs",
    mark: "◆",
  },
  {
    name: "Vallie",
    text: "vallie",
    mark: "◇",
  },
  {
    name: "Robi",
    text: "robi",
    mark: "◩",
  },
  {
    name: "VEON",
    text: "VEON",
  },
  {
    name: "Sanofi",
    text: "SANOFI",
    mark: "●",
  },
  {
    name: "ShareBike",
    text: "ShareBike",
  },
  {
    name: "Syngenta",
    text: "syngenta",
  },
  {
    name: "Brain Station",
    text: "BS23",
    mark: "⬢",
  },
  {
    name: "Tech Team",
    text: "TechCorp",
    mark: "◈",
  },
  {
    name: "Enterprise",
    text: "ENTERPRISE",
  },
];

function LogoCard({ logo }: { logo: LogoItem }) {
  return (
    <div className="group flex h-[70px] min-w-[180px] items-center justify-center">
      <div className="flex items-center gap-2 text-white/55 grayscale transition duration-300 group-hover:text-white group-hover:opacity-100">
        {logo.mark && (
          <span className="text-[26px] font-bold leading-none text-white/45 transition duration-300 group-hover:text-white">
            {logo.mark}
          </span>
        )}

        <span
          className={`font-bold leading-none tracking-[-0.04em] ${
            logo.name === "VEON"
              ? "text-[34px] font-normal tracking-[0.12em]"
              : logo.name === "Sanofi"
                ? "text-[27px] tracking-[0.06em]"
                : logo.name === "Virtual Affairs"
                  ? "text-[17px] font-medium"
                  : "text-[27px]"
          }`}
        >
          {logo.text}
        </span>
      </div>
    </div>
  );
}

export default function TrustedTechTeamsSection() {
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="relative overflow-hidden bg-[#111E40] px-6 py-[88px] text-white">
      <div className="mx-auto max-w-[1320px]">
        <div className="text-center">
          <h2 className="text-[24px] font-bold leading-[1.35] tracking-[-0.045em] text-white md:text-[30px]">
            Trusted By Fast-Moving Tech Teams <br />
            From Startups to Enterprises
          </h2>
        </div>
      </div>

      <div className="relative mt-[94px] overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[150px] bg-gradient-to-r from-[#111E40] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[150px] bg-gradient-to-l from-[#111E40] to-transparent" />

        <Swiper
          modules={[Autoplay, FreeMode]}
          loop={true}
          freeMode={true}
          slidesPerView="auto"
          spaceBetween={72}
          speed={6500}
          allowTouchMove={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="trusted-tech-swiper"
        >
          {repeatedLogos.map((logo, index) => (
            <SwiperSlide key={`${logo.name}-${index}`} className="!w-auto">
              <LogoCard logo={logo} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-white/35">
        Powered by NeuralFlow
      </span>

      <style jsx global>{`
        .trusted-tech-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
          align-items: center;
        }
      `}</style>
    </section>
  );
}