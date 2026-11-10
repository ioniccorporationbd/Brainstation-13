import type { ComponentType } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CreditCard,
  FileCheck2,
  FileText,
  Mail,
  MessageSquare,
  ShieldAlert,
  Smartphone,
  UserCheck,
} from "lucide-react";

type Capability = {
  title: string;
  description: string;
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
  href?: string;
};

const capabilities: Capability[] = [
  {
    title: "Insurance 360 App",
    description:
      "Policyholders manage policies, claims, service requests, telemedicine and wellness tools in one app.",
    icon: Smartphone,
    href: "/products/insurance-360-app",
  },
  {
    title: "Integrated Claims Solution",
    description:
      "End-to-end claims lifecycle with fraud detection, adjudication, payments and real-time analytics.",
    icon: FileCheck2,
  },
  {
    title: "Agent Onboarding System",
    description:
      "Digital registration, document verification, training, exams and progress tracking at scale.",
    icon: UserCheck,
  },
  {
    title: "Broker-Led Automation",
    description:
      "Email-to-ticket intake captures needs, tracks quotes and generates smart comparison reports.",
    icon: Mail,
  },
  {
    title: "AI Chatbot",
    description:
      "Chat assistant gives instant answers, simplifies claims and keeps support available around the clock.",
    icon: MessageSquare,
  },
  {
    title: "AI Fraud Screening",
    description:
      "Flags anomalous claims early, reads medical documents and extracts clinical signals.",
    icon: ShieldAlert,
  },
  {
    title: "Policy Administration",
    description:
      "Centralized policy, customer and benefit records with configurable servicing workflows.",
    icon: FileText,
  },
  {
    title: "Premium & Billing Management",
    description:
      "Premium tracking, payment records and billing visibility across branches and agents.",
    icon: CreditCard,
  },
];

export default function InsuranceCapabilitiesSection() {
  return (
    <section className="w-full bg-white px-6 py-[80px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Business Impact
          </p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">
            Our Insurtech Capabilities
          </h2>

          <p className="mx-auto mt-5 max-w-[640px] text-[16px] font-medium leading-[1.6] tracking-[-0.01em] text-[#565656] md:text-[17px]">
            Purpose-built modules for every layer of insurance operations, each
            one deployable on its own.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <CapabilityCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({ item }: { item: Capability }) {
  const Icon = item.icon;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
        <Icon size={22} strokeWidth={1.8} />
      </div>

      <h3 className="mt-5 text-[17px] font-bold leading-[1.3] tracking-[-0.01em] text-[#0a0a0a]">
        {item.title}
      </h3>

      <p className="mt-3 flex-1 text-[14.5px] font-medium leading-[1.6] tracking-[-0.01em] text-[#565656]">
        {item.description}
      </p>

      {item.href && (
        <Link
          href={item.href}
          className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-bold text-[#c91f28] transition-colors duration-300 hover:text-[#a71920]"
        >
          Read More
          <ArrowRight size={16} strokeWidth={2} />
        </Link>
      )}
    </article>
  );
}
