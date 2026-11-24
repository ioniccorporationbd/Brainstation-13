"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/i18n/LanguageProvider";
import { useEffect, useRef, useState } from "react";
import { A11y, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper/types";

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
  /** Ordered pair of locally hosted hero images (panel A, panel B). */
  media: [string, string];
};

/* Local, licence-clear hero assets (see public/hero/CREDITS.md).
   Slide 1 — payments / fintech; Slide 2 — engineering talent; Slide 3 — AI & data. */
const slides: SlideItem[] = [
  {
    title: "Launch Payments in 90 Days",
    description:
      "Empowering Banks, NBFIs & Fintechs to accelerate digital transformation with faster launches, lower costs & seamless UX.",
    buttonText: "Book A Demo",
    buttonHref: "/schedule-a-call",
    statOneNumber: "6",
    statOneText: "Our Offices",
    statTwoNumber: "ISO 27001",
    statTwoText: "Certified Teams",
    media: [
      "/hero/slide-1a-payments-terminal.jpg",
      "/hero/slide-1b-mobile-payments.jpg",
    ],
  },
  {
    title: "Top 1% in Bangladesh",
    description:
      "From startups to enterprises—build scalable, secure software with our 18+ years of expertise and ISO 27001-certified teams.",
    buttonText: "Hire Your Team Now",
    buttonHref: "/staff-augmentation",
    statOneNumber: "19+",
    statOneText: "Years of Experience",
    statTwoNumber: "88%+",
    statTwoText: "Employee Retention",
    media: ["/hero/slide-2a-team-collab.jpg", "/hero/slide-2b-code-screen.jpg"],
  },
  {
    title: "Scalable AI for Every Business",
    description:
      "From fintech to eCommerce, we deliver end-to-end solutions tailored to your business—fast, flexible, and reliable.",
    buttonText: "Schedule a Call",
    buttonHref: "/schedule-a-call",
    statOneNumber: "850+",
    statOneText: "Tech Professionals",
    statTwoNumber: "30+",
    statTwoText: "Countries Served",
    media: [
      "/hero/slide-3a-ai-data-center.jpg",
      "/hero/slide-3b-analytics-dashboard.jpg",
    ],
  },
];

/* Timeline (ms): Image 1 → Image 2 → whole section. */
const IMAGE_VISIBLE_MS = 2500;
const SLIDE_MS = 700;

type StageTrackProps = {
  order: [string, string];
  stage: 0 | 1;
  sizes: string;
  priority?: boolean;
  altPrefix: string;
};

/**
 * Two-image horizontal track. Stage 0 shows the first image; stage 1 slides it
 * out to the left and reveals the second. Only the images move — every piece
 * of text lives outside this element.
 */
function StageTrack({
  order,
  stage,
  sizes,
  priority = false,
  altPrefix,
}: StageTrackProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="flex h-full w-[200%] transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] motion-reduce:transition-none"
        style={{ transform: `translate3d(${stage === 0 ? "0%" : "-50%"}, 0, 0)` }}
      >
        {order.map((src, i) => (
          <div key={src} className="relative h-full w-1/2 shrink-0">
            <Image
              src={src}
              alt={`${altPrefix} — visual ${i + 1}`}
              fill
              sizes={sizes}
              priority={priority}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HeroBannerSlider() {
  const { t } = useTranslation();
  const swiperRef = useRef<SwiperClass | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [imgStage, setImgStage] = useState<0 | 1>(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  /* Nested timeline: each section holds image 1 for 2.5s, slides to image 2
     (700ms), holds it for 2.5s, then the whole section transitions (700ms) and
     the incoming section restarts from image 1. */
  useEffect(() => {
    if (reducedMotion || paused) return;

    const timer = window.setTimeout(() => {
      if (imgStage === 0) {
        setImgStage(1);
      } else {
        setImgStage(0);
        swiperRef.current?.slideNext();
      }
    }, IMAGE_VISIBLE_MS);

    return () => window.clearTimeout(timer);
  }, [imgStage, activeIndex, paused, reducedMotion]);

  /* Don't let timers run (or pile up) while the tab is hidden. */
  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#F7F7F8]">
      <Swiper
        modules={[Pagination, Keyboard, A11y]}
        slidesPerView={1}
        loop
        speed={reducedMotion ? 0 : SLIDE_MS}
        keyboard={{ enabled: true }}
        a11y={{ enabled: true }}
        pagination={{
          clickable: true,
          bulletClass: "hero-banner-bullet",
          bulletActiveClass: "hero-banner-bullet-active",
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
          setImgStage(0);
        }}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        className="hero-banner-swiper"
        tabIndex={0}
      >
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          /* Dual-direction entrance: media group travels L→R, text travels R→L,
             both with a soft opacity ramp. Disabled for reduced motion. */
          const mediaAnim =
            isActive && !reducedMotion ? "hero-anim-media" : undefined;
          const textAnim =
            isActive && !reducedMotion ? "hero-anim-text" : undefined;

          return (
            <SwiperSlide key={slide.title}>
              <div className="relative w-full overflow-hidden md:min-h-[650px]">
                <div className="brand-container hero-grid pt-[76px] md:min-h-[650px] max-sm:pt-[18px]">
                  {/* MOBILE-ONLY: single-image stage at the very top */}
                  <div
                    className={`relative z-10 mb-5 md:hidden max-sm:mb-4 ${
                      mediaAnim ?? ""
                    }`}
                  >
                    <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 [background:repeating-radial-gradient(circle,#E9E9EC_0px,#E9E9EC_1px,transparent_2px,transparent_11px)]" />

                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px] bg-[#ECECEF] shadow-[5px_5px_0_rgba(0,0,0,0.08)]">
                      <StageTrack
                        order={slide.media}
                        stage={imgStage}
                        sizes="(max-width: 767px) 100vw, 330px"
                        priority={index === 0}
                        altPrefix={t(slide.title)}
                      />
                    </div>
                  </div>

                  {/* LEFT SIDE — text (desktop) / below images (mobile) */}
                  <div className="relative z-20 flex flex-col justify-start md:pt-[34px]">
                    <div className={`${textAnim ?? ""} max-sm:text-center`}>
                      {/* Only the first slide owns the page <h1>; the other slides stay
                          visually identical but are not headings, so the document
                          keeps a single H1 for SEO / screen readers. */}
                      {index === 0 ? (
                        <h1 className="max-w-[660px] text-balance text-center text-[clamp(28px,8.387vw,36px)] font-semibold leading-[1.08] tracking-[-0.035em] text-[#0A0A0A] max-sm:mx-auto sm:text-left sm:text-[40px] md:text-[50px] lg:text-[54px]">
                          {t(slide.title)}
                        </h1>
                      ) : (
                        <div className="max-w-[660px] text-balance text-center text-[clamp(28px,8.387vw,36px)] font-semibold leading-[1.08] tracking-[-0.035em] text-[#0A0A0A] max-sm:mx-auto sm:text-left sm:text-[40px] md:text-[50px] lg:text-[54px]">
                          {t(slide.title)}
                        </div>
                      )}

                      <p className="mt-5 max-w-[620px] text-pretty text-center text-[15.5px] font-normal leading-[1.55] text-[#52525B] max-sm:mx-auto sm:mt-6 sm:text-left sm:text-[18px] md:text-[18px]">
                        {t(slide.description)}
                      </p>

                      <Link
                        href={slide.buttonHref}
                        className="mt-7 inline-flex h-[52px] w-fit items-center justify-center rounded-full bg-primary px-[32px] text-[16px] font-semibold text-white shadow-[0_10px_24px_rgba(201,31,40,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_14px_30px_rgba(201,31,40,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F7F8] active:translate-y-0 active:bg-primary-hover max-sm:mx-auto max-sm:h-11 max-sm:min-h-[44px] max-sm:px-5 max-sm:text-[14px] sm:mt-12"
                      >
                        {t(slide.buttonText)}
                      </Link>
                    </div>
                  </div>

                  {/* RIGHT SIDE DESKTOP */}
                  <div className="hero-collage relative z-10 hidden min-h-[560px] md:block">
                    {/* Circle Pattern */}
                    <div className="pointer-events-none absolute left-[48%] top-[47%] h-[910px] w-[910px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80 [background:repeating-radial-gradient(circle,#E9E9EC_0px,#E9E9EC_1px,transparent_2px,transparent_12px)]" />

                    <div className={`absolute inset-0 ${mediaAnim ?? ""}`}>
                      {/* Top Image — stage 0: A, stage 1: B */}
                      <div className="absolute left-[95px] top-[25px] z-20 h-[200px] w-[330px] overflow-hidden rounded-[10px] shadow-[8px_8px_0_rgba(0,0,0,0.10)]">
                        <StageTrack
                          order={slide.media}
                          stage={imgStage}
                          sizes="330px"
                          priority={index === 0}
                          altPrefix={t(slide.title)}
                        />
                      </div>

                      {/* Top Right Stat */}
                      <div className="absolute left-[450px] top-[110px] z-30 w-[230px] text-center">
                        <div className="text-[31px] font-bold leading-none tracking-[-0.02em] text-[#0A0A0A] text-balance">
                          {t(slide.statOneNumber)}
                        </div>

                        <p className="mt-[10px] text-[16px] font-normal leading-[1.5] text-[#52525B] sm:text-[18px] text-pretty">
                          {t(slide.statOneText)}
                        </p>
                      </div>

                      {/* Bottom Left Stat */}
                      <div className="absolute left-[172px] top-[300px] z-30 w-[230px] text-center">
                        <div className="text-[31px] font-bold leading-none tracking-[-0.02em] text-[#0A0A0A] text-balance">
                          {t(slide.statTwoNumber)}
                        </div>

                        <p className="mt-[10px] text-[16px] font-normal leading-[1.5] text-[#52525B] sm:text-[18px] text-pretty">
                          {t(slide.statTwoText)}
                        </p>
                      </div>

                      {/* Bottom Image — stage 0: B, stage 1: A (wrap-around pair) */}
                      <div className="absolute left-[390px] top-[249px] z-20 h-[200px] w-[330px] overflow-hidden rounded-[10px] shadow-[8px_8px_0_rgba(0,0,0,0.10)]">
                        <StageTrack
                          order={[slide.media[1], slide.media[0]]}
                          stage={imgStage}
                          sizes="330px"
                          priority={index === 0}
                          altPrefix={t(slide.title)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* MOBILE / TABLET SMALL — compact stats under the CTA */}
                  <div className="relative z-20 mt-6 grid gap-4 pb-12 md:hidden max-sm:mt-5 max-sm:pb-9">
                    <div className="relative z-10 grid grid-cols-2 gap-4 rounded-[12px] bg-white/35 py-3 text-center backdrop-blur-sm">
                      <div>
                        <div className="text-[24px] font-bold leading-none text-[#0A0A0A] text-balance">
                          {t(slide.statOneNumber)}
                        </div>

                        <p className="mt-1.5 text-[15px] leading-[1.25] text-[#52525B] text-pretty">
                          {t(slide.statOneText)}
                        </p>
                      </div>

                      <div>
                        <div className="text-[24px] font-bold leading-none text-[#0A0A0A] text-balance">
                          {t(slide.statTwoNumber)}
                        </div>

                        <p className="mt-1.5 text-[15px] leading-[1.25] text-[#52525B] text-pretty">
                          {t(slide.statTwoText)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* White curve bottom */}
                <div className="pointer-events-none absolute bottom-[-78px] left-1/2 z-10 h-[165px] w-[135vw] -translate-x-1/2 rounded-t-[50%] bg-white" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <style jsx global>{`
        .hero-banner-swiper {
          position: relative;
        }

        .hero-banner-swiper:focus-visible {
          outline: 2px solid #c91f28;
          outline-offset: -2px;
        }

        /* —— Dual-direction premium entrance —— */
        @keyframes heroMediaIn {
          from {
            opacity: 0;
            transform: translate3d(-56px, 0, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes heroTextIn {
          from {
            opacity: 0;
            transform: translate3d(56px, 0, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        .hero-anim-media {
          animation: heroMediaIn 0.72s cubic-bezier(0.22, 0.61, 0.36, 1) both;
          will-change: transform, opacity;
          backface-visibility: hidden;
        }

        .hero-anim-text {
          animation: heroTextIn 0.72s cubic-bezier(0.22, 0.61, 0.36, 1) 0.06s
            both;
          will-change: transform, opacity;
          backface-visibility: hidden;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-anim-media,
          .hero-anim-text {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
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
            bottom: 16px;
          }
        }
      `}</style>
    </section>
  );
}
