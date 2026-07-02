import {
  BadgeCheck,
  HeartHandshake,
  Rocket,
  UsersRound,
  ShieldCheck,
} from "lucide-react";

type ValueItem = {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  points: string[];
};

const values: ValueItem[] = [
  {
    title: "Ownership",
    subtitle: "Take responsibility and own the challenges",
    icon: BadgeCheck,
    points: [
      "Client partnership — we exceed client expectations and suggest better solutions.",
      "Grow people — we hire, develop, and care for people.",
      "Organizational ownership — we stay frugal, innovative, and focused on shared success.",
    ],
  },
  {
    title: "Passion & Commitment",
    subtitle: "Be reliable, dedicated, and smart working",
    icon: HeartHandshake,
    points: [
      "We love what we do, and we do what we love.",
      "Passion enables us to learn and stay curious.",
      "We deliver what we commit and earn trust through action.",
    ],
  },
  {
    title: "Agility & Excellence",
    subtitle: "Deliver the best solutions and stay agile",
    icon: Rocket,
    points: [
      "We strive for excellence and lead by example.",
      "We plan agile, deliver fast, and improve continuously.",
      "We take action for continuous improvement.",
    ],
  },
  {
    title: "Team Spirit",
    subtitle: "Be humble and value relationships",
    icon: UsersRound,
    points: [
      "We stay humble and work as a team.",
      "Humility and empathy are at our core.",
      "We value relationships with clients, employees, shareholders, and society.",
    ],
  },
  {
    title: "Honesty",
    subtitle: "Say what you think and do what you say",
    icon: ShieldCheck,
    points: [
      "We are always ethical and sincere in our actions.",
      "We share our views and concerns respectfully.",
      "We are admired for integrity, fairness, and transparency.",
    ],
  },
];

export default function AboutLeadershipValuesSection() {
  return (
    <section className="relative overflow-hidden bg-[#f4f8fc] px-6 py-[110px] text-[#07112b]">
      {/* Background circle lines */}
      <div className="pointer-events-none absolute -left-[360px] top-[40px] h-[760px] w-[760px] rounded-full border border-[#08a7df]/10" />
      <div className="pointer-events-none absolute -left-[320px] top-[80px] h-[680px] w-[680px] rounded-full border border-[#08a7df]/10" />
      <div className="pointer-events-none absolute -left-[280px] top-[120px] h-[600px] w-[600px] rounded-full border border-[#08a7df]/10" />
      <div className="pointer-events-none absolute -left-[240px] top-[160px] h-[520px] w-[520px] rounded-full border border-[#08a7df]/10" />

      <div className="relative z-10 mx-auto max-w-[1220px]">
        {/* Header */}
        <div className="mx-auto max-w-[780px] text-center">
          <span className="inline-flex rounded-full bg-white px-5 py-2 text-[14px] font-bold tracking-[-0.02em] text-[#079ed8] shadow-[0_12px_30px_rgba(17,30,64,0.06)]">
            Leadership Values
          </span>

          <h2 className="mt-6 text-[42px] font-black leading-[1.06] tracking-[-0.075em] text-[#07112b] md:text-[58px] lg:text-[64px]">
            Leadership Values
          </h2>

          <p className="mx-auto mt-6 max-w-[680px] text-[17px] font-medium leading-[1.55] tracking-[-0.035em] text-[#42637a] md:text-[19px]">
            Our values guide how we work, lead, collaborate, and create
            meaningful digital impact for clients, teams, and society.
          </p>
        </div>

        {/* OWNPATH Text */}
        <div className="mt-12 text-center">
          <h3 className="text-[48px] font-black uppercase leading-none tracking-[0.12em] text-[#111E40] md:text-[72px]">
            Ownpath
          </h3>
        </div>

        {/* Cards */}
        <div className="mt-[72px] grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative min-h-[360px] overflow-hidden rounded-[28px] border border-[#dce8f2] bg-white p-8 shadow-[0_20px_60px_rgba(17,30,64,0.07)] transition duration-300 hover:-translate-y-2 hover:border-[#08a7df]/60 hover:shadow-[0_34px_95px_rgba(17,30,64,0.14)]"
              >
                {/* Top gradient line */}
                <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-[#08a7df] via-[#54c8ee] to-[#ffab2e] opacity-0 transition duration-300 group-hover:opacity-100" />

                {/* Glow */}
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#08a7df]/10 blur-[45px] transition duration-300 group-hover:bg-[#08a7df]/20" />

                <div className="relative z-10">
                  <div className="flex h-[64px] w-[64px] items-center justify-center rounded-[18px] bg-[#eaf6fc] text-[#08a7df] transition duration-300 group-hover:bg-[#08a7df] group-hover:text-white">
                    <Icon size={34} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-8 text-[28px] font-black leading-[1.12] tracking-[-0.06em] text-[#07112b] md:text-[32px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[18px] font-bold leading-[1.35] tracking-[-0.04em] text-[#42637a]">
                    {item.subtitle}
                  </p>

                  <ul className="mt-7 space-y-4">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#08a7df]" />

                        <p className="text-[14px] font-medium leading-[1.55] tracking-[-0.025em] text-[#42637a] md:text-[15px]">
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}