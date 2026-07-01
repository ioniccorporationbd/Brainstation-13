"use client";

import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

type BankLogo = {
  name: string;
  image: string;
};

const bankLogos: BankLogo[] = [
  {
    name: "Southeast Bank PLC",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Southeast_Bank_Limited_Logo.svg/512px-Southeast_Bank_Limited_Logo.svg.png",
  },
  {
    name: "Modhumoti Bank Limited",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Modhumoti_Bank_Limited_Logo.svg/512px-Modhumoti_Bank_Limited_Logo.svg.png",
  },
  {
    name: "City Bank",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/84/City_Bank_logo.svg/512px-City_Bank_logo.svg.png",
  },
  {
    name: "UCB Bank",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/United_Commercial_Bank_Logo.svg/512px-United_Commercial_Bank_Logo.svg.png",
  },
  {
    name: "AB Bank",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/AB_Bank_Limited_logo.svg/512px-AB_Bank_Limited_logo.svg.png",
  },
  {
    name: "Eastern Bank PLC",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Eastern_Bank_Logo.svg/512px-Eastern_Bank_Logo.svg.png",
  },
  {
    name: "Dutch Bangla Bank",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Dutch-Bangla_Bank_Limited_logo.svg/512px-Dutch-Bangla_Bank_Limited_logo.svg.png",
  },
];

export default function DigitalBankingTrustedBanksSection() {
  return (
    <section className="relative overflow-hidden border-t-[3px] border-[#111E40] bg-white px-6 py-[70px] text-[#050b18]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[560px] text-center">
          <span className="mx-auto mb-5 block h-[1px] w-2 bg-[#111E40]" />

          <h2 className="text-[22px] font-medium leading-[1.28] tracking-[-0.055em] text-[#050b18] md:text-[26px]">
            Banks and financial institutions trust iBank23
            <br className="hidden md:block" />
            to power their digital banking services.
          </h2>
        </div>

        <div className="mt-[66px]">
          <Swiper
            modules={[Autoplay, FreeMode]}
            loop
            freeMode
            speed={4500}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            slidesPerView={2}
            spaceBetween={42}
            breakpoints={{
              480: {
                slidesPerView: 3,
                spaceBetween: 46,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 56,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 64,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 72,
              },
            }}
            className="trusted-bank-swiper"
          >
            {[...bankLogos, ...bankLogos].map((logo, index) => (
              <SwiperSlide key={`${logo.name}-${index}`}>
                <div className="flex h-[78px] items-center justify-center">
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="max-h-[54px] w-auto max-w-[180px] object-contain grayscale-0 transition duration-300 hover:scale-105"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .trusted-bank-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
          align-items: center;
        }
      `}</style>
    </section>
  );
}