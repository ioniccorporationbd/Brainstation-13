import {
  BadgeCheck,
  Box,
  Boxes,
  BriefcaseBusiness,
  Clock3,
  Globe2,
  Handshake,
  Network,
  ShieldCheck,
  Users,
} from "lucide-react";

type FeatureCard = {
  title: string;
  description: string;
  highlight?: boolean;
  icon: React.ElementType;
};

const cards: FeatureCard[] = [
  {
    title: "2 Weeks Deployment",
    description: "Onboard pre-vetted tech talents, fast.",
    icon: Box,
  },
  {
    title: "Local Oversight",
    description: "Managed from The USA.",
    icon: Network,
  },
  {
    title: "Flexible Models",
    description: "Remote, Hybrid, or Flexi-Remote — Flexible Monthly Contract.",
    icon: Boxes,
  },
  {
    title: "2-Week Moneyback Guarantee",
    description: "Only pay if you’re satisfied.",
    icon: ShieldCheck,
    highlight: true,
  },
  {
    title: "Pre-vetted Engineers",
    description: "Access skilled developers already screened for quality.",
    icon: BadgeCheck,
  },
  {
    title: "Dedicated Teams",
    description: "Scale with dedicated offshore teams for long-term delivery.",
    icon: Users,
  },
  {
    title: "Fast Hiring",
    description: "Reduce hiring delays and start projects faster.",
    icon: Clock3,
  },
  {
    title: "Global Talent Pool",
    description: "Hire experienced professionals across multiple technologies.",
    icon: Globe2,
  },
  {
    title: "Account Management",
    description: "Get reliable delivery support with local management.",
    icon: Handshake,
  },
  {
    title: "Enterprise Ready",
    description: "Built for startups, SMEs, and enterprise delivery needs.",
    icon: BriefcaseBusiness,
  },
];

function BtpCard({ card }: { card: FeatureCard }) {
  const Icon = card.icon;

  return (
    <div className="flex h-[235px] w-[300px] shrink-0 flex-col justify-between rounded-[6px] bg-[#111E40] px-[26px] py-[26px] text-white">
      <div className="text-white/75">
        <Icon size={34} strokeWidth={1.2} />
      </div>

      <div>
        <h3
          className={`max-w-[240px] text-[27px] font-normal leading-[1.08] tracking-[-0.055em] ${
            card.highlight ? "text-[#ffb22c]" : "text-white"
          }`}
        >
          {card.title}
        </h3>

        <p className="mt-[18px] max-w-[245px] text-[14px] font-bold leading-[1.45] tracking-[-0.035em] text-white/80">
          {card.description}
        </p>
      </div>
    </div>
  );
}

export default function BorderlessTechProfessionalsSection() {
  const marqueeCards = [...cards, ...cards];

  return (
    <section className="relative overflow-hidden bg-[#f4f8fc] px-6 py-[92px] text-[#11182f]">
      <div className="mx-auto max-w-[1220px]">
        <h2 className="text-[36px] font-normal leading-none tracking-[-0.065em] text-[#11182f] md:text-[42px]">
          Borderless Tech Professionals (BTP)
        </h2>
      </div>

      <div className="relative mt-[62px] overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[140px] bg-gradient-to-r from-[#f4f8fc] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[140px] bg-gradient-to-l from-[#f4f8fc] to-transparent" />

        <div className="btp-marquee flex w-max gap-[30px] hover:[animation-play-state:paused]">
          {marqueeCards.map((card, index) => (
            <BtpCard key={`${card.title}-${index}`} card={card} />
          ))}
        </div>
      </div>

      <style>{`
        .btp-marquee {
          animation: btpMarqueeScroll 35s linear infinite;
        }

        @keyframes btpMarqueeScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 15px));
          }
        }
      `}</style>
    </section>
  );
}