"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

type TechnologyItem = {
  name: string;
  logo?: string;
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
  { name: "Sencha" },
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
  const { t } = useTranslation();
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="text-center">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Our stack")}</p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">{t("Technologies we use")}</h2>
          <p className="mx-auto mt-4 max-w-[620px] text-[15.5px] leading-[1.75] text-[#55585e]">{t("Proven platforms and frameworks that keep banking applications fast, secure and maintainable.")}</p>
        </div>

        <div className="relative mt-12">
          <button
            type="button"
            aria-label={t("Previous technology")}
            className="bank-tech-prev absolute left-0 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#ececec] bg-white text-[#55585e] transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28] md:flex"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            aria-label={t("Next technology")}
            className="bank-tech-next absolute right-0 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#ececec] bg-white text-[#55585e] transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28] md:flex"
          >
            <ChevronRight size={20} />
          </button>

          <div className="md:px-12">
          <Swiper
            key={prefersReducedMotion ? "bank-tech-static" : "bank-tech-auto"}
            modules={[Autoplay, Navigation, Pagination]}
            loop
            speed={700}
            slidesPerView={2}
            spaceBetween={16}
            autoplay={
              prefersReducedMotion
                ? false
                : {
                    delay: 2400,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
            }
            navigation={{
              prevEl: ".bank-tech-prev",
              nextEl: ".bank-tech-next",
            }}
            pagination={{
              clickable: true,
              el: ".bank-tech-pagination",
            }}
            breakpoints={{
              480: { slidesPerView: 3, spaceBetween: 16 },
              768: { slidesPerView: 4, spaceBetween: 18 },
              1024: { slidesPerView: 5, spaceBetween: 20 },
              1280: { slidesPerView: 6, spaceBetween: 20 },
            }}
            className="bank-technologies-swiper"
          >
            {technologies.map((tech) => (
              <SwiperSlide key={tech.name}>
                <div className="flex h-[104px] items-center justify-center rounded-xl border border-[#ececec] bg-white px-5 transition-colors duration-200 hover:border-[#c91f28]/50">
                  {tech.logo ? (
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      loading="lazy"
                      className="max-h-[50px] max-w-[128px] object-contain"
                    />
                  ) : (
                    <span className="text-[20px] font-bold tracking-[-0.02em] text-black">{t("Sencha")}</span>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          </div>

          <div className="bank-tech-pagination mt-9 flex justify-center gap-2" />
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
          background: #e4e4e4;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .bank-tech-pagination .swiper-pagination-bullet-active {
          background: #c91f28;
          transform: scale(1.15);
        }
      `}</style>
    </section>
  );
}
