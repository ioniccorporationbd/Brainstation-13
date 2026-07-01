"use client";

import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

type StrategyVideo = {
  title: string;
  channel: string;
  thumbnail: string;
  youtubeUrl: string;
};

const videos: StrategyVideo[] = [
  {
    title: "Smart Digital Wallet for Seamless Financial Control",
    channel: "Brain Station 23",
    thumbnail:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "iBank23: Secure & Seamless Digital Banking App",
    channel: "Brain Station 23",
    thumbnail:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Digital Lending Platform for Modern Financial Services",
    channel: "Brain Station 23",
    thumbnail:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Cross Border Payment Innovation for Global Remittance",
    channel: "Brain Station 23",
    thumbnail:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

export default function FintechStrategiesVideosSection() {
  return (
    <section className="relative overflow-hidden border-b-[3px] border-[#111E40] bg-[#f4f8fc] px-6 py-[90px] text-[#11182f]">
      <div className="mx-auto max-w-[1240px]">
        {/* Header */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="max-w-[760px] text-[42px] font-medium leading-[1.05] tracking-[-0.07em] text-[#050b18] md:text-[58px]">
              Proven Strategies & Innovations
            </h2>

            <p className="mt-7 max-w-[760px] text-[19px] font-medium leading-[1.45] tracking-[-0.035em] text-[#42637a] md:text-[23px]">
              Watch how our fintech solutions solve complex banking challenges,
              streamline operations, and unlock new growth opportunities for
              global financial leaders.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden items-center gap-5 pt-2 md:flex">
            <button
              type="button"
              aria-label="Previous video"
              className="fintech-video-prev flex h-12 w-12 items-center justify-center rounded-full border border-[#3f93cf] bg-transparent text-[#3f93cf] transition duration-300 hover:-translate-x-1 hover:bg-[#3f93cf] hover:text-white"
            >
              <ChevronLeft size={23} strokeWidth={1.8} />
            </button>

            <button
              type="button"
              aria-label="Next video"
              className="fintech-video-next flex h-12 w-12 items-center justify-center rounded-full border border-[#3f93cf] bg-transparent text-[#3f93cf] transition duration-300 hover:translate-x-1 hover:bg-[#3f93cf] hover:text-white"
            >
              <ChevronRight size={23} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        {/* Video Swiper */}
        <div className="mt-[82px]">
          <Swiper
            modules={[Navigation]}
            speed={850}
            slidesPerView={1}
            spaceBetween={30}
            navigation={{
              prevEl: ".fintech-video-prev",
              nextEl: ".fintech-video-next",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 34,
              },
            }}
            className="fintech-video-swiper"
          >
            {videos.map((video) => (
              <SwiperSlide key={video.title}>
                <a
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-[8px] bg-[#111E40] shadow-[0_20px_60px_rgba(17,30,64,0.12)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(17,30,64,0.22)]"
                >
                  <div className="relative aspect-video w-full overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-tr from-[#111E40]/85 via-[#111E40]/25 to-transparent" />

                    {/* Top YouTube Style Text */}
                    <div className="absolute left-6 top-5 right-6">
                      <h3 className="line-clamp-1 text-[20px] font-bold leading-[1.2] tracking-[-0.04em] text-white md:text-[22px]">
                        {video.title}
                      </h3>

                      <p className="mt-1 text-[13px] font-bold text-white/90">
                        {video.channel}
                      </p>
                    </div>

                    {/* Center Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-[66px] w-[88px] items-center justify-center rounded-[14px] bg-[#ff0000] text-white shadow-[0_15px_40px_rgba(255,0,0,0.35)] transition duration-300 group-hover:scale-110">
                        <Play
                          size={34}
                          fill="currentColor"
                          className="ml-1"
                          strokeWidth={0}
                        />
                      </span>
                    </div>

                    {/* Bottom Watch Bar */}
                    <div className="absolute bottom-5 right-5 rounded-full bg-black/55 px-5 py-3 text-[14px] font-bold text-white backdrop-blur-sm">
                      Watch on YouTube
                    </div>

                    {/* Small bottom icons */}
                    <div className="absolute bottom-5 left-5 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm">
                        ↗
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm">
                        ◷
                      </span>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile Navigation */}
          <div className="mt-8 flex items-center justify-center gap-5 md:hidden">
            <button
              type="button"
              aria-label="Previous video"
              className="fintech-video-prev flex h-12 w-12 items-center justify-center rounded-full border border-[#3f93cf] bg-transparent text-[#3f93cf]"
            >
              <ChevronLeft size={23} strokeWidth={1.8} />
            </button>

            <button
              type="button"
              aria-label="Next video"
              className="fintech-video-next flex h-12 w-12 items-center justify-center rounded-full border border-[#3f93cf] bg-transparent text-[#3f93cf]"
            >
              <ChevronRight size={23} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </div>

      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>
    </section>
  );
}