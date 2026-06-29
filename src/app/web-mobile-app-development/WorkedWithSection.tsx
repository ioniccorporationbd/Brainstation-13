"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const clients = [
  {
    name: "ACI Limited",
    image:
      "https://www.aci-bd.com/images/aci-logo.png",
  },
  {
    name: "Pickaboo",
    image:
      "https://www.pickaboo.com/media/logo/stores/1/pickaboo-logo.png",
  },
  {
    name: "Kiksha",
    image:
      "https://dummyimage.com/220x90/ffffff/1f84bd.png&text=KIKsha",
  },
  {
    name: "PriyoShop",
    image:
      "https://dummyimage.com/220x90/ffffff/8b1d42.png&text=PriyoShop",
  },
  {
    name: "City Bank",
    image:
      "https://www.thecitybank.com/themes/custom/citybank/logo.svg",
  },
  {
    name: "UCB",
    image:
      "https://www.ucb.com.bd/themes/custom/ucb_subtheme/images/ucb-logo.svg",
  },
  {
    name: "HSBC",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/aa/HSBC_logo_%282018%29.svg",
  },
  {
    name: "bKash",
    image:
      "https://upload.wikimedia.org/wikipedia/en/1/1d/BKash_logo.svg",
  },
  {
    name: "Nagad",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/9f/Nagad_Logo.svg",
  },
  {
    name: "Rocket",
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/e9/Dutch_Bangla_Bank_Rocket_logo.svg",
  },
  {
    name: "Payoneer",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f8/Payoneer_logo.svg",
  },
  {
    name: "Mastercard",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
  },
];

export default function WorkedWithSection() {
  return (
    <section className="relative bg-white py-[70px]">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="text-center">
          <h2 className="text-[48px] font-bold leading-none tracking-[-0.04em] text-black">
            Who we've worked with
          </h2>

          <div className="mx-auto mt-6 h-[1px] w-[120px] bg-[#00A5E5]" />
        </div>

        <div className="relative mt-[130px]">
          <button
            type="button"
            className="worked-swiper-prev absolute left-[25px] top-1/2 z-10 hidden -translate-y-1/2 text-[#8d8d8d] transition hover:text-[#00A5E5] md:block"
            aria-label="Previous"
          >
            <ChevronLeft size={34} strokeWidth={3} />
          </button>

          <div className="mx-auto max-w-[930px]">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={6}
              spaceBetween={45}
              loop
              speed={700}
              autoplay={{
                delay: 2600,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".worked-swiper-prev",
                nextEl: ".worked-swiper-next",
              }}
              pagination={{
                clickable: true,
                el: ".worked-swiper-pagination",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 38,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 45,
                },
              }}
            >
              {clients.map((client) => (
                <SwiperSlide key={client.name}>
                  <div className="flex h-[100px] w-full items-center justify-center">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="max-h-[82px] max-w-[145px] object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button
            type="button"
            className="worked-swiper-next absolute right-[25px] top-1/2 z-10 hidden -translate-y-1/2 text-[#8d8d8d] transition hover:text-[#00A5E5] md:block"
            aria-label="Next"
          >
            <ChevronRight size={34} strokeWidth={3} />
          </button>
        </div>

        <div className="worked-swiper-pagination mt-[70px] flex justify-center gap-[10px]" />
      </div>

      <style jsx global>{`
        .worked-swiper-pagination .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: #d7e1fb;
          opacity: 1;
          margin: 0 5px !important;
        }

        .worked-swiper-pagination .swiper-pagination-bullet-active {
          background: #2f67df;
        }
      `}</style>
    </section>
  );
}