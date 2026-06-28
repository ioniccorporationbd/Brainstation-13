"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type TechnologyItem = {
  name: string;
  image: string;
  className: string;
};

const technologies: TechnologyItem[] = [
  {
    name: "Swift",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original-wordmark.svg",
    className: "h-[78px] md:h-[92px]",
  },
  {
    name: "Java",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
    className: "h-[132px] md:h-[155px]",
  },
  {
    name: "Objective-C",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg",
    className: "h-[70px] md:h-[82px]",
  },
  {
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    className: "h-[82px] md:h-[94px]",
  },
  {
    name: "Python",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
    className: "h-[95px] md:h-[110px]",
  },
  {
    name: "Node.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    className: "h-[86px] md:h-[100px]",
  },
  {
    name: "TypeScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    className: "h-[68px] md:h-[78px]",
  },
  {
    name: "Next.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    className: "h-[80px] md:h-[92px]",
  },
];

export default function DataMigrationTechnologiesSection() {
  return (
    <section className="w-full overflow-hidden bg-white py-[92px] md:py-[112px] lg:py-[126px]">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 xl:px-0">
        <div className="text-center">
          <h2 className="text-[38px] font-bold leading-[1.15] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[54px]">
            Technologies we use
          </h2>

          <div className="mx-auto mt-[20px] h-[1px] w-[118px] bg-[#159bd7]" />
        </div>

        <div className="relative mx-auto mt-[138px] w-full max-w-[1040px]">
          <button
            type="button"
            className="tech-prev absolute left-[-14px] top-[45%] z-20 flex h-[44px] w-[44px] -translate-y-1/2 items-center justify-center text-[58px] font-light leading-none text-[#8e8e8e] transition hover:text-[#159bd7] max-md:left-[-8px]"
            aria-label="Previous technology"
          >
            ‹
          </button>

          <button
            type="button"
            className="tech-next absolute right-[-14px] top-[45%] z-20 flex h-[44px] w-[44px] -translate-y-1/2 items-center justify-center text-[58px] font-light leading-none text-[#8e8e8e] transition hover:text-[#159bd7] max-md:right-[-8px]"
            aria-label="Next technology"
          >
            ›
          </button>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop
            speed={850}
            slidesPerView={1}
            spaceBetween={50}
            autoplay={{
              delay: 2600,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".tech-prev",
              nextEl: ".tech-next",
            }}
            pagination={{
              clickable: true,
              bulletClass: "tech-bullet",
              bulletActiveClass: "tech-bullet-active",
            }}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 54,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 72,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 92,
              },
            }}
            className="technology-swiper px-[62px] pb-[110px]"
          >
            {technologies.map((tech) => (
              <SwiperSlide key={tech.name}>
                <div className="flex h-[180px] items-center justify-center">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    loading="lazy"
                    className={`${tech.className} w-auto max-w-[190px] object-contain`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .technology-swiper {
          position: relative;
        }

        .technology-swiper .swiper-pagination {
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

        .tech-bullet {
          display: block;
          height: 7px;
          width: 7px;
          cursor: pointer;
          border-radius: 999px;
          background: #d7def0;
          transition: all 0.25s ease;
        }

        .tech-bullet-active {
          background: #315fdc;
        }

        @media (max-width: 767px) {
          .technology-swiper {
            padding-left: 42px !important;
            padding-right: 42px !important;
            padding-bottom: 82px !important;
          }
        }
      `}</style>
    </section>
  );
}