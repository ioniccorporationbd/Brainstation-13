import {
  BarChart3,
  Bot,
  BrainCircuit,
  Gamepad2,
  Route,
  ScanLine,
  ShoppingCart,
} from "lucide-react";

type RoadmapCard = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const roadmapCards: RoadmapCard[] = [
  {
    title: "AI Knowledgebase Chatbot",
    description:
      "Empower field reps with a conversational AI assistant for instant access to complex product manuals and internal HR policies.",
    icon: Bot,
  },
  {
    title: "AI Shelf Analysis",
    description:
      "Leverage computer vision to automatically detect planogram compliance and calculate share-of-shelf from a single photo.",
    icon: ScanLine,
  },
  {
    title: "Sales Prediction & Insight",
    description:
      "Harness machine learning models to forecast territory-wise demand and dynamically adjust sales targets.",
    icon: BarChart3,
  },
  {
    title: "AI Predictive Ordering",
    description:
      "Intelligent engines to analyze historical order patterns and auto-generate draft orders for up-selling.",
    icon: ShoppingCart,
  },
  {
    title: "Field Gamification",
    description:
      "Interactive leaderboards and real-time incentive tracking to boost motivation and drive target completion.",
    icon: Gamepad2,
  },
  {
    title: "AI Journey Planning",
    description:
      "Intelligent routing algorithms that dynamically optimize daily tour plans based on target priority, and real-time field conditions.",
    icon: Route,
  },
];

export default function EnterpriseMsfaAiRoadmapSection() {
  return (
    <section className="relative overflow-hidden bg-[#111E40] px-6 py-[96px] text-white">
      <div className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-[#4fa0d1]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-10 h-[360px] w-[360px] rounded-full bg-[#ffab2e]/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1180px]">
        {/* Header */}
        <div className="mx-auto max-w-[920px] text-center">
          <p className="text-[20px] font-medium leading-none tracking-[-0.035em] text-[#3f93cf]">
            The AI Roadmap
          </p>

          <h2 className="mt-7 text-[44px] font-bold leading-[1.08] tracking-[-0.065em] text-white md:text-[64px]">
            Next-Generation Intelligence
          </h2>

          <p className="mx-auto mt-7 max-w-[960px] text-[18px] font-bold leading-[1.55] tracking-[-0.035em] text-white/92 md:text-[21px]">
            Continuous evolution. Our upcoming release pipeline is heavily
            focused on integrating advanced AI models, computer vision, and
            predictive analytics.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-[72px] grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {roadmapCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group relative min-h-[285px] overflow-hidden rounded-[10px] bg-white px-8 py-9 text-[#11182f] shadow-[0_18px_55px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(79,160,209,0.22)]"
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-[180px] w-[180px] rounded-full bg-[#4fa0d1]/0 blur-2xl transition-all duration-300 group-hover:bg-[#4fa0d1]/18" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-[180px] w-[180px] rounded-full bg-[#ffab2e]/0 blur-2xl transition-all duration-300 group-hover:bg-[#ffab2e]/12" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#08a9df] text-white shadow-[0_14px_32px_rgba(8,169,223,0.28)] transition duration-300 group-hover:scale-110 group-hover:bg-[#ffab2e] group-hover:text-black">
                      <Icon size={25} strokeWidth={1.9} />
                    </div>

                    <span className="text-[18px] font-bold leading-none text-[#111E40]/10 transition duration-300 group-hover:text-[#4fa0d1]/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-8 max-w-[330px] text-[25px] font-bold leading-[1.14] tracking-[-0.055em] text-[#050b18] md:text-[29px]">
                    {card.title}
                  </h3>

                  <p className="mt-6 max-w-[345px] text-[18px] font-medium leading-[1.55] tracking-[-0.035em] text-[#42637a] md:text-[20px]">
                    {card.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#08a9df] transition-all duration-300 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>

      {/* Chat Button */}
      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <BrainCircuit size={26} className="text-[#20a7e8]" />
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-white/45">
        Powered by NeuralFlow
      </span>
    </section>
  );
}