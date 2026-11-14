import {
  Boxes,
  BrainCircuit,
  CheckCircle2,
  CloudCog,
  Code2,
  Database,
  GitBranch,
  Handshake,
  Layers3,
  LockKeyhole,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";
import { getTranslator } from "@/i18n/server";

type TrustCard = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const trustCards: TrustCard[] = [
  {
    title: "Continuous Engagement",
    description:
      "Biweekly check-ins with account managers ensure your priorities are heard and delivered.",
    icon: Boxes,
  },
  {
    title: "Top Industry Tools",
    description:
      "We use Jira, Azure DevOps, GitHub, Slack, and modern collaboration tools for smooth workflows.",
    icon: Layers3,
  },
  {
    title: "Agile Delivery, Transparent Process",
    description:
      "Scrum and Kanban keep work clear and flexible. You join sprint planning and reviews.",
    icon: RefreshCcw,
  },
  {
    title: "Pre-Vetted Engineering Talent",
    description:
      "Every engineer is screened for technical strength, communication, reliability, and ownership.",
    icon: CheckCircle2,
  },
  {
    title: "Secure Delivery Practice",
    description:
      "We follow secure development practices, access control, NDA, and IP protection standards.",
    icon: ShieldCheck,
  },
  {
    title: "AI-Ready Teams",
    description:
      "Our engineers are trained to use AI tools responsibly for faster development and better quality.",
    icon: BrainCircuit,
  },
  {
    title: "Full Stack Capability",
    description:
      "Backend, frontend, mobile, DevOps, QA, UI/UX, data, and AI talent available under one team.",
    icon: Code2,
  },
  {
    title: "Cloud & DevOps Support",
    description:
      "AWS, Azure, Docker, Kubernetes, CI/CD, monitoring, and deployment support when you need it.",
    icon: CloudCog,
  },
  {
    title: "Knowledge Continuity",
    description:
      "Documentation, handover, sprint notes, and stable team structure reduce delivery risk.",
    icon: Database,
  },
  {
    title: "Flexible Scaling Model",
    description:
      "Scale up or down based on your roadmap, sprint pressure, and business priorities.",
    icon: GitBranch,
  },
  {
    title: "Local Account Management",
    description:
      "You get direct communication, delivery follow-up, and account support from a dedicated team.",
    icon: Handshake,
  },
  {
    title: "Compliance Friendly Workflow",
    description:
      "We support enterprise-grade workflows with security, reporting, and audit-ready delivery habits.",
    icon: LockKeyhole,
  },
];

export default async function WhyClientsTrustUsSection() {
  const { t } = await getTranslator();
  return (
    <section className="bg-white py-[52px] text-[#0a0a0a] md:py-[104px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[46px] lg:text-[50px]">{t("Why Clients Trust Us")}</h2>

          <p className="mx-auto mt-4 max-w-[520px] text-[15px] md:text-[16px] font-medium leading-[1.5] tracking-[-0.01em] text-[#52525B]">{t("Complete solution components working together for your success")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-7 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="text-[#c91f28]">
                  <Icon size={26} strokeWidth={1.7} />
                </div>

                <h3 className="mt-5 text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#0a0a0a]">
                  {t(card.title)}
                </h3>

                <p className="mt-2 text-[14px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B]">
                  {t(card.description)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
