"use client";

import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const firstRowTech = [
  "Laravel",
  "Rust",
  "Docker",
  "NGINX",
  "Node.js",
  "Next.js",
  "React",
  "TypeScript",
];

const secondRowTech = [
  "OpenSea",
  "TypeORM",
  "Kong Gateway",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "GraphQL",
  "Solidity",
];

export default function TechStackSwiperSection() {
  return (
    <section className="relative overflow-hidden bg-[#111E40] px-6 py-[92px] text-white">
      <div className="mx-auto max-w-[1480px]">
        <div className="text-center">
          <h2 className="text-[42px] font-normal leading-tight tracking-[-0.055em] text-white md:text-[56px]">
            Yes! We cover your tech stack.
          </h2>

          <p className="mt-6 text-[20px] font-normal leading-[1.5] text-white/85">
            Our 900+ team has expertise in almost every programming language.
          </p>
        </div>

        <div className="mt-[92px] space-y-[58px]">
          {/* Row 1: Right to Left */}
          <div className="relative overflow-hidden">
            <Swiper
              modules={[Autoplay, FreeMode]}
              loop
              freeMode
              allowTouchMove={false}
              slidesPerView="auto"
              spaceBetween={110}
              speed={6500}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              className="tech-row-one"
            >
              {[...firstRowTech, ...firstRowTech, ...firstRowTech].map(
                (tech, index) => (
                  <SwiperSlide
                    key={`${tech}-row-1-${index}`}
                    className="!w-auto"
                  >
                    <div className="flex min-w-[220px] items-center justify-center">
                      <span className="text-[44px] font-bold leading-none tracking-[-0.04em] text-white/90 md:text-[56px]">
                        {tech}
                      </span>
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>

          {/* Row 2: Left to Right */}
          <div className="relative overflow-hidden">
            <Swiper
              modules={[Autoplay, FreeMode]}
              loop
              freeMode
              allowTouchMove={false}
              slidesPerView="auto"
              spaceBetween={110}
              speed={6500}
              autoplay={{
                delay: 0,
                reverseDirection: true,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              className="tech-row-two"
            >
              {[...secondRowTech, ...secondRowTech, ...secondRowTech].map(
                (tech, index) => (
                  <SwiperSlide
                    key={`${tech}-row-2-${index}`}
                    className="!w-auto"
                  >
                    <div className="flex min-w-[260px] items-center justify-center">
                      <span className="text-[44px] font-bold leading-none tracking-[-0.04em] text-white/90 md:text-[56px]">
                        {tech}
                      </span>
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .tech-row-one .swiper-wrapper,
        .tech-row-two .swiper-wrapper {
          transition-timing-function: linear !important;
          align-items: center;
        }
      `}</style>
    </section>
  );
}