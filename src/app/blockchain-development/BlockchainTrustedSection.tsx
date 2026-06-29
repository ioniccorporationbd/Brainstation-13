"use client";

import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const logos = [
  {
    name: "The Research Council of Norway",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Research_Council_of_Norway_logo.svg/512px-Research_Council_of_Norway_logo.svg.png",
    className: "max-h-[48px] max-w-[210px]",
  },
  {
    name: "AWS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    className: "max-h-[130px] max-w-[230px]",
  },
  {
    name: "Celer Network",
    image: "https://cryptologos.cc/logos/celer-network-celr-logo.png",
    className: "max-h-[220px] max-w-[230px]",
  },
  {
    name: "DoraHacks",
    image: "https://avatars.githubusercontent.com/u/41075535?s=280&v=4",
    className: "max-h-[170px] max-w-[210px]",
  },
  {
    name: "ICSE 2026",
    image:
      "https://conf.researchr.org/getImage/icse-2026/orig/ICSE2026-logo.png",
    className: "max-h-[240px] max-w-[230px]",
  },
  {
    name: "IEEE Access",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_Access_Logo.svg/512px-IEEE_Access_Logo.svg.png",
    className: "max-h-[130px] max-w-[230px]",
  },
  {
    name: "IEEE ICBC",
    image:
      "https://icbc2024.ieee-icbc.org/wp-content/uploads/sites/419/2023/11/IEEE-ICBC-2024-logo.png",
    className: "max-h-[130px] max-w-[230px]",
  },
];

export default function BlockchainTrustedSection() {
  return (
    <section className="relative overflow-hidden bg-white py-[105px]">
      <div className="mx-auto max-w-[1880px] px-6">
        <h2 className="mx-auto max-w-[1780px] text-center text-[44px] font-normal leading-[1.15] tracking-[-0.055em] text-[#11182f] md:text-[58px] lg:text-[66px]">
          Trusted by Global Financial Institutions, Researchers, and Web3{" "}
          <br className="hidden xl:block" />
          Ecosystems.
        </h2>

        <div className="relative mt-[48px] overflow-hidden">
          <Swiper
            modules={[Autoplay, FreeMode]}
            loop={true}
            freeMode={true}
            allowTouchMove={false}
            speed={6500}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            slidesPerView="auto"
            spaceBetween={60}
            className="blockchain-logo-swiper"
          >
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <SwiperSlide
                key={`${logo.name}-${index}`}
                className="!flex !w-[260px] items-center justify-center"
              >
                <div className="flex h-[245px] w-[260px] items-center justify-center">
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className={`object-contain ${logo.className}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <style jsx global>{`
        .blockchain-logo-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
          align-items: center;
        }
      `}</style>
    </section>
  );
}