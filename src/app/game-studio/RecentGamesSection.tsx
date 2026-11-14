import Image from "next/image";
import { getTranslator } from "@/i18n/server";
import { Check, Play } from "lucide-react";

const games = [
  {
    title: "Active Skater",
    subtitle: "Skaters gonna skate",
    image:
      "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?q=80&w=800&auto=format&fit=crop",
    points: ["Interactive marketing solution", "Amazing gamepad controls"],
  },
  {
    title: "Football VR",
    subtitle: "Play as a goal keeper",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800&auto=format&fit=crop",
    points: ["Feel like realistic", "Interactive gaming experience"],
  },
  {
    title: "Project: Gunslinger",
    subtitle: "It’s time to duel",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=800&auto=format&fit=crop",
    points: ["1 VS 1 Duels", "Casual Mode"],
  },
  {
    title: "Viquia Memory Game",
    subtitle: "Sharpen your memory",
    image:
      "https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=800&auto=format&fit=crop",
    points: ["Swap Unmatching Pairs", "Casual Mode"],
  },
  {
    title: "Westwood Manor",
    subtitle: "Fear the unknown",
    image:
      "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?q=80&w=800&auto=format&fit=crop",
    points: ["Story Rich Single Player", "Lovecraftian horror game"],
  },
  {
    title: "Magnetic City",
    subtitle: "Be nostalgic with futuristic features",
    image:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    points: [
      "Procedural infinite level",
      "Increasing difficulty with leaderboard",
    ],
  },
  {
    title: "Arcade Game Concept",
    subtitle: "Run to survive",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    points: [
      "Demo arcade game",
      "Defeat obstacles to reach the final destination",
    ],
  },
  {
    title: "Polar Penguin Racer",
    subtitle: "Customized Racing Game For PC",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=800&auto=format&fit=crop",
    points: ["Multiplayer game", "Avoid obstacles to reach final destination"],
  },
];

export default async function RecentGamesSection() {
  const { t } = await getTranslator();
  return (
    <section
      id="recent-games"
      className="w-full scroll-mt-24 bg-white pb-[56px] text-[#0a0a0a] md:pb-[104px]"
    >
      <div className="brand-container">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Portfolio")}</p>

          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Our Recent Games")}</h2>

          <p className="mt-4 text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">{t("A selection of games and interactive experiences delivered by our team.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {games.map((game) => (
            <article
              key={game.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#ececec] bg-white transition-colors duration-300 hover:border-[#c91f28]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f7f7f7]">
                <Image
                  src={game.image}
                  alt={`${t(game.title)} — game artwork`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#c91f28] text-white">
                  <Play size={14} fill="currentColor" strokeWidth={0} />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-[17px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#0a0a0a]">
                  {t(game.title)}
                </h3>

                <p className="mt-1 text-[13.5px] font-semibold text-[#c91f28]">
                  {t(game.subtitle)}
                </p>

                <ul className="mt-4 space-y-2">
                  {game.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-[13.5px] font-medium leading-[1.5] text-[#565656]"
                    >
                      <Check
                        size={14}
                        strokeWidth={3}
                        className="mt-[3px] shrink-0 text-[#c91f28]"
                      />
                      <span>{t(point)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
