const games = [
  {
    title: "Active Skater",
    subtitle: "Skaters gonna skate",
    youtubeId: "dQw4w9WgXcQ",
    points: ["Interactive marketing solution", "Amazing gamepad controls"],
  },
  {
    title: "Football VR",
    subtitle: "Play as a goal keeper",
    youtubeId: "ysz5S6PUM-U",
    points: ["Feel like realistic", "Interactive gaming experience"],
  },
  {
    title: "Project: Gunslinger",
    subtitle: "It’s time to duel",
    youtubeId: "ScMzIvxBSi4",
    points: ["1 VS 1 Duels", "Casual Mode"],
  },
  {
    title: "Viquia Memory Game",
    subtitle: "Sharpen your memory",
    youtubeId: "jNQXAC9IVRw",
    points: ["Swap Unmatching Pairs", "Casual Mode"],
  },
  {
    title: "Westwood Manor",
    subtitle: "Fear the unknown",
    youtubeId: "aqz-KE-bpKQ",
    points: ["Story Rich Single Player", "Lovecraftian horror game"],
  },
  {
    title: "Brainstation City 23",
    subtitle: "Be nostalgic with futuristic features",
    youtubeId: "M7lc1UVf-VE",
    points: ["Procedural infinite level", "Increasing difficulty with leaderboard"],
  },
  {
    title: "Arcade Game Concept",
    subtitle: "Run to survive",
    youtubeId: "YE7VzlLtp-4",
    points: ["Demo arcade game", "Defeat obstacles to reach the final destination"],
  },
  {
    title: "Polar Penguin Racer",
    subtitle: "Customized Racing Game For PC",
    youtubeId: "ysz5S6PUM-U",
    points: ["Multiplayer game", "Avoid obstacles to reach final destination"],
  },
];

export default function RecentGamesSection() {
  return (
    <section className="bg-[#111615] px-4 py-16 text-white">
      <div className="mx-auto max-w-[1520px]">
        <h2 className="text-center text-4xl font-bold text-[#ffa51f] md:text-5xl">
          Our Recent Games
        </h2>

        <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {games.map((game) => (
            <div
              key={game.title}
              className="overflow-hidden rounded-sm bg-black shadow-[0_0_12px_rgba(0,0,0,0.8)]"
            >
              <div className="h-[210px] w-full bg-[#282828]">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${game.youtubeId}`}
                  title={game.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <div className="px-4 pb-3 pt-3">
                <h3 className="text-center text-3xl font-black leading-tight tracking-wide">
                  {game.title}
                </h3>

                <p className="mt-4 text-center text-base font-bold">
                  {game.subtitle}
                </p>

                <div className="mt-6 space-y-2">
                  {game.points.map((point) => (
                    <p key={point} className="text-base leading-5">
                      🎮 {point}
                    </p>
                  ))}
                </div>

                <button className="mt-6 w-full rounded-sm bg-[#f9ae2a] py-3 text-base font-medium text-black">
                  More Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}