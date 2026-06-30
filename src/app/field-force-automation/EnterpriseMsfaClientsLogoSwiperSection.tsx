"use client";

import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

type ClientLogo = {
  name: string;
  logo: string;
};

const clientLogos: ClientLogo[] = [
  {
    name: "Sharif Pharmaceuticals",
    logo: "https://logo.clearbit.com/sharifpharma.com.bd",
  },
  {
    name: "Bata",
    logo: "https://logo.clearbit.com/bata.com",
  },
  {
    name: "Incepta Pharmaceuticals",
    logo: "https://logo.clearbit.com/inceptapharma.com",
  },
  {
    name: "Berger Paints Bangladesh",
    logo: "https://logo.clearbit.com/bergerbd.com",
  },
  {
    name: "Beacon Pharmaceuticals",
    logo: "https://logo.clearbit.com/beaconpharma.com.bd",
  },
  {
    name: "Square Pharmaceuticals",
    logo: "https://logo.clearbit.com/squarepharma.com.bd",
  },
  {
    name: "ACI Limited",
    logo: "https://logo.clearbit.com/aci-bd.com",
  },
  {
    name: "Beximco Pharmaceuticals",
    logo: "https://logo.clearbit.com/beximcopharma.com",
  },
  {
    name: "Renata Limited",
    logo: "https://logo.clearbit.com/renata-ltd.com",
  },
  {
    name: "Eskayef Pharmaceuticals",
    logo: "https://logo.clearbit.com/skfbd.com",
  },
];

export default function EnterpriseMsfaClientsLogoSwiperSection() {
  return (
    <section className="relative overflow-hidden border-y-[6px] border-[#111E40] bg-white px-6 py-[70px]">
      <div className="mx-auto max-w-[1320px]">
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-[120px] bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-[120px] bg-gradient-to-l from-white to-transparent" />

          <Swiper
            modules={[Autoplay, FreeMode]}
            loop
            freeMode
            speed={4200}
            slidesPerView={2}
            spaceBetween={38}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              480: {
                slidesPerView: 2.4,
                spaceBetween: 42,
              },
              768: {
                slidesPerView: 3.4,
                spaceBetween: 56,
              },
              1024: {
                slidesPerView: 4.5,
                spaceBetween: 70,
              },
              1280: {
                slidesPerView: 5.3,
                spaceBetween: 88,
              },
            }}
            className="enterprise-msfa-logo-swiper"
          >
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <SwiperSlide key={`${client.name}-${index}`}>
                <div className="group flex h-[112px] items-center justify-center rounded-[20px] bg-white px-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(17,30,64,0.12)]">
                  <img
                    src={client.logo}
                    alt={client.name}
                    loading="lazy"
                    className="max-h-[66px] max-w-[230px] object-contain transition duration-300 group-hover:scale-110"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .enterprise-msfa-logo-swiper .swiper-wrapper {
          align-items: center;
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}