"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type ClientLogo = {
  name: string;
  logo: string;
};

const clients: ClientLogo[] = [
  {
    name: "Mercantile Bank",
    logo: "https://logo.clearbit.com/mercantilebank.com.bd",
  },
  {
    name: "AB Bank",
    logo: "https://logo.clearbit.com/abbl.com",
  },
  {
    name: "City Bank",
    logo: "https://logo.clearbit.com/thecitybank.com",
  },
  {
    name: "IFIC Bank",
    logo: "https://logo.clearbit.com/ificbank.com.bd",
  },
  {
    name: "UCB",
    logo: "https://logo.clearbit.com/ucb.com.bd",
  },
  {
    name: "Mutual Trust Bank",
    logo: "https://logo.clearbit.com/mutualtrustbank.com",
  },
  {
    name: "Eastern Bank",
    logo: "https://logo.clearbit.com/ebl.com.bd",
  },
  {
    name: "Prime Bank",
    logo: "https://logo.clearbit.com/primebank.com.bd",
  },
  {
    name: "BRAC Bank",
    logo: "https://logo.clearbit.com/bracbank.com",
  },
  {
    name: "Dutch-Bangla Bank",
    logo: "https://logo.clearbit.com/dutchbanglabank.com",
  },
];

export default function BankingFinancialClientsSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[88px] text-black">
      <div className="mx-auto max-w-[1240px]">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-[42px] font-bold leading-[1.08] tracking-[-0.055em] text-black md:text-[56px]">
            Who we&apos;ve worked with
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-[118px] bg-[#28a8e0]" />
        </div>

        {/* Logo Slider */}
        <div className="relative mt-[70px]">
          <button
            type="button"
            aria-label="Previous client"
            className="bank-client-prev absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#8b8b8b] shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-x-1 hover:text-[#28a8e0]"
          >
            <ChevronLeft size={34} strokeWidth={2.3} />
          </button>

          <button
            type="button"
            aria-label="Next client"
            className="bank-client-next absolute right-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#8b8b8b] shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition duration-300 hover:translate-x-1 hover:text-[#28a8e0]"
          >
            <ChevronRight size={34} strokeWidth={2.3} />
          </button>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop
            speed={900}
            slidesPerView={2}
            spaceBetween={34}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".bank-client-prev",
              nextEl: ".bank-client-next",
            }}
            pagination={{
              clickable: true,
              el: ".bank-client-pagination",
            }}
            breakpoints={{
              480: {
                slidesPerView: 3,
                spaceBetween: 45,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 60,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 78,
              },
            }}
            className="bank-clients-swiper px-12"
          >
            {clients.map((client) => (
              <SwiperSlide key={client.name}>
                <div className="group flex h-[110px] items-center justify-center rounded-[16px] bg-white px-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_65px_rgba(17,30,64,0.10)]">
                  <img
                    src={client.logo}
                    alt={client.name}
                    loading="lazy"
                    className="max-h-[62px] max-w-[175px] object-contain transition duration-300 group-hover:scale-110"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <span className="hidden text-center text-[22px] font-bold tracking-[-0.04em] text-black">
                    {client.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="bank-client-pagination mt-[58px] flex justify-center gap-[11px]" />
        </div>
      </div>

      <style jsx global>{`
        .bank-clients-swiper .swiper-wrapper {
          align-items: center;
        }

        .bank-client-pagination .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          margin: 0 !important;
          border-radius: 999px;
          background: #d6def2;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .bank-client-pagination .swiper-pagination-bullet-active {
          background: #4f7df3;
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}