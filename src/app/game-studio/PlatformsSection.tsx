"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "@/i18n/LanguageProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const platforms = [
  {
    name: "Epic Games",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/Epic_Games_logo.svg",
  },
  {
    name: "GOG",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/GOG.com_logo.svg",
  },
  {
    name: "Nintendo Switch",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Nintendo_Switch_logo.svg",
  },
  {
    name: "PlayStation",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/00/PlayStation_logo.svg",
  },
  {
    name: "Steam",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg",
  },
  {
    name: "Xbox",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Xbox_one_logo.svg",
  },
];

export default function PlatformsSection() {
  const { t } = useTranslation();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);

    update();
    query.addEventListener("change", update);

    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <section className="w-full overflow-hidden bg-white pb-[56px] text-[#0a0a0a] md:pb-[96px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Distribution")}</p>

          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[46px] lg:text-[50px]">{t("Platforms We Ship On")}</h2>

          <p className="mt-4 text-[15px] font-medium leading-[1.65] text-[#52525B] md:text-[15px]">{t("Games we build run on the stores and consoles your players already use.")}</p>
        </div>

        <div className="mt-8 border-y border-[#ececec] py-6">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={reducedMotion ? 0 : 5000}
            slidesPerView={2}
            spaceBetween={70}
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
              640: { slidesPerView: 3, spaceBetween: 80 },
              1024: { slidesPerView: 5, spaceBetween: 90 },
              1280: { slidesPerView: 6, spaceBetween: 100 },
            }}
          >
            {platforms.map((item) => (
              <SwiperSlide key={item.name}>
                <div className="flex h-[110px] items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="h-[64px] w-auto max-w-[140px] object-contain opacity-60 grayscale transition duration-300 hover:opacity-90 hover:grayscale-0"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
