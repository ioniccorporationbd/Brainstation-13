import { FaRegCircleCheck } from "react-icons/fa6";

type SolveBlock = {
  title: string;
  items: string[];
};

const solveBlocks: SolveBlock[] = [
  {
    title: "The Challenge",
    items: [
      "Manual, paper-based claims processing and settlement",
      "Fragmented policy data across disconnected systems",
      "High inquiry volumes overwhelm support teams",
      "Agent onboarding bottlenecks are slowing distribution growth",
      "No early fraud detection — financial leakage at scale",
    ],
  },
  {
    title: "Our Approach",
    items: [
      "Automated, digital-first claims processing",
      "Each module integrates cleanly into existing core systems",
      "AI-accelerated processing across claims, support, and fraud detection",
      "Full lifecycle traceability — audit-ready from day one",
      "Deployed and validated with real insurers, measured outcomes",
    ],
  },
];

export default function InsuranceWhatWeSolveSection() {
  return (
    <section className="w-full bg-white py-[76px] md:py-[90px] lg:py-[104px]">
      <div className="mx-auto w-full max-w-[1220px] px-5 sm:px-8 xl:px-0">
        <h2 className="text-center text-[42px] font-bold leading-[1.15] tracking-[-0.04em] text-black sm:text-[52px] lg:text-[58px]">
          What We Solve
        </h2>

        <div className="mx-auto mt-[54px] grid max-w-[1120px] grid-cols-1 gap-[22px] lg:grid-cols-2">
          {solveBlocks.map((block) => (
            <SolveCard key={block.title} block={block} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SolveCard({ block }: { block: SolveBlock }) {
  return (
    <article className="min-h-[310px] border border-[#dcdfe3] bg-white px-[30px] py-[34px] sm:px-[40px] sm:py-[38px]">
      <h3 className="text-[22px] font-semibold leading-[1.25] tracking-[-0.025em] text-[#007eb5] sm:text-[25px]">
        {block.title}
      </h3>

      <ul className="mt-[24px] space-y-[11px]">
        {block.items.map((item) => (
          <li
            key={item}
            className="grid grid-cols-[18px_1fr] gap-[13px] text-[17px] font-normal leading-[1.45] tracking-[-0.015em] text-black sm:text-[19px]"
          >
            <span className="mt-[4px] flex text-[16px] text-[#008fd3]">
              <FaRegCircleCheck />
            </span>

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}