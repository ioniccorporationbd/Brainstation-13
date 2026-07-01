"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

type PartnerLogo = {
  name: string;
  logo: string;
  className?: string;
};

const partners: PartnerLogo[] = [
  {
    name: "Databricks",
    logo: "https://logo.clearbit.com/databricks.com",
    className: "max-h-[58px] max-w-[290px]",
  },
  {
    name: "Alteryx",
    logo: "https://logo.clearbit.com/alteryx.com",
    className: "max-h-[68px] max-w-[320px]",
  },
  {
    name: "Snowflake",
    logo: "https://logo.clearbit.com/snowflake.com",
    className: "max-h-[62px] max-w-[330px]",
  },
  {
    name: "Tableau",
    logo: "https://logo.clearbit.com/tableau.com",
    className: "max-h-[60px] max-w-[280px]",
  },
  {
    name: "Microsoft",
    logo: "https://logo.clearbit.com/microsoft.com",
    className: "max-h-[58px] max-w-[280px]",
  },
  {
    name: "AWS",
    logo: "https://logo.clearbit.com/aws.amazon.com",
    className: "max-h-[60px] max-w-[260px]",
  },
  {
    name: "Google Cloud",
    logo: "https://logo.clearbit.com/cloud.google.com",
    className: "max-h-[60px] max-w-[280px]",
  },
  {
    name: "IBM",
    logo: "https://logo.clearbit.com/ibm.com",
    className: "max-h-[58px] max-w-[240px]",
  },
];

export default function DataSciencePartnersSection() {
  return (
    <section className="relative overflow-hidden border-b-[2px] border-[#28a8e0] bg-white px-6 py-[86px] text-black">
      <div className="mx-auto max-w-[1240px]">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-[42px] font-bold leading-[1.08] tracking-[-0.055em] text-black md:text-[58px]">
            Our Partners
          </h2>

          <div className="mx-auto mt-5 h-[2px] w-[118px] bg-[#28a8e0]" />
        </div>

        {/* Logo Slider */}
        <div className="mx-auto mt-[72px] max-w-[1060px]">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop
            speed={900}
            slidesPerView={1}
            spaceBetween={40}
            autoplay={{
              delay: 2300,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".data-partners-pagination",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 70,
              },
            }}
            className="data-partners-swiper"
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.name}>
                <div className="group flex h-[120px] items-center justify-center rounded-[18px] bg-white px-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_65px_rgba(17,30,64,0.10)]">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    loading="lazy"
                    className={`object-contain transition duration-300 group-hover:scale-110 ${
                      partner.className ?? "max-h-[65px] max-w-[300px]"
                    }`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="data-partners-pagination mt-[38px] flex justify-center gap-[12px]" />
        </div>
      </div>

      <style jsx global>{`
        .data-partners-swiper .swiper-wrapper {
          align-items: center;
        }

        .data-partners-pagination .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          margin: 0 !important;
          border-radius: 999px;
          background: #c9c9c9;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .data-partners-pagination .swiper-pagination-bullet-active {
          background: #111111;
          transform: scale(1.15);
        }
      `}</style>
    </section>
  );
}