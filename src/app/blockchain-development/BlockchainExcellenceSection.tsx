import Link from "next/link";
import { Brain, ShieldCheck, Sparkles } from "lucide-react";

const stats = [
  {
    value: "70%",
    label: "/ Faster Development",
    title: "Intelligent Protocol Engineering",
    description:
      "AI-assisted delivery, contract scaffolding, requirement analysis, and architecture validation accelerate blockchain development while preserving security and best practices.",
  },
  {
    value: "99.9%",
    label: "/ Defect-Free Releases",
    title: "Smart Contract Auditing & Risk Detection",
    description:
      "AI-driven testing combined with static and dynamic analysis to identify logic flaws, vulnerabilities, attack vector, and edge cases in smart contracts before deployment.",
  },
  {
    value: "40%",
    label: "/ Higher Efficiency",
    title: "AI-Optimized Blockchain Performance",
    description:
      "Machine learning models analyze network load, transaction patterns, and infrastructure usage to optimize throughput, cost, and scalability.",
  },
  {
    value: "90%",
    label: "/ Faster Deployments",
    title: "Autonomous Blockchain DevOps",
    description:
      "Agentic automation for deployments, rollbacks, and monitoring across blockchain nodes and services with minimal downtime.",
  },
];

export default function BlockchainExcellenceSection() {
  return (
    <section className="relative overflow-hidden bg-[#f4f9fd] px-6 py-[76px] text-[#11182f]">
      {/* Left circle background */}
      <div className="pointer-events-none absolute left-[-420px] top-[-160px] h-[920px] w-[920px] rounded-full">
        {Array.from({ length: 46 }).map((_, index) => (
          <div
            key={index}
            className="absolute rounded-full border border-[#9ed8f5]/35"
            style={{
              width: `${920 - index * 18}px`,
              height: `${920 - index * 18}px`,
              left: `${index * 9}px`,
              top: `${index * 9}px`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[980px]">
        <div className="grid grid-cols-1 gap-[80px] lg:grid-cols-[0.9fr_1fr]">
          {/* Left Content */}
          <div>
            <h2 className="text-[42px] font-light leading-[1.08] tracking-[-0.065em] text-[#11182f] md:text-[50px]">
              Blockchain <br />
              Excellence with AI
            </h2>

            <p className="mt-6 max-w-[420px] text-[16px] font-medium leading-[1.5] tracking-[-0.035em] text-[#42637a]">
              We combine artificial intelligence with blockchain engineering to
              build systems that are faster to develop, safer to deploy, and
              smarter in operation.
            </p>

            <p className="mt-5 max-w-[450px] text-[16px] font-medium leading-[1.5] tracking-[-0.035em] text-[#42637a]">
              At BS23, AI doesn&apos;t replace engineering judgment it augments
              it. We use AI across the SDLC to reduce risk, improve quality, and
              accelerate blockchain delivery at scale.
            </p>

            <Link
              href="/schedule-a-call"
              className="mt-6 inline-flex rounded-full bg-[#ffab2e] px-5 py-3 text-[13px] font-bold text-black transition hover:bg-[#ffc15a]"
            >
              Schedule a Call
            </Link>

            <div className="mt-[56px] h-[410px] w-full max-w-[470px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1200&auto=format&fit=crop"
                alt="AI blockchain technology"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right Stats */}
          <div className="space-y-[56px] pt-[4px]">
            {stats.map((item) => (
              <div key={item.title}>
                <div className="flex items-end gap-3">
                  <span className="text-[52px] font-light leading-none tracking-[-0.06em] text-[#66bce9]">
                    {item.value}
                  </span>

                  <span className="mb-[10px] text-[12px] font-bold leading-none text-[#337fb8]">
                    {item.label}
                  </span>
                </div>

                <div className="mt-2 h-px w-[112px] bg-[#c9e1ee]" />

                <h3 className="mt-5 max-w-[430px] text-[27px] font-normal leading-[1.08] tracking-[-0.055em] text-[#11182f]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-[460px] text-[14.5px] font-medium leading-[1.45] tracking-[-0.035em] text-[#42637a]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Feature Bar */}
        <div className="mt-[72px] border-t border-[#d8e7ef] pt-[28px]">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1.25fr_0.55fr_0.55fr]">
            <div className="border-l-2 border-[#2b9fe4] pl-5">
              <h3 className="text-[26px] font-normal leading-none tracking-[-0.055em] text-[#11182f]">
                10X Faster Delivery
              </h3>

              <p className="mt-4 max-w-[520px] text-[14.5px] font-medium leading-[1.45] tracking-[-0.035em] text-[#42637a]">
                Our world-class engineers leverage cutting-edge AI to deliver
                solutions 10X faster without compromising quality.
              </p>
            </div>

            <div className="flex items-center justify-center border-l border-[#d8e7ef] py-2">
              <div className="text-center">
                <ShieldCheck
                  size={25}
                  strokeWidth={1.8}
                  className="mx-auto mb-3 text-[#2b9fe4]"
                />
                <p className="text-[14px] font-medium text-[#42637a]">
                  100% IP Protection
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center border-l border-[#d8e7ef] py-2">
              <div className="text-center">
                <Sparkles
                  size={25}
                  strokeWidth={1.8}
                  className="mx-auto mb-3 text-[#2b9fe4]"
                />
                <p className="text-[14px] font-medium text-[#42637a]">
                  Top 1% Talent
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <Brain size={26} className="text-[#20a7e8]" />
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>
    </section>
  );
}