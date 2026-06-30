import {
  Bot,
  Boxes,
  Bug,
  ClipboardList,
  Code2,
  GitBranch,
  Rocket,
  ShieldCheck,
} from "lucide-react";

type WorkflowStep = {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  items: {
    title: string;
    description: string;
  }[];
  tools: string[];
};

const workflowSteps: WorkflowStep[] = [
  {
    title: "Requirement Analysis",
    subtitle: "Workflow",
    icon: ClipboardList,
    items: [
      {
        title: "Transcription & Summarization",
        description:
          "AI tools transcribe meetings and summarize discussions into clear product insights.",
      },
      {
        title: "Requirement Refinement",
        description:
          "LLMs analyze meeting notes to generate user stories, acceptance criteria, and backlog items.",
      },
      {
        title: "Backlog Review",
        description:
          "AI facilitates backlog discussions and suggests missing requirements or clarifications.",
      },
    ],
    tools: ["OpenAI", "Claude", "Jira", "Confluence", "Gemini"],
  },
  {
    title: "Planning & Estimation",
    subtitle: "Workflow",
    icon: GitBranch,
    items: [
      {
        title: "Sprint WBS Creation",
        description:
          "Generate sprint work breakdown structures from user stories and product priorities.",
      },
      {
        title: "Risk Management",
        description:
          "Analyze sprint scope and progress to identify delivery risks before they impact timelines.",
      },
      {
        title: "Jira Ticket Automation",
        description:
          "Create structured tickets, subtasks, and sprint-ready documentation automatically.",
      },
    ],
    tools: ["OpenAI", "Claude", "Python", "Jira", "Confluence"],
  },
  {
    title: "Design & Architecture",
    subtitle: "Workflow",
    icon: Boxes,
    items: [
      {
        title: "Architecture Brainstorming",
        description:
          "AI assists domain-driven design, trade-off analysis, and modular architecture planning.",
      },
      {
        title: "Visualization",
        description:
          "Generate UML, flow diagrams, and architecture maps from product and system context.",
      },
      {
        title: "Review",
        description:
          "AI reviews architecture documents for edge cases, scalability, and security concerns.",
      },
    ],
    tools: ["OpenAI", "Claude", "Mermaid", "Cursor", "Windsurf"],
  },
  {
    title: "Development",
    subtitle: "Workflow",
    icon: Code2,
    items: [
      {
        title: "Code Generation",
        description:
          "AI coding tools generate functions, tests, SQL queries, and reusable modules faster.",
      },
      {
        title: "Contextual Assistance & Bug Fixing",
        description:
          "AI analyzes project files to answer questions, explain code, and fix bugs using project context.",
      },
      {
        title: "Refactoring",
        description:
          "AI suggests modernization patterns, cleaner structure, and maintainable code improvements.",
      },
    ],
    tools: ["OpenAI", "Claude", "Cursor", "Windsurf", "GitHub"],
  },
  {
    title: "Testing & QA Automation",
    subtitle: "Workflow",
    icon: ShieldCheck,
    items: [
      {
        title: "E2E Test Automation",
        description:
          "Convert user stories into Playwright scripts, test data, and execution summaries.",
      },
      {
        title: "Test Generation",
        description:
          "Generate unit, integration, and edge-case tests from acceptance criteria.",
      },
      {
        title: "Backlog Review",
        description:
          "AI reviews PR diffs and generated tests to identify coverage gaps.",
      },
      {
        title: "Test Suite Maintenance",
        description:
          "AI agents flag redundant tests and refactor test logic automatically.",
      },
    ],
    tools: ["Playwright", "Claude", "Windsurf", "Jest", "Cypress"],
  },
  {
    title: "DevOps & Release",
    subtitle: "Workflow",
    icon: Rocket,
    items: [
      {
        title: "Build & Dependency Validation",
        description:
          "AI checks dependency changes, security risks, and version drift before release.",
      },
      {
        title: "Release Automation",
        description:
          "Generate release artifacts, tags, changelogs, and deployment metadata.",
      },
      {
        title: "Deployment Monitoring",
        description:
          "Monitor metrics, logs, and alerts to suggest rollback or patch actions when needed.",
      },
    ],
    tools: ["Docker", "GitHub", "Grafana", "Kubernetes", "CI/CD"],
  },
];

export default function MvpAiDrivenSdlcProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#f4f8fc] px-6 py-[96px] text-[#11182f]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[850px] text-center">
          <p className="mb-5 text-[14px] font-bold uppercase tracking-[0.16em] text-[#4fa0d1]">
            AI-Powered MVP Delivery
          </p>

          <h2 className="text-[42px] font-bold leading-[1.08] tracking-[-0.07em] text-[#050b18] md:text-[56px]">
            Our AI-Driven SDLC Process For MVP
          </h2>

          <p className="mx-auto mt-7 max-w-[760px] text-[18px] font-medium leading-[1.65] tracking-[-0.035em] text-[#42637a] md:text-[21px]">
            From requirement analysis to release automation, our AI-assisted
            workflow helps teams build, test, and launch MVPs faster with better
            clarity, quality, and delivery control.
          </p>
        </div>

        <div className="mt-[76px] grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {workflowSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="group relative flex min-h-[560px] flex-col overflow-hidden rounded-[18px] border border-[#dce8f2] bg-white px-7 py-8 shadow-[0_16px_45px_rgba(17,30,64,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#b7dff4] hover:shadow-[0_28px_80px_rgba(17,30,64,0.14)]"
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-[210px] w-[210px] rounded-full bg-[#4fa0d1]/10 blur-2xl transition-all duration-300 group-hover:bg-[#4fa0d1]/25" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-[210px] w-[210px] rounded-full bg-[#ffb22c]/0 blur-2xl transition-all duration-300 group-hover:bg-[#ffb22c]/15" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#f4f8fc] text-[#4fa0d1] ring-1 ring-[#dce8f2] transition-all duration-300 group-hover:bg-[#4fa0d1] group-hover:text-white group-hover:ring-[#4fa0d1]">
                      <Icon size={29} strokeWidth={1.7} />
                    </div>

                    <span className="text-[18px] font-bold leading-none text-[#111E40]/20 transition-all duration-300 group-hover:text-[#ffab2e]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-7 border-b border-[#dce8f2] pb-6">
                    <h3 className="text-[24px] font-bold leading-[1.18] tracking-[-0.055em] text-[#050b18] md:text-[28px]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-[14px] font-bold leading-none text-[#4fa0d1]">
                      {step.subtitle}
                    </p>
                  </div>

                  <div className="mt-7 flex-1 space-y-6">
                    {step.items.map((item, itemIndex) => (
                      <div key={item.title}>
                        <h4 className="text-[17px] font-bold leading-[1.35] tracking-[-0.035em] text-[#050b18]">
                          {itemIndex + 1}. {item.title}
                        </h4>

                        <p className="mt-3 text-[15px] font-medium leading-[1.55] tracking-[-0.025em] text-[#42637a]">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <p className="mb-4 text-[16px] font-bold tracking-[-0.03em] text-[#050b18]">
                      Tools
                    </p>

                    <div className="flex flex-wrap gap-2.5">
                      {step.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full bg-[#e7f3fb] px-3 py-1.5 text-[12px] font-bold text-[#246178] ring-1 ring-[#d6eaf5]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#4fa0d1] transition-all duration-300 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>

      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <Bot size={26} className="text-[#20a7e8]" />
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>
    </section>
  );
}