import { getTranslator } from "@/i18n/server";

type VideoItem = {
  title: string;
  subtitle: string;
  videoId: string;
};

const videos: VideoItem[] = [
  {
    title: "LUUP Founder on Mobility Platform",
    subtitle: "Client testimonial with Magnetic Solution Limited",
    videoId: "LkApsAGYKUY",
  },
  {
    title: "Strategic Partnership with BSEZ",
    subtitle: "Digital transformation talk with BSEZ",
    videoId: "5INLCSVF1wY",
  },
  {
    title: "BSEZ on Powering Digital Growth",
    subtitle: "Client testimonial and success story",
    videoId: "OzcN-9N97mE",
  },
  {
    title: "Pro Carrier on IT Outsourcing",
    subtitle: "Client testimonial and success story",
    videoId: "BxHe3-XNVk8",
  },
];

export default async function ClientVideoTestimonialsSection() {
  const { t } = await getTranslator();
  return (
    <section className="bg-white py-[52px] text-[#0a0a0a] md:py-[84px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[860px] text-center">
          <h2 className="max-sm:mx-auto max-sm:text-center text-[#0a0a0a] font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Let's Hear Our Clients")}</h2>

          <p className="mx-auto mt-5 max-w-[560px] text-[15px] font-medium leading-[1.45] tracking-[-0.015em] text-[#52525B] md:text-[16px] text-pretty"></p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {videos.map((video) => (
            <article key={video.videoId} className="group">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-[#ececec] bg-[#0a0a0a] transition-colors duration-300 hover:border-[#c91f28]">
                <iframe
                  src={`https://www.youtube.com/embed/${t(video.videoId)}`}
                  title={t(video.title)}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  className="h-full w-full"
                />
              </div>

              <div className="mt-5">
                <h3 className="text-[#0a0a0a] font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px]">
                  {t(video.title)}
                </h3>

                <p className="mt-2 text-[15px] font-medium tracking-[-0.01em] text-[#52525B] text-pretty">
                  {t(video.subtitle)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
