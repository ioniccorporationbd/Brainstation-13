"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type ClientLogo = {
  name: string;
  image: string;
  className?: string;
};

const clientLogos: ClientLogo[] = [
  {
    name: "Kirsha",
    image:
      "https://logo.clearbit.com/kiksha.com",
    className: "h-[55px]",
  },
  {
    name: "PriyoShop",
    image:
      "https://logo.clearbit.com/priyoshop.com",
    className: "h-[58px]",
  },
  {
    name: "City Bank",
    image:
      "https://logo.clearbit.com/thecitybank.com",
    className: "h-[90px]",
  },
  {
    name: "UCB",
    image:
      "https://logo.clearbit.com/ucb.com.bd",
    className: "h-[68px]",
  },
  {
    name: "AB Bank",
    image:
      "https://logo.clearbit.com/abbl.com",
    className: "h-[62px]",
  },
  {
    name: "British American Tobacco",
    image:
      "https://logo.clearbit.com/bat.com",
    className: "h-[82px]",
  },
  {
    name: "Bank Asia",
    image:
      "https://logo.clearbit.com/bankasia-bd.com",
    className: "h-[58px]",
  },
  {
    name: "Robi",
    image:
      "https://logo.clearbit.com/robi.com.bd",
    className: "h-[58px]",
  },
  {
    name: "bKash",
    image:
      "https://logo.clearbit.com/bkash.com",
    className: "h-[58px]",
  },
  {
    name: "Grameenphone",
    image:
      "https://logo.clearbit.com/grameenphone.com",
    className: "h-[58px]",
  },
  {
    name: "Aarong",
    image:
      "https://logo.clearbit.com/aarong.com",
    className: "h-[58px]",
  },
  {
    name: "LankaBangla",
    image:
      "https://logo.clearbit.com/lankabangla.com",
    className: "h-[58px]",
  },
];

export default function MLAIWorkedWithSection() {
  return (
    <section className="w-full overflow-hidden bg-white py-[95px] md:py-[120px] lg:py-[138px]">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 xl:px-0">
        <div className="text-center">
          <h2 className="text-[38px] font-bold leading-[1.15] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[56px]">
            Who we&apos;ve worked with
          </h2>

          <div className="mx-auto mt-[20px] h-[1px] w-[120px] bg-[#159bd7]" />
        </div>

        <div className="relative mx-auto mt-[138px] w-full max-w-[980px]">
          <button
            type="button"
            className="worked-prev absolute left-[-18px] top-1/2 z-20 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center text-[58px] font-light leading-none text-[#8d8d8d] transition hover:text-[#159bd7] max-md:left-[-10px]"
            aria-label="Previous client"
          >
            ‹
          </button>

          <button
            type="button"
            className="worked-next absolute right-[-18px] top-1/2 z-20 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center text-[58px] font-light leading-none text-[#8d8d8d] transition hover:text-[#159bd7] max-md:right-[-10px]"
            aria-label="Next client"
          >
            ›
          </button>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop
            speed={850}
            slidesPerView={1}
            spaceBetween={35}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".worked-prev",
              nextEl: ".worked-next",
            }}
            pagination={{
              clickable: true,
              bulletClass: "worked-bullet",
              bulletActiveClass: "worked-bullet-active",
            }}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 38,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 48,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 54,
              },
            }}
            className="worked-swiper px-[58px] pb-[98px]"
          >
            {clientLogos.map((client) => (
              <SwiperSlide key={client.name}>
                <div className="flex h-[105px] items-center justify-center">
                  <img
                    src={client.image}
                    alt={client.name}
                    className={`${client.className ?? "h-[60px]"} w-auto max-w-[210px] object-contain`}
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .worked-swiper {
          position: relative;
        }

        .worked-swiper .swiper-pagination {
          position: absolute;
          bottom: 0;
          left: 50%;
          z-index: 20;
          display: flex;
          width: auto;
          transform: translateX(-50%);
          align-items: center;
          gap: 13px;
        }

        .worked-bullet {
          display: block;
          height: 7px;
          width: 7px;
          cursor: pointer;
          border-radius: 999px;
          background: #d7def0;
          transition: all 0.25s ease;
        }

        .worked-bullet-active {
          background: #315fdc;
        }

        @media (max-width: 767px) {
          .worked-swiper {
            padding-left: 42px !important;
            padding-right: 42px !important;
            padding-bottom: 78px !important;
          }
        }
      `}</style>
    </section>
  );
}