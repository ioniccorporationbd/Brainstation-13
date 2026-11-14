import {
  Boxes,
  ClipboardList,
  Code2,
  GitBranch,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { getTranslator } from "@/i18n/server";

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

export default async function MvpAiDrivenSdlcProcessSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white py-[52px] text-[#0a0a0a] md:py-[104px]">
      <div className="brand-container">
        {/* Centered Heading */}
        <div className="mx-auto max-w-[820px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("AI-Powered MVP Delivery")}</p>

          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[46px] lg:text-[50px]">{t("Our AI-Driven SDLC Process For MVP")}</h2>

          <p className="mx-auto mt-5 max-w-[700px] text-[15px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B] md:text-[15px]">{t("From requirement analysis to release automation, our AI-assisted workflow helps teams build, test, and launch MVPs faster with better clarity, quality, and delivery control.")}</p>
        </div>

        {/* 6 cards - 3 per row desktop, 2 tablet, 1 mobile */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {workflowSteps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-7 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-[18px] md:text-[20px] font-semibold leading-[1.2] tracking-[-0.015em] text-[#0a0a0a]">
                      {t(step.title)}
                    </h3>
                    <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">
                      {t(step.subtitle)}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex-1 space-y-4 border-t border-[#f0f0f0] pt-5">
                  {step.items.map((item, itemIndex) => (
                    <div key={item.title}>
                      <h4 className="text-[14px] font-bold leading-[1.35] tracking-[-0.01em] text-[#0a0a0a]">
                        {itemIndex + 1}. {t(item.title)}
                      </h4>
                      <p className="mt-1.5 text-[13px] font-medium leading-[1.5] tracking-[-0.01em] text-[#52525B]">
                        {t(item.description)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-[#f0f0f0] pt-5">
                  {step.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-[#fdecec] px-2.5 py-1 text-[11px] font-bold text-[#c91f28]"
                    >
                      {t(tool)}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
