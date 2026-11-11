import {
  BarChart3,
  Bot,
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
    <section className="w-full overflow-hidden bg-white px-6 pb-[88px] text-[#000000] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            The AI Roadmap
          </p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#000000] md:text-[42px]">
            Next-Generation Intelligence
          </h2>

          <p className="mt-4 text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">
            Continuous evolution. Our upcoming release pipeline is heavily
            focused on integrating advanced AI models, computer vision, and
            predictive analytics.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {roadmapCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group flex h-full flex-col border border-[#ececec] bg-white px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#c91f28]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[6px] bg-[#c91f28] text-white transition-colors duration-300 group-hover:bg-[#a71920]">
                    <Icon size={20} strokeWidth={1.9} />
                  </div>

                  <span className="text-[15px] font-bold leading-none tracking-[-0.01em] text-[#d9d9d9]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 text-[18px] font-bold leading-[1.3] tracking-[-0.01em] text-[#000000]">
                  {card.title}
                </h3>

                <p className="mt-3 text-[14px] font-medium leading-[1.65] text-[#5f5f5f]">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
