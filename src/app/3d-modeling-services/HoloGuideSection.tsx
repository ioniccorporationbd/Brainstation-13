import { Globe2, Mic, Sparkles, UsersRound } from "lucide-react";

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

export default function HoloGuideSection() {
  return (
    <section className="bg-[#101d3b] px-4 py-24 text-white">
      <div className="mx-auto grid max-w-[1330px] grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_570px]">
        <div>
          <span className="inline-flex rounded-md bg-[#213155] px-4 py-2 text-base font-semibold text-[#4399d7]">
            Featured Product
          </span>

          <h2 className="mt-8 text-[44px] font-light leading-none tracking-[-0.04em] md:text-[64px]">
            3D + AI: HoloGuide AI
          </h2>

          <h3 className="mt-8 text-xl font-medium">
            Virtual Holographic Front Desk Assistant
          </h3>

          <p className="mt-7 max-w-[690px] text-xl font-medium leading-[1.45] text-white">
            An interactive holographic AI front desk assistant designed for
            hotels, hospitals, and corporate spaces. Featuring life-scale 3D
            holographic characters, natural voice interaction, and real-time 3D
            rendering. It welcomes guests, answers questions, guides visitors,
            and enhances customer experience while lowering operational load.
          </p>

          <div className="mt-14 grid max-w-[740px] grid-cols-1 gap-5 sm:grid-cols-2">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex min-h-[105px] gap-5 rounded-lg bg-[#213c5a] p-5"
                >
                  <Icon className="mt-1 h-9 w-9 shrink-0 text-[#18d8ff]" />

                  <div>
                    <h4 className="text-xl font-semibold leading-tight">
                      {item.title}
                    </h4>
                    <p className="mt-3 text-base font-medium leading-6 text-white">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=900&auto=format&fit=crop"
            alt="Holographic AI assistant"
            className="h-[650px] w-full max-w-[570px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}