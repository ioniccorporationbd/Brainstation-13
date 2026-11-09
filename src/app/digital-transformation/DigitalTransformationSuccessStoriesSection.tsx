"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

type SuccessStory = {
  quote: string;
  logo: string;
};

const successStories: SuccessStory[] = [
  {
    quote:
      "Managed QA and test automation services across multiple product lines, ensuring consistent quality across digital services",
    logo: "telenor",
  },
  {
    quote:
      "Managed development using a hybrid nearshore/offshore model, accelerating delivery of internal R&D tools and platforms.",
    logo: "Galápagos",
  },
  {
    quote:
      "Delivered AI-powered automation and cloud modernization support to improve operational efficiency across business units.",
    logo: "Sanofi",
  },
  {
    quote:
      "Supported enterprise digital transformation through scalable engineering teams, transparent governance, and continuous delivery.",
    logo: "VEON",
  },
  {
    quote:
      "Helped modernize legacy platforms with automated testing, faster release cycles, and reliable managed delivery.",
    logo: "Robi",
  },
  {
    quote:
      "Provided dedicated experts for process automation, system modernization, and long-term product engineering support.",
    logo: "ShareBike",
  },
];

function SuccessStoryCard({ story }: { story: SuccessStory }) {
  return (
    <article className="group relative flex min-h-[390px] flex-col justify-between overflow-hidden rounded-[10px] border border-[#ececec] bg-white px-8 py-9 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:border-[#e9b0b4] hover:shadow-[0_28px_80px_rgba(0,0,0,0.13)] md:min-h-[420px] md:px-9 md:py-10">
      <div className="pointer-events-none absolute -right-20 -top-20 h-[220px] w-[220px] rounded-full bg-[#c91f28]/0 blur-2xl transition-all duration-300 group-hover:bg-[#c91f28]/18" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[220px] w-[220px] rounded-full bg-[#c91f28]/0 blur-2xl transition-all duration-300 group-hover:bg-[#c91f28]/12" />

      <h3 className="relative z-10 max-w-[590px] text-[22px] font-bold leading-[1.45] tracking-[-0.02em] text-[#0a0a0a] md:text-[25px]">
        {story.quote}
      </h3>

      <div className="relative z-10 mt-12">
        <p className="text-[30px] font-bold leading-none tracking-[0.03em] text-[#0a0a0a] md:text-[34px]">
          {story.logo}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#c91f28] transition-all duration-300 group-hover:w-full" />
    </article>
  );
}

export default function DigitalTransformationSuccessStoriesSection() {
  return (
    <section className="relative overflow-hidden bg-[#ffffff] px-6 py-[96px] text-[#0a0a0a]">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-12 lg:grid-cols-[0.42fr_1fr] lg:items-start">
        {/* Left Content */}
        <aside className="lg:sticky lg:top-[110px]">
          <p className="mb-5 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Client Outcomes
          </p>

          <h2 className="text-[44px] font-bold leading-[1.08] tracking-[-0.02em] text-[#0a0a0a] md:text-[58px]">
            Success Stories
          </h2>

          <p className="mt-8 max-w-[540px] text-[20px] font-medium leading-[1.55] tracking-[-0.015em] text-[#565656] md:text-[22px]">
            Hear from industry leaders who have transformed their businesses
            with our AI-powered development and resource augmentation services.
          </p>
        </aside>

        {/* Right Swiper */}
        <div className="relative min-w-0 overflow-hidden">
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-[90px] bg-gradient-to-l from-[#ffffff] to-transparent" />

          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={28}
            speed={850}
            loop
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 22,
              },
              768: {
                slidesPerView: 1.25,
                spaceBetween: 26,
              },
              1024: {
                slidesPerView: 1.55,
                spaceBetween: 28,
              },
              1280: {
                slidesPerView: 1.75,
                spaceBetween: 32,
              },
            }}
            className="success-stories-swiper !overflow-visible"
          >
            {successStories.map((story, index) => (
              <SwiperSlide key={`${story.logo}-${index}`}>
                <SuccessStoryCard story={story} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#c91f28]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>
    </section>
  );
}