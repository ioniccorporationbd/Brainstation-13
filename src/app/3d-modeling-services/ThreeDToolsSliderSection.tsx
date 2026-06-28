"use client";

import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

type ToolLogo = {
  name: string;
  image: string;
  className?: string;
};

const tools: ToolLogo[] = [
  {
    name: "OctaneRender",
    image: "https://cdn.simpleicons.org/octanerender/000000",
    className: "h-[58px]",
  },
  {
    name: "Redshift",
    image: "https://cdn.simpleicons.org/redshift/ED1C24",
    className: "h-[58px]",
  },
  {
    name: "Unity",
    image: "https://cdn.simpleicons.org/unity/000000",
    className: "h-[76px]",
  },
  {
    name: "Blender",
    image: "https://cdn.simpleicons.org/blender/F5792A",
    className: "h-[72px]",
  },
  {
    name: "Unreal Engine",
    image: "https://cdn.simpleicons.org/unrealengine/000000",
    className: "h-[86px]",
  },
  {
    name: "KeyShot",
    image: "https://logo.clearbit.com/keyshot.com",
    className: "h-[70px]",
  },
  {
    name: "Cinema 4D",
    image: "https://cdn.simpleicons.org/cinema4d/011A6A",
    className: "h-[74px]",
  },
  {
    name: "Autodesk",
    image: "https://cdn.simpleicons.org/autodesk/0696D7",
    className: "h-[72px]",
  },
  {
    name: "Sketchfab",
    image: "https://cdn.simpleicons.org/sketchfab/1CAAD9",
    className: "h-[68px]",
  },
  {
    name: "NVIDIA",
    image: "https://cdn.simpleicons.org/nvidia/76B900",
    className: "h-[66px]",
  },
];

const scrollingTools = [...tools, ...tools, ...tools, ...tools];

export default function ThreeDToolsSliderSection() {
  return (
    <section className="relative w-full overflow-hidden border-y-[3px] border-[#101d3a] bg-white py-[72px] md:py-[82px] lg:py-[92px]">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[280px] bg-gradient-to-r from-[#eaf7ff] via-white/80 to-transparent opacity-70" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[280px] bg-gradient-to-l from-[#eaf7ff] via-white/80 to-transparent opacity-70" />

      <div className="pointer-events-none absolute inset-y-0 left-[-30%] w-[260px] rotate-12 bg-gradient-to-r from-transparent via-[#00a8ff]/10 to-transparent blur-[2px] animate-[logoShine_5s_linear_infinite]" />

      <div className="relative mx-auto w-full max-w-[1600px]">
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop={true}
          freeMode={{
            enabled: true,
            momentum: false,
          }}
          slidesPerView="auto"
          spaceBetween={76}
          speed={3900}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          allowTouchMove={false}
          className="three-d-tools-swiper"
        >
          {scrollingTools.map((tool, index) => (
            <SwiperSlide key={`${tool.name}-${index}`} className="!w-auto">
              <div className="group flex h-[145px] min-w-[210px] items-center justify-center">
                <div className="relative flex h-[112px] min-w-[190px] items-center justify-center rounded-[14px] px-5 transition duration-300 group-hover:bg-[#f7fbff] group-hover:shadow-[0_20px_55px_rgba(0,115,180,0.12)]">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    loading="lazy"
                    className={`${
                      tool.className ?? "h-[68px]"
                    } w-auto max-w-[220px] object-contain transition duration-300 group-hover:scale-105`}
                  />

                  <div className="pointer-events-none absolute inset-0 rounded-[14px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .three-d-tools-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
          align-items: center;
        }

        @keyframes logoShine {
          0% {
            transform: translateX(0) rotate(12deg);
          }
          100% {
            transform: translateX(170vw) rotate(12deg);
          }
        }

        @media (max-width: 767px) {
          .three-d-tools-swiper .swiper-slide div {
            min-width: 160px;
          }
        }
      `}</style>
    </section>
  );
}