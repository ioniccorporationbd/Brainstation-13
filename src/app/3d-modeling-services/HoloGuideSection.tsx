import Image from "next/image";
import { getTranslator } from "@/i18n/server";
import { Globe2, Mic, Sparkles, UsersRound } from "lucide-react";

const HOLO_IMG =
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop";

const features = [
  {
    title: "Life-Scale Hologram",
    desc: "Full-size 3D holographic character projection",
    icon: UsersRound,
  },
  {
    title: "Natural Voice",
    desc: "AI-powered conversational interaction",
    icon: Mic,
  },
  {
    title: "Multilingual",
    desc: "Support for multiple languages",
    icon: Globe2,
  },
  {
    title: "Real-Time 3D",
    desc: "Dynamic rendering and animation",
    icon: Sparkles,
  },
];

export default async function HoloGuideSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white pb-[52px] pt-[8px] text-[#0a0a0a] md:pb-[96px]">
      <div className="brand-container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          {/* Left content */}
          <div>
            <p className="mb-5 inline-flex rounded-full bg-[#fdecec] px-4 py-2 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Featured Product")}</p>

            <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[46px] lg:text-[50px]">{t("3D + AI: HoloGuide AI")}</h2>

            <h3 className="mt-3 text-[18px] font-semibold tracking-[-0.01em] text-[#c91f28] md:text-[20px]">{t("Virtual Holographic Front Desk Assistant")}</h3>

            <p className="mt-5 max-w-[620px] text-[15px] font-medium leading-[1.65] tracking-[-0.01em] text-[#52525B] md:text-[15px]">{t("An interactive holographic AI front desk assistant designed for hotels, hospitals and corporate spaces. With life-scale 3D holographic characters, natural voice interaction and real-time rendering, it welcomes guests, answers questions, guides visitors and reduces operational load.")}</p>

            <div className="mt-9 grid max-w-[640px] grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group flex items-start gap-4 rounded-2xl border border-[#ececec] bg-white p-5 transition-colors duration-300 hover:border-[#c91f28]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                      <Icon size={19} strokeWidth={1.9} />
                    </div>

                    <div>
                      <h4 className="text-[15.5px] font-bold leading-[1.3] tracking-[-0.01em] text-[#0a0a0a]">
                        {t(item.title)}
                      </h4>

                      <p className="mt-1.5 text-[13.5px] font-medium leading-[1.5] text-[#52525B]">
                        {t(item.desc)}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Right image */}
          <div className="relative w-full">
            <div className="relative aspect-[4/4.6] w-full overflow-hidden rounded-2xl border border-[#ececec] bg-[#f7f7f7] lg:max-h-[560px]">
              <Image
                src={HOLO_IMG}
                alt={t("HoloGuide AI holographic front desk assistant in a hotel lobby")}
                fill
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
