"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { useTranslation } from "@/i18n/LanguageProvider";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import usePrefersReducedMotion from "./usePrefersReducedMotion";

type SuccessStory = {
  title: string;
  description: string;
  image: string;
};

const successStories: SuccessStory[] = [
  {
    title: "NFC-enabled Smart Personalized accessories",
    description:
      "Ventro is Bangladesh’s pioneer in smart accessories, offering an essentials platform tailored for Shopify store owners. Our solution provided an efficient way for their customers to manage and exchange personalized information through smart accessories.",
    image:
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "High-converting Shopify Storefront Experience",
    description:
      "We helped modern commerce brands create fast, mobile-first Shopify storefronts with smooth product discovery, clean checkout journeys, and conversion-focused customer experiences.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ShopifySuccessStoriesSection() {
  const { t } = useTranslation();
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section className="w-full overflow-hidden bg-[#fafafa] px-6 pb-[96px] pt-[88px] text-[#0a0a0a] md:pb-[112px] md:pt-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Success Stories")}</p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Shopify eCommerce Success Stories")}</h2>
        </div>

        <div className="mx-auto mt-11 max-w-[1080px]">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            loop
            speed={750}
            autoplay={
              reduceMotion
                ? false
                : {
                    delay: 30000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
            }
            pagination={{
              clickable: true,
              el: ".shopify-success-pagination",
            }}
          >
            {successStories.map((story) => (
              <SwiperSlide key={story.title}>
                <div className="grid overflow-hidden rounded-2xl border border-[#ececec] bg-white lg:grid-cols-2">
                  <div className="h-[280px] w-full overflow-hidden bg-[#f2f2f2] lg:h-[420px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={story.image}
                      alt={story.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
                    <h3 className="max-w-[520px] text-[23px] font-bold leading-[1.22] tracking-[-0.02em] text-[#0a0a0a] md:text-[29px]">
                      {t(story.title)}
                    </h3>

                    <p className="mt-5 max-w-[540px] text-[15.5px] font-medium leading-[1.65] text-[#565656] md:text-[16.5px]">
                      {t(story.description)}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="shopify-success-pagination mt-8 flex justify-center gap-[9px]" />
        </div>
      </div>

      <style jsx global>{`
        .shopify-success-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #e2e2e2;
          opacity: 1;
          margin: 0 4px !important;
        }

        .shopify-success-pagination .swiper-pagination-bullet-active {
          background: #c91f28;
        }
      `}</style>
    </section>
  );
}
