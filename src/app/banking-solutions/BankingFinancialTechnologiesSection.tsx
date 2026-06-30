"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type TechnologyItem = {
  name: string;
  logo: string;
};

const technologies: TechnologyItem[] = [
  {
    name: "jQuery Mobile",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "JSP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
  },
  {
    name: "Spring Security",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg",
  },
  {
    name: "Objective-C",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg",
  },
  {
    name: "Sencha",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sencha/sencha-original.svg",
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Android",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original-wordmark.svg",
  },
  {
    name: "Apple",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
  },
  {
    name: "Oracle",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
  },
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
  },
];

export default function BankingFinancialTechnologiesSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[95px] text-black">
      <div className="mx-auto max-w-[1240px]">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-[42px] font-bold leading-[1.08] tracking-[-0.055em] text-black md:text-[56px]">
            Technologies we use
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-[118px] bg-[#28a8e0]" />
        </div>

        {/* Slider */}
        <div className="relative mt-[135px]">
          <button
            type="button"
            aria-label="Previous technology"
            className="bank-tech-prev absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#8b8b8b] shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-x-1 hover:text-[#28a8e0]"
          >
            <ChevronLeft size={34} strokeWidth={2.3} />
          </button>

          <button
            type="button"
            aria-label="Next technology"
            className="bank-tech-next absolute right-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#8b8b8b] shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition duration-300 hover:translate-x-1 hover:text-[#28a8e0]"
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
              prevEl: ".bank-tech-prev",
              nextEl: ".bank-tech-next",
            }}
            pagination={{
              clickable: true,
              el: ".bank-tech-pagination",
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
              1280: {
                slidesPerView: 6,
                spaceBetween: 90,
              },
            }}
            className="bank-technologies-swiper px-12"
          >
            {technologies.map((tech) => (
              <SwiperSlide key={tech.name}>
                <div className="group flex h-[110px] items-center justify-center rounded-[16px] bg-white px-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_65px_rgba(17,30,64,0.10)]">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    loading="lazy"
                    className="max-h-[58px] max-w-[145px] object-contain transition duration-300 group-hover:scale-110"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="bank-tech-pagination mt-[72px] flex justify-center gap-[11px]" />
        </div>
      </div>

      <style jsx global>{`
        .bank-technologies-swiper .swiper-wrapper {
          align-items: center;
        }

        .bank-tech-pagination .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          margin: 0 !important;
          border-radius: 999px;
          background: #d6def2;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .bank-tech-pagination .swiper-pagination-bullet-active {
          background: #4f7df3;
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}