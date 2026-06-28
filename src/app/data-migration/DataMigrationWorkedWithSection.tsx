"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

type ClientLogo = {
  name: string;
  image: string;
  className?: string;
};

const clientLogos: ClientLogo[] = [
  {
    name: "Grameenphone",
    image: "https://logo.clearbit.com/grameenphone.com",
    className: "h-[62px]",
  },
  {
    name: "ACI Limited",
    image: "https://logo.clearbit.com/aci-bd.com",
    className: "h-[82px]",
  },
  {
    name: "Pickaboo",
    image: "https://logo.clearbit.com/pickaboo.com",
    className: "h-[68px]",
  },
  {
    name: "Kiksha",
    image: "https://dummyimage.com/180x70/ffffff/159bd7.png&text=KIKSHA",
    className: "h-[58px]",
  },
  {
    name: "PriyoShop",
    image: "https://logo.clearbit.com/priyoshop.com",
    className: "h-[62px]",
  },
  {
    name: "City Bank",
    image: "https://logo.clearbit.com/thecitybank.com",
    className: "h-[105px]",
  },
  {
    name: "UCB",
    image: "https://logo.clearbit.com/ucb.com.bd",
    className: "h-[66px]",
  },
  {
    name: "AB Bank",
    image: "https://logo.clearbit.com/abbl.com",
    className: "h-[62px]",
  },
  {
    name: "Robi",
    image: "https://logo.clearbit.com/robi.com.bd",
    className: "h-[62px]",
  },
  {
    name: "bKash",
    image: "https://logo.clearbit.com/bkash.com",
    className: "h-[62px]",
  },
  {
    name: "MetLife",
    image: "https://logo.clearbit.com/metlife.com",
    className: "h-[62px]",
  },
  {
    name: "Nissan",
    image: "https://logo.clearbit.com/nissan-global.com",
    className: "h-[62px]",
  },
];

export default function DataMigrationWorkedWithSection() {
  return (
    <section className="w-full overflow-hidden bg-white py-[96px] md:py-[122px] lg:py-[145px]">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 xl:px-0">
        <div className="text-center">
          <h2 className="text-[38px] font-bold leading-[1.15] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[54px]">
            Who we&apos;ve worked with
          </h2>

          <div className="mx-auto mt-[20px] h-[1px] w-[118px] bg-[#159bd7]" />
        </div>

        <div className="mx-auto mt-[132px] w-full max-w-[1040px]">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop
            speed={850}
            slidesPerView={1}
            spaceBetween={36}
            autoplay={{
              delay: 2300,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              bulletClass: "client-bullet",
              bulletActiveClass: "client-bullet-active",
            }}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 42,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 54,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 58,
              },
            }}
            className="client-logo-swiper pb-[100px]"
          >
            {clientLogos.map((client) => (
              <SwiperSlide key={client.name}>
                <div className="flex h-[112px] items-center justify-center">
                  <img
                    src={client.image}
                    alt={client.name}
                    loading="lazy"
                    className={`${
                      client.className ?? "h-[62px]"
                    } w-auto max-w-[180px] object-contain transition duration-300 hover:scale-105`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .client-logo-swiper {
          position: relative;
        }

        .client-logo-swiper .swiper-pagination {
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

        .client-bullet {
          display: block;
          height: 7px;
          width: 7px;
          cursor: pointer;
          border-radius: 999px;
          background: #d7def0;
          transition: all 0.25s ease;
        }

        .client-bullet-active {
          background: #315fdc;
        }

        @media (max-width: 767px) {
          .client-logo-swiper {
            padding-bottom: 78px !important;
          }
        }
      `}</style>
    </section>
  );
}