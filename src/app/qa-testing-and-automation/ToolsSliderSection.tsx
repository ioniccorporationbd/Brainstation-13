"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const tools = [
  "Selenium",
  "Cypress",
  "Playwright",
  "Appium",
  "Apache JMeter",
  "Postman",
  "REST Assured",
  "Cucumber",
  "Jest",
  "Katalon Studio",
];

export default function ToolsSliderSection() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);

    update();
    query.addEventListener("change", update);

    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <section className="w-full overflow-hidden bg-white px-6 pb-[24px] text-[#0a0a0a] md:pb-[32px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Toolchain
          </p>

          <h2 className="text-[26px] font-bold leading-[1.14] tracking-[-0.02em] text-[#0a0a0a] md:text-[34px]">
            Tools We Test With
          </h2>
        </div>

        <div className="mt-8 border-y border-[#ececec] py-4">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={reducedMotion ? 0 : 5000}
            slidesPerView={2}
            spaceBetween={16}
            allowTouchMove={false}
            autoplay={
              reducedMotion
                ? false
                : {
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    reverseDirection: false,
                  }
            }
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 16 },
              1024: { slidesPerView: 4, spaceBetween: 18 },
              1280: { slidesPerView: 5, spaceBetween: 18 },
            }}
          >
            {tools.map((tool) => (
              <SwiperSlide key={tool}>
                <div className="flex h-[84px] items-center justify-center rounded-xl border border-[#ececec] bg-white">
                  <span className="text-[15px] font-bold tracking-[-0.01em] text-[#565656]">
                    {tool}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
