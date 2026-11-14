import { getTranslator } from "@/i18n/server";

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

export default async function ClientVideoTestimonialsSection() {
  const { t } = await getTranslator();
  return (
    <section className="bg-white py-[52px] text-[#0a0a0a] md:py-[84px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[860px] text-center">
          <h2 className="text-[32px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[48px]">{t("Let's Hear Our Clients")}</h2>

          <p className="mx-auto mt-5 max-w-[560px] text-[16px] font-medium leading-[1.45] tracking-[-0.015em] text-[#565656] md:text-[17px]"></p>
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
                <h3 className="text-[20px] font-semibold leading-[1.25] tracking-[-0.015em] text-[#0a0a0a]">
                  {t(video.title)}
                </h3>

                <p className="mt-2 text-[15px] font-medium tracking-[-0.01em] text-[#565656]">
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
