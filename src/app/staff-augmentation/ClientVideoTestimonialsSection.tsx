"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

type VideoItem = {
  title: string;
  subtitle: string;
  videoId: string;
};

const videos: VideoItem[] = [
  {
    title: "LUUP Founder on Building a Mobility Platform",
    subtitle: "Client testimonial with Magnetic Solution Limited",
    videoId: "LkApsAGYKUY",
  },
  {
    title: "Strategic Partnership Between BSEZ & Magnetic Solution Limited",
    subtitle: "Digital transformation talk with BSEZ",
    videoId: "5INLCSVF1wY",
  },
  {
    title: "BSEZ on Powering Digital Growth",
    subtitle: "Client testimonial and success story",
    videoId: "OzcN-9N97mE",
  },
  {
    title: "Pro Carrier on Choosing an IT Outsourcing Partner",
    subtitle: "Client testimonial and success story",
    videoId: "BxHe3-XNVk8",
  },
];

export default function ClientVideoTestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#ffffff] px-6 py-[84px] text-[#0a0a0a]">
      <div className="mx-auto max-w-[1320px]">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div>
            <h2 className="text-[44px] font-normal leading-[1.05] tracking-[-0.02em] text-[#0a0a0a] md:text-[58px]">
              Let&apos;s Hear Our Clients
            </h2>

            <p className="mt-7 max-w-[560px] text-[22px] font-medium leading-[1.38] tracking-[-0.015em] text-[#565656]">
              See what our clients have to say about working with our
              Borderless Tech Professionals (BTP)
            </p>
          </div>

          <div className="flex items-center gap-4 md:pt-3">
            <button
              type="button"
              aria-label="Previous video"
              className="client-video-prev flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#c91f28] text-[#c91f28] transition hover:bg-[#c91f28] hover:text-white"
            >
              <ChevronLeft size={22} strokeWidth={1.8} />
            </button>

            <button
              type="button"
              aria-label="Next video"
              className="client-video-next flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#c91f28] text-[#c91f28] transition hover:bg-[#c91f28] hover:text-white"
            >
              <ChevronRight size={22} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        <div className="mt-[92px]">
          <Swiper
            modules={[Navigation]}
            slidesPerView={2}
            spaceBetween={44}
            navigation={{
              prevEl: ".client-video-prev",
              nextEl: ".client-video-next",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 22,
              },
              900: {
                slidesPerView: 2,
                spaceBetween: 44,
              },
            }}
          >
            {videos.map((video) => (
              <SwiperSlide key={video.videoId}>
                <article className="group">
                  <div className="relative aspect-video overflow-hidden rounded-[8px] bg-[#0a0a0a] shadow-[0_18px_45px_rgba(0,0,0,0.10)]">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  </div>

                  <div className="mt-5">
                    <h3 className="text-[22px] font-bold leading-[1.25] tracking-[-0.015em] text-[#0a0a0a]">
                      {video.title}
                    </h3>

                    <p className="mt-2 text-[16px] font-semibold tracking-[-0.025em] text-[#565656]">
                      {video.subtitle}
                    </p>
                  </div>
                </article>
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