import Image from "next/image";

const services = [
  {
    title: "Multiplayer",
    desc: "Our team has deep expertise in multiplayer game development and other gaming areas, guaranteeing a thrilling experience with flawless end-to-end execution — from netcode and matchmaking to live multiplayer systems.",
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Full Cycle Game Development",
    desc: "Our experience and a solid skill set allow for offering custom, full-cycle game development. From concept creation to post-release support, we ensure your game runs smoothly across all supported platforms.",
    image:
      "https://images.unsplash.com/photo-1556438064-2d7646166914?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Environment Art",
    desc: "Our environment art team helps you ideate, conceptualize, design and execute a believable, unique world — bringing your idea of a game setting to life.",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Concept Art",
    desc: "Our concept art team has extensive experience in providing 2D concept art for characters and environments, delivering artwork that meets your in-game art direction.",
    image:
      "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Level Design",
    desc: "Our designers merge artistic excellence with gameplay clarity to craft exciting and engaging levels that give the game the atmosphere, environment and characters it needs to succeed.",
    image:
      "https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function OurServiceSection() {
  return (
    <section className="w-full bg-white px-6 pb-[88px] text-[#0a0a0a] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            What We Do
          </p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">
            Our Services
          </h2>

          <p className="mt-4 text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">
            End-to-end game development services — engineering, art and design
            handled by one team.
          </p>
        </div>

        <div className="mt-14 space-y-12 md:space-y-16">
          {services.map((item, index) => {
            const isReverse = index % 2 === 1;

            return (
              <div
                key={item.title}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <div
                  className={`relative w-full overflow-hidden rounded-2xl border border-[#ececec] bg-[#f7f7f7] ${
                    isReverse ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 560px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className={isReverse ? "lg:order-1" : ""}>
                  <h3 className="text-[24px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0a0a0a] md:text-[30px]">
                    {item.title}
                  </h3>

                  <div className="mt-4 h-[3px] w-14 rounded-full bg-[#c91f28]" />

                  <p className="mt-5 max-w-[520px] text-[15.5px] font-medium leading-[1.7] text-[#565656] md:text-[16.5px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
