"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
    buttonHref: "/schedule-a-call",
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
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#F7F7F8]">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop
        speed={reducedMotion ? 0 : 1000}
        autoplay={
          reducedMotion
            ? false
            : {
                delay: 6000,
                disableOnInteraction: false,
              }
        }
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
                  <h1 className="max-w-[660px] text-balance text-[32px] font-semibold leading-[1.14] tracking-[-0.035em] text-[#0A0A0A] sm:text-[42px] md:text-[50px] lg:text-[56px]">
                    {slide.title}
                  </h1>

                  <p className="mt-7 max-w-[620px] text-pretty text-[17px] font-normal leading-[1.5] text-[#52525B] sm:text-[18px] md:text-[20px]">
                    {slide.description}
                  </p>

                  <Link
                    href={slide.buttonHref}
                    className="mt-12 inline-flex h-[52px] w-fit items-center justify-center rounded-full bg-primary px-[32px] text-[16px] font-semibold text-white shadow-[0_10px_24px_rgba(201,31,40,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_14px_30px_rgba(201,31,40,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F7F8] active:translate-y-0 active:bg-primary-hover"
                  >
                    {slide.buttonText}
                  </Link>
                </div>

                {/* RIGHT SIDE DESKTOP */}
                <div className="relative z-10 hidden min-h-[560px] md:block">
                  {/* Circle Pattern */}
                  <div className="pointer-events-none absolute left-[48%] top-[47%] h-[910px] w-[910px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80 [background:repeating-radial-gradient(circle,#E9E9EC_0px,#E9E9EC_1px,transparent_2px,transparent_12px)]" />

                  {/* Top Image */}
                  <div className="absolute left-[95px] top-[25px] z-20 h-[200px] w-[330px] overflow-hidden rounded-[10px] shadow-[8px_8px_0_rgba(0,0,0,0.10)]">
                    <img
                      src={HERO_TOP_IMAGE}
                      alt={slide.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Top Right Stat */}
                  <div className="absolute left-[450px] top-[110px] z-30 w-[230px] text-center">
                    <h3 className="text-[31px] font-bold leading-none tracking-[-0.02em] text-[#0A0A0A]">
                      {slide.statOneNumber}
                    </h3>

                    <p className="mt-[10px] text-[20px] font-normal leading-[1.15] text-[#52525B]">
                      {slide.statOneText}
                    </p>
                  </div>

                  {/* Bottom Left Stat */}
                  <div className="absolute left-[172px] top-[300px] z-30 w-[230px] text-center">
                    <h3 className="text-[31px] font-bold leading-none tracking-[-0.02em] text-[#0A0A0A]">
                      {slide.statTwoNumber}
                    </h3>

                    <p className="mt-[10px] text-[20px] font-normal leading-[1.15] text-[#52525B]">
                      {slide.statTwoText}
                    </p>
                  </div>

                  {/* Bottom Image */}
                  <div className="absolute left-[390px] top-[249px] z-20 h-[200px] w-[330px] overflow-hidden rounded-[10px] shadow-[8px_8px_0_rgba(0,0,0,0.10)]">
                    <img
                      src={HERO_BOTTOM_IMAGE}
                      alt={slide.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* MOBILE / TABLET SMALL */}
                <div className="relative z-20 mt-10 grid gap-5 pb-[135px] md:hidden">
                  <div className="pointer-events-none absolute left-1/2 top-[170px] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 [background:repeating-radial-gradient(circle,#E9E9EC_0px,#E9E9EC_1px,transparent_2px,transparent_11px)]" />

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
                      <h3 className="text-[26px] font-bold leading-none text-[#0A0A0A]">
                        {slide.statOneNumber}
                      </h3>

                      <p className="mt-2 text-[16px] leading-[1.25] text-[#52525B]">
                        {slide.statOneText}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[26px] font-bold leading-none text-[#0A0A0A]">
                        {slide.statTwoNumber}
                      </h3>

                      <p className="mt-2 text-[16px] leading-[1.25] text-[#52525B]">
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
          background: #D4D4D8;
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