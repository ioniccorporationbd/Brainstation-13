import {
  AlarmClock,
  Boxes,
  CircleDot,
  Gem,
  Layers3,
  Network,
  Orbit,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

type BtpCard = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const cards: BtpCard[] = [
  {
    title: "Onboard Engineers in Days, Not Months",
    description:
      "Onboard top 1% pre-vetted tech talents in under 2 weeks so your project doesn’t lose momentum.",
    icon: Layers3,
  },
  {
    title: "Scale on Your Terms",
    description:
      "Scale up or down fast, without penalty. Remote, Hybrid, or Flexi-Remote — whatever fits your workflow and budget.",
    icon: Boxes,
  },
  {
    title: "You Focus on Work, We Handle the Team",
    description:
      "Get local account management support in your time zone — no more chasing offshore vendors.",
    icon: CircleDot,
  },
  {
    title: "Engineers Who Already Know Tomorrow",
    description:
      "Our teams come GenAI-trained and upskilled — no waiting, no extra training budget.",
    icon: Gem,
  },
  {
    title: "Teams That Grow as Fast as You Do",
    description:
      "From Trainees to Leads — Engineers evolve fast with our in-house L&D team.",
    icon: Network,
  },
  {
    title: "All the Roles. One Partner.",
    description:
      "Dev, QA, DevOps, Data, AI/ML, UI/UX — get any tech expertise, exactly when you need it.",
    icon: Orbit,
  },
  {
    title: "Engineers Who Stay, Grow, and Deliver",
    description:
      "Top employer brand, structured career growth, continuous learning and challenging projects — team retention ensured.",
    icon: Users,
  },
  {
    title: "Seamless Knowledge, Zero Downtime",
    description:
      "Agile teams, Scrum and Kanban fit — no relearning, full continuity, documented from day one.",
    icon: ShieldCheck,
  },
];

export default function BtpDifferentSection() {
  return (
    <section className="relative overflow-hidden bg-[#f4f8fc] text-[#11182f]">
      {/* Top Alarm / Headline Bar */}
      <div className="relative overflow-hidden bg-[#111E40] px-6 py-[34px] text-white">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#4fa0d1]/20" />
          <div className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#4fa0d1]/10" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-[1240px] flex-col items-center justify-center gap-4 text-center md:flex-row">
          <span className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#ffab2e] text-black shadow-[0_14px_34px_rgba(255,171,46,0.25)]">
            <AlarmClock size={26} strokeWidth={2.4} />
          </span>

          <h2 className="text-[24px] font-bold leading-[1.2] tracking-[-0.055em] text-white md:text-[34px]">
            Only Keep Reading If Speed, Quality, and Risk-Free Scaling Matter
          </h2>
        </div>
      </div>

      {/* Soft circle background */}
      <div className="pointer-events-none absolute -left-[360px] top-[140px] hidden h-[780px] w-[780px] rounded-full lg:block">
        {Array.from({ length: 44 }).map((_, index) => (
          <span
            key={index}
            className="absolute left-1/2 top-1/2 rounded-full border border-[#74c4ec]/20"
            style={{
              width: `${780 - index * 17}px`,
              height: `${780 - index * 17}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 py-[96px]">
        {/* Section Top Content */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-5 text-[14px] font-bold uppercase tracking-[0.16em] text-[#4fa0d1]">
              Borderless Talent Advantage
            </p>

            <h2 className="max-w-[640px] text-[42px] font-bold leading-[1.08] tracking-[-0.07em] text-[#050b18] md:text-[56px]">
              What Makes Borderless Tech Professionals Different?
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-[690px] text-left text-[19px] font-medium leading-[1.65] tracking-[-0.035em] text-[#42637a] md:text-[21px]">
              The fastest, smartest, risk-free way to scale your engineering
              capacity without the hiring overhead. Build with pre-vetted
              talents, flexible models, local oversight, and continuity from
              day one.
            </p>
          </div>
        </div>

        {/* Bluish Cards: 3 per row */}
        <div className="mt-[76px] grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group relative min-h-[335px] overflow-hidden rounded-[22px] border border-[#2b5f86]/40 bg-[#173557] px-8 py-9 text-white shadow-[0_18px_50px_rgba(17,30,64,0.12)] transition-all duration-300 hover:-translate-y-2 hover:border-[#4fa0d1]/80 hover:bg-[#1f426d] hover:shadow-[0_30px_90px_rgba(31,66,109,0.28)]"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-[220px] w-[220px] rounded-full bg-[#4fa0d1]/10 blur-2xl transition-all duration-300 group-hover:bg-[#4fa0d1]/30" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-[220px] w-[220px] rounded-full bg-[#ffb22c]/0 blur-2xl transition-all duration-300 group-hover:bg-[#ffb22c]/16" />

                {/* Top chip */}
                <div className="pointer-events-none absolute right-6 top-6 grid h-[44px] w-[58px] grid-cols-2 gap-[4px] rounded-[10px] border border-white/15 bg-white/5 p-[7px] opacity-50 transition-all duration-300 group-hover:border-[#ffb22c]/50 group-hover:bg-[#ffb22c]/10 group-hover:opacity-100">
                  <span className="rounded-[4px] bg-white/15" />
                  <span className="rounded-[4px] bg-white/15" />
                  <span className="rounded-[4px] bg-white/15" />
                  <span className="rounded-[4px] bg-white/15" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#234d76] text-[#8bd3ff] ring-1 ring-white/10 transition-all duration-300 group-hover:bg-[#4fa0d1] group-hover:text-white group-hover:ring-[#4fa0d1]">
                      <Icon size={31} strokeWidth={1.7} />
                    </div>

                    <span className="pr-[74px] text-[18px] font-bold leading-none text-white/20 transition-all duration-300 group-hover:text-[#ffb22c]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-11 max-w-[310px] text-left text-[29px] font-bold leading-[1.15] tracking-[-0.06em] text-white md:text-[33px]">
                    {card.title}
                  </h3>

                  <p className="mt-6 max-w-[330px] text-left text-[16px] font-semibold leading-[1.65] tracking-[-0.03em] text-white/82">
                    {card.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#4fa0d1] transition-all duration-300 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>

      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <Sparkles size={26} className="text-[#20a7e8]" />
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>
    </section>
  );
}