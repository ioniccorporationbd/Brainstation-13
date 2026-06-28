"use client";

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
    name: "Battle.net",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/23/Blizzard_Battle.net_logo.svg",
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
  return (
    <section className="overflow-hidden bg-[#111615] px-4 py-16 text-white">
      <div className="mx-auto max-w-[1500px]">
        <h2 className="text-center text-4xl font-bold text-[#ffa51f] md:text-5xl">
          Platforms
        </h2>

        <div className="mt-12">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={5000}
            slidesPerView={2}
            spaceBetween={70}
            allowTouchMove={false}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 80,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 100,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 120,
              },
            }}
            className="platform-swiper"
          >
            {[...platforms, ...platforms].map((item, index) => (
              <SwiperSlide key={`${item.name}-${index}`}>
                <div className="flex h-[130px] items-center justify-center">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="h-[95px] w-auto max-w-[150px] object-contain brightness-0 invert"
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