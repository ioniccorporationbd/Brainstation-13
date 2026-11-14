"use client";

import { Star } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const reviews = [
  {
    company: "Clutch",
    rating: "5.0 RATING",
    quote:
      "Magnetic Solution Limited has been consistent in ensuring tasks are completed within agreed timeframes.",
    author: "VP R&D, Library Collection Management Software Company",
  },
  {
    company: "Clutch",
    rating: "5.0 RATING",
    quote:
      "They communicate clearly, deliver fast, and provide strong engineering support across every stage of the project.",
    author: "Technology Director, Enterprise Software Company",
  },
  {
    company: "Clutch",
    rating: "5.0 RATING",
    quote:
      "Their offshore talent model helped us scale quickly without sacrificing quality, ownership, or delivery confidence.",
    author: "Product Lead, Digital Platform Company",
  },
];

export default function StaffAugmentationHeroSection() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden bg-white py-[48px] text-[#0a0a0a] md:py-[104px] lg:py-[110px]">
      <div className="grid brand-container grid-cols-1 items-center gap-14 lg:min-h-[520px] lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left Content */}
        <div>
          <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#c91f28]">{t("Borderless Tech Talent")}</p>

          <h1 className="max-w-[720px] text-[40px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0a0a0a] md:text-[60px] lg:text-[66px]">{t("IT Staff Augmentation,")}<br className="hidden sm:block" />{t("Built for Speed.")}</h1>

          <p className="mt-6 max-w-[560px] text-[15px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B] md:text-[19px]">{t("Onboard pre-vetted offshore engineers in weeks, with onshore account management support.")}</p>
        </div>

        {/* Right: smooth swapping review/facts card */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[380px] rounded-2xl border border-[#ececec] bg-white p-7 transition-colors duration-300 hover:border-[#c91f28]/50">
            <Swiper
              modules={[Autoplay, EffectFade, Pagination]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              slidesPerView={1}
              loop
              speed={900}
              autoplay={{
                delay: 5500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                el: ".staff-hero-pagination",
              }}
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={`${t(review.company)}-${index}`}>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-[22px] font-bold leading-none tracking-[-0.02em] text-[#0a0a0a]">
                        {t(review.company)}
                      </h3>

                      <div>
                        <div className="flex items-center gap-[2px]">
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <Star
                              key={starIndex}
                              size={14}
                              className="fill-[#c91f28] text-[#c91f28]"
                            />
                          ))}
                        </div>

                        <p className="mt-[3px] text-[10px] font-semibold uppercase leading-none tracking-[0.08em] text-[#52525B]">
                          {t(review.rating)}
                        </p>
                      </div>
                    </div>

                    <p className="mt-6 max-w-[300px] text-[15px] md:text-[16px] font-semibold leading-[1.5] tracking-[-0.01em] text-[#0a0a0a]">
                      &ldquo;{t(review.quote)}&rdquo;
                    </p>

                    <div className="mt-6 border-t border-[#ececec] pt-5">
                      <p className="max-w-[280px] text-[13.5px] font-medium leading-[1.45] tracking-[-0.01em] text-[#52525B]">
                        {t(review.author)}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="staff-hero-pagination mt-6 flex gap-[10px]" />

            <p className="sr-only">{t("Client reviews")}</p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .staff-hero-pagination .swiper-pagination-bullet {
          width: 22px;
          height: 4px;
          border-radius: 999px;
          background: #e2e2e2;
          opacity: 1;
          margin: 0 !important;
          transition: background 0.3s ease;
        }

        .staff-hero-pagination .swiper-pagination-bullet-active {
          background: #c91f28;
        }

        @media (prefers-reduced-motion: reduce) {
          .staff-hero-pagination .swiper-pagination-bullet {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
