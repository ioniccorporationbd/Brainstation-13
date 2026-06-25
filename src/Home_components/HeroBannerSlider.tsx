"use client";

import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

type SlideItem = {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  statOneNumber: string;
  statOneText: string;
  statTwoNumber: string;
  statTwoText: string;
};

const HERO_TOP_IMAGE =
  "https://brainstation-23.com/wp-content/uploads/2025/10/HeroImg-2.1.webp";

const HERO_BOTTOM_IMAGE =
  "https://brainstation-23.com/wp-content/uploads/2025/10/Hero-Img-v2.2.webp";

const slides: SlideItem[] = [
  {
    title: "Launch Wallet or Cross-Border Payments in 90 Days, Compliant",
    description:
      "Empowering Banks, NBFIs & Fintechs to accelerate digital transformation with faster launches, lower costs & seamless UX.",
    buttonText: "Book A Demo",
    buttonHref: "/book-a-demo",
    statOneNumber: "6",
    statOneText: "Global Offices",
    statTwoNumber: "ISO 27001",
    statTwoText: "Certified Teams",
  },
  {
    title: "Scale Your Dev Team With Top 1% Bangladeshi Talents in 4 Weeks",
    description:
      "From startups to enterprises—build scalable, secure software with our 18+ years of expertise and ISO 27001-certified teams.",
    buttonText: "Hire Your Team Now",
    buttonHref: "/staff-augmentation",
    statOneNumber: "19+",
    statOneText: "Years of Experience",
    statTwoNumber: "88%+",
    statTwoText: "Employee Retention",
  },
  {
    title: "Build AI-Powered, Scalable Software for Startups to Enterprises.",
    description:
      "From fintech to eCommerce, we deliver end-to-end solutions tailored to your business—fast, flexible, and reliable.",
    buttonText: "Schedule a Call",
    buttonHref: "/schedule-a-call",
    statOneNumber: "850+",
    statOneText: "Tech Professionals",
    statTwoNumber: "30+",
    statTwoText: "Countries Served",
  },
];

export default function HeroBannerSlider() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f4f8fc]">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop
        speed={900}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "hero-banner-bullet",
          bulletActiveClass: "hero-banner-bullet-active",
        }}
        className="hero-banner-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="relative min-h-[650px] w-full overflow-hidden">
              <div className="relative mx-auto grid min-h-[650px] w-full max-w-[1400px] grid-cols-1 px-5 pt-[76px] sm:px-8 lg:grid-cols-[51.5%_48.5%] lg:px-10 xl:px-0">
                {/* LEFT SIDE */}
                <div className="relative z-20 flex flex-col justify-start pt-[34px] lg:pl-[18px]">
                  <h1 className="max-w-[690px] text-[38px] font-semibold leading-[1.15] tracking-[-0.055em] text-[#0d162b] sm:text-[48px] md:text-[58px] lg:text-[62px]">
                    {slide.title}
                  </h1>

                  <p className="mt-[28px] max-w-[735px] text-[18px] font-normal leading-[1.45] text-[#335e79] sm:text-[20px] md:text-[22px]">
                    {slide.description}
                  </p>

                  <Link
                    href={slide.buttonHref}
                    className="mt-[61px] inline-flex h-[49px] w-fit items-center justify-center rounded-full bg-[#ffad2f] px-[30px] text-[16px] font-semibold text-black transition-colors duration-200 hover:bg-[#f59b15]"
                  >
                    {slide.buttonText}
                  </Link>
                </div>

                {/* RIGHT SIDE DESKTOP */}
                <div className="relative z-10 hidden min-h-[560px] md:block">
                  {/* Circle Pattern */}
                  <div className="pointer-events-none absolute left-[48%] top-[47%] h-[910px] w-[910px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80 [background:repeating-radial-gradient(circle,#dbeaf3_0px,#dbeaf3_1px,transparent_2px,transparent_12px)]" />

                  {/* Top Image */}
                  <div className="absolute left-[95px] top-[25px] z-20 h-[200px] w-[330px] overflow-hidden rounded-[10px] shadow-[8px_8px_0_rgba(0,0,0,0.10)]">
                    <img
                      src={HERO_TOP_IMAGE}
                      alt={slide.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Top Right Stat */}
                  <div className="absolute left-[456px] top-[112px] z-30 w-[230px] text-center">
                    <h3 className="text-[31px] font-bold leading-none tracking-[-0.02em] text-[#071126]">
                      {slide.statOneNumber}
                    </h3>

                    <p className="mt-[13px] text-[22px] font-normal leading-[1.1] text-[#335e79]">
                      {slide.statOneText}
                    </p>
                  </div>

                  {/* Bottom Left Stat */}
                  <div className="absolute left-[174px] top-[298px] z-30 w-[255px] text-center">
                    <h3 className="text-[31px] font-bold leading-none tracking-[-0.02em] text-[#071126]">
                      {slide.statTwoNumber}
                    </h3>

                    <p className="mt-[13px] text-[22px] font-normal leading-[1.1] text-[#335e79]">
                      {slide.statTwoText}
                    </p>
                  </div>

                  {/* Bottom Image */}
                  <div className="absolute left-[390px] top-[246px] z-20 h-[200px] w-[330px] overflow-hidden rounded-[10px] shadow-[8px_8px_0_rgba(0,0,0,0.10)]">
                    <img
                      src={HERO_BOTTOM_IMAGE}
                      alt={slide.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* MOBILE / TABLET SMALL */}
                <div className="relative z-20 mt-10 grid gap-5 pb-[135px] md:hidden">
                  <div className="pointer-events-none absolute left-1/2 top-[170px] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 [background:repeating-radial-gradient(circle,#dbeaf3_0px,#dbeaf3_1px,transparent_2px,transparent_11px)]" />

                  <div className="relative z-10 overflow-hidden rounded-[10px] shadow-[6px_6px_0_rgba(0,0,0,0.08)]">
                    <img
                      src={HERO_TOP_IMAGE}
                      alt={slide.title}
                      className="h-[220px] w-full object-cover"
                    />
                  </div>

                  <div className="relative z-10 overflow-hidden rounded-[10px] shadow-[6px_6px_0_rgba(0,0,0,0.08)]">
                    <img
                      src={HERO_BOTTOM_IMAGE}
                      alt={slide.title}
                      className="h-[220px] w-full object-cover"
                    />
                  </div>

                  <div className="relative z-10 grid grid-cols-2 gap-4 rounded-[12px] bg-white/35 py-3 text-center backdrop-blur-sm">
                    <div>
                      <h3 className="text-[26px] font-bold leading-none text-[#071126]">
                        {slide.statOneNumber}
                      </h3>

                      <p className="mt-2 text-[16px] leading-[1.25] text-[#335e79]">
                        {slide.statOneText}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[26px] font-bold leading-none text-[#071126]">
                        {slide.statTwoNumber}
                      </h3>

                      <p className="mt-2 text-[16px] leading-[1.25] text-[#335e79]">
                        {slide.statTwoText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* White curve bottom */}
              <div className="pointer-events-none absolute bottom-[-78px] left-1/2 z-10 h-[165px] w-[135vw] -translate-x-1/2 rounded-t-[50%] bg-white" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .hero-banner-swiper {
          position: relative;
        }

        .hero-banner-swiper .swiper-pagination {
          position: absolute;
          left: 50%;
          bottom: 108px;
          z-index: 50;
          display: flex;
          width: auto;
          transform: translateX(-50%);
          align-items: center;
          gap: 10px;
        }

        .hero-banner-bullet {
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: #c4cbd1;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .hero-banner-bullet-active {
          background: #000000;
        }

        @media (max-width: 1024px) {
          .hero-banner-swiper .swiper-pagination {
            bottom: 98px;
          }
        }

        @media (max-width: 767px) {
          .hero-banner-swiper .swiper-pagination {
            bottom: 88px;
          }
        }
      `}</style>
    </section>
  );
}