import { AlertCircle, CheckCircle2, CircleCheck } from "lucide-react";

type SolveBlock = {
  title: string;
  subtitle: string;
  items: string[];
  highlight: boolean;
};

const solveBlocks: SolveBlock[] = [
  {
    title: "The Challenge",
    subtitle: "Where manual workflows slow insurers down",
    highlight: false,
    items: [
      "Manual, paper-based claims processing and settlement",
      "Fragmented policy data across disconnected systems",
      "High inquiry volumes overwhelm support teams",
      "Agent onboarding bottlenecks slow distribution growth",
      "No early fraud detection — financial leakage at scale",
    ],
  },
  {
    title: "Our Approach",
    subtitle: "How the platform addresses each gap",
    highlight: true,
    items: [
      "Automated, digital-first claims processing",
      "Each module integrates cleanly into existing core systems",
      "AI-accelerated processing across claims, support and fraud detection",
      "Full lifecycle traceability — audit-ready from day one",
      "Deployed with insurers and validated against real operational workflows",
    ],
  },
];

export default function InsuranceWhatWeSolveSection() {
  return (
    <section className="w-full bg-white px-6 pb-[80px] pt-[8px] text-[#0a0a0a] md:pb-[96px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Challenges &amp; Approach
          </p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">
            What We Solve
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {solveBlocks.map((block) => (
            <SolveCard key={block.title} block={block} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SolveCard({ block }: { block: SolveBlock }) {
  const Icon = block.highlight ? CheckCircle2 : AlertCircle;

  return (
    <article
      className={`group flex h-full flex-col rounded-2xl border bg-white p-7 transition-colors duration-300 sm:p-8 ${
        block.highlight
          ? "border-[#c91f28]/35 hover:border-[#c91f28]"
          : "border-[#ececec] hover:border-[#c91f28]"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
          <Icon size={22} strokeWidth={1.8} />
        </div>

        <div>
          <h3 className="text-[19px] font-bold leading-[1.25] tracking-[-0.01em] text-[#0a0a0a]">
            {block.title}
          </h3>

          <p className="mt-0.5 text-[13.5px] font-medium leading-[1.4] text-[#8a8a8a]">
            {block.subtitle}
          </p>
        </div>
      </div>

      <ul className="mt-6 space-y-3">
        {block.items.map((item) => (
          <li
            key={item}
            className="grid grid-cols-[18px_1fr] gap-3 text-[15px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656]"
          >
            <span className="mt-0.5 text-[#c91f28]">
              <CircleCheck size={18} strokeWidth={2} />
            </span>

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
