"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const HERO_IMG = "/images/staff-augmentation/hero.webp";

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
    <section className="relative overflow-hidden bg-white py-[48px] text-[#0a0a0a] md:py-[104px] lg:py-[104px]">
      <div className="grid brand-container grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        {/* Left Content */}
        <div>
          <p className="mb-5 text-[13px] font-semibold uppercase tracking-normal text-[#c91f28]">{t("Borderless Tech Talent")}</p>

          <h1 className="text-[clamp(30px,8.9vw,38px)] max-w-[640px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0a0a0a] md:text-[52px] lg:text-[56px] text-balance">
            {t("IT Staff Augmentation")}
            <span className="hidden sm:inline">,<br className="hidden sm:block" />{" "}{t("Built for Speed.")}</span>
          </h1>

          <p className="mt-6 max-w-[560px] text-[15px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B] md:text-[19px] text-pretty">{t("Onboard pre-vetted offshore engineers in weeks, with onshore account management support.")}</p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/schedule-a-call"
              className="group inline-flex items-center gap-2 rounded-full bg-[#c91f28] px-8 py-4 text-[16px] font-bold tracking-[-0.01em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
            >
              {t("Book a Call")}
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right: hero banner image + floating review card */}
        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] border border-[#ececec] lg:aspect-[16/13]">
            <Image
              src={HERO_IMG}
              alt={t("Software developers collaborating in a modern technology office")}
              fill
              priority
              sizes="(min-width: 1024px) 640px, (min-width: 768px) 90vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-6 w-full rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]/50 lg:absolute lg:-bottom-10 lg:-left-12 lg:mt-0 lg:max-w-[360px] lg:p-7 lg:shadow-[0_24px_70px_rgba(10,10,10,0.16)]">
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
                      <h3 className="text-[22px] md:text-[26px] leading-[1.22] font-bold tracking-[-0.02em] text-[#0a0a0a] text-balance">
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

                        <p className="mt-[3px] text-[10px] font-semibold uppercase leading-none tracking-normal text-[#52525B] text-pretty">
                          {t(review.rating)}
                        </p>
                      </div>
                    </div>

                    <p className="mt-5 max-w-[300px] text-[15px] md:text-[16px] font-semibold leading-[1.5] tracking-[-0.01em] text-[#0a0a0a]">
                      &ldquo;{t(review.quote)}&rdquo;
                    </p>

                    <div className="mt-5 border-t border-[#ececec] pt-4">
                      <p className="max-w-[280px] text-[13.5px] font-medium leading-[1.45] tracking-[-0.01em] text-[#52525B] text-pretty">
                        {t(review.author)}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="staff-hero-pagination mt-5 flex gap-[10px]" />

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
