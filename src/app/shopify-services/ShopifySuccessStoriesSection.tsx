"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

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
      "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1200&auto=format&fit=crop",
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
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[64px] text-[#071F49]">
      <div className="mx-auto max-w-[1220px]">
        <h2 className="text-center text-[44px] font-bold leading-none tracking-[-0.045em] text-black md:text-[52px]">
          Shopify eCommerce Success Stories
        </h2>

        <div className="mx-auto mt-[60px] max-w-[1080px]">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            loop={true}
            speed={750}
            autoplay={{
              delay: 30000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".shopify-success-pagination",
            }}
          >
            {successStories.map((story) => (
              <SwiperSlide key={story.title}>
                <div className="grid min-h-[430px] overflow-hidden rounded-[9px] border border-[#d8dde5] bg-white lg:grid-cols-2">
                  {/* Same size image area */}
                  <div className="h-[430px] w-full overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Text area */}
                  <div className="flex h-[430px] flex-col justify-center px-[34px] py-[42px] lg:px-[56px]">
                    <h3 className="max-w-[580px] text-[34px] font-bold leading-[1.12] tracking-[-0.045em] text-black md:text-[39px]">
                      {story.title}
                    </h3>

                    <p className="mt-[34px] max-w-[560px] text-[19px] font-medium leading-[1.6] tracking-[-0.025em] text-[#42637a]">
                      {story.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="shopify-success-pagination mt-[34px] flex justify-center gap-[9px]" />
        </div>
      </div>

      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>

      <style jsx global>{`
        .shopify-success-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #b9d8eb;
          opacity: 1;
          margin: 0 4px !important;
        }

        .shopify-success-pagination .swiper-pagination-bullet-active {
          background: #2d8fca;
        }
      `}</style>
    </section>
  );
}