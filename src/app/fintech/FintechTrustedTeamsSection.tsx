"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

type LogoItem = {
  name: string;
  image: string;
};

const logos: LogoItem[] = [
  {
    name: "Pocket",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "UCB",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "City Bank",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "HSBC",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "AB Bank",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Digital Payment",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
  },
];

export default function FintechTrustedTeamsSection() {
  return (
    <section className="relative overflow-hidden bg-[#11182f] px-6 py-[96px] text-white">
      <div className="mx-auto max-w-[1420px]">
        <h2 className="text-center text-[24px] font-bold leading-[1.2] tracking-[-0.045em] text-white md:text-[28px]">
          Trusted By Fast-Moving Tech Teams - From Startups to Enterprises
        </h2>

        <div className="mt-[82px]">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop
            speed={900}
            slidesPerView={1}
            spaceBetween={28}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".fintech-trusted-pagination",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 34,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 38,
              },
            }}
            className="fintech-trusted-swiper"
          >
            {logos.map((item) => (
              <SwiperSlide key={item.name}>
                <article className="group overflow-hidden rounded-[18px] bg-white/6 p-3 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10">
                  <div className="relative h-[220px] overflow-hidden rounded-[14px]">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#11182f]/80 via-[#11182f]/15 to-transparent" />

                    <h3 className="absolute bottom-5 left-5 text-[24px] font-bold leading-none tracking-[-0.04em] text-white">
                      {item.name}
                    </h3>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="fintech-trusted-pagination mt-[44px] flex justify-center gap-[10px]" />
        </div>
      </div>

      <style jsx global>{`
        .fintech-trusted-swiper .swiper-wrapper {
          align-items: stretch;
        }

        .fintech-trusted-pagination .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          margin: 0 !important;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.28);
          opacity: 1;
          transition: all 0.3s ease;
        }

        .fintech-trusted-pagination .swiper-pagination-bullet-active {
          width: 22px;
          background: #20a7e8;
        }
      `}</style>
    </section>
  );
}