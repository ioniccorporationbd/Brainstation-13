"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const technologies = [
  {
    name: "Java",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
  },
  {
    name: "Objective-C",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg",
  },
  {
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
  },
  {
    name: "Swift",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original-wordmark.svg",
  },
  {
    name: "Android",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original-wordmark.svg",
  },
  {
    name: "Flutter",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Kotlin",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original-wordmark.svg",
  },
  {
    name: "Apple",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
  },
];

export default function TechnologiesSection() {
  return (
    <section className="relative bg-white py-[68px]">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="text-center">
          <h2 className="text-[48px] font-bold leading-none tracking-[-0.04em] text-black">
            Technologies we use
          </h2>

          <div className="mx-auto mt-6 h-[1px] w-[120px] bg-[#00A5E5]" />
        </div>

        <div className="relative mt-[155px]">
          <button
            type="button"
            className="tech-swiper-prev absolute left-[40px] top-1/2 z-10 hidden -translate-y-1/2 text-[#8d8d8d] transition hover:text-[#00A5E5] md:block"
            aria-label="Previous"
          >
            <ChevronLeft size={34} strokeWidth={3} />
          </button>

          <div className="mx-auto max-w-[940px]">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={4}
              spaceBetween={92}
              loop
              speed={700}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".tech-swiper-prev",
                nextEl: ".tech-swiper-next",
              }}
              pagination={{
                clickable: true,
                el: ".tech-swiper-pagination",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 60,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 92,
                },
              }}
            >
              {technologies.map((tech) => (
                <SwiperSlide key={tech.name}>
                  <div className="flex h-[120px] w-full items-center justify-center">
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="max-h-[112px] max-w-[170px] object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button
            type="button"
            className="tech-swiper-next absolute right-[40px] top-1/2 z-10 hidden -translate-y-1/2 text-[#8d8d8d] transition hover:text-[#00A5E5] md:block"
            aria-label="Next"
          >
            <ChevronRight size={34} strokeWidth={3} />
          </button>
        </div>

        <div className="tech-swiper-pagination mt-[74px] flex justify-center gap-[12px]" />
      </div>

      <style jsx global>{`
        .tech-swiper-pagination .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          background: #d7e1fb;
          opacity: 1;
          margin: 0 6px !important;
        }

        .tech-swiper-pagination .swiper-pagination-bullet-active {
          background: #2f67df;
        }
      `}</style>
    </section>
  );
}