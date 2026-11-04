import type { Metadata } from "next";
import {
  ShieldCheck,
  Lock,
  FileCheck2,
  ServerCog,
  Eye,
  KeyRound,
  Bug,
  Network,
} from "lucide-react";

import {
  ResourceHero,
  Section,
  SectionHeader,
  FeatureGrid,
  LogoRow,
  SplitBlock,
  CtaBanner,
} from "@/components/resource-kit/ui";
import type { FeatureItem } from "@/components/resource-kit/ui";
import FaqAccordion from "@/components/resource-kit/FaqAccordion";
import type { FaqItem } from "@/components/resource-kit/FaqAccordion";

export const metadata: Metadata = {
  title: "Enterprise-Grade Security | Brain Station 23",
  description:
    "How Brain Station 23 protects client data with ISO-aligned controls, GDPR compliance, secure engineering and defence-in-depth operations.",
};

const complianceLogos = [
  { src: "/images/footer/compliance-iso-1.svg", alt: "ISO 27001 certified" },
  { src: "/images/footer/compliance-iso-2.svg", alt: "ISO 9001 certified" },
  { src: "/images/footer/compliance-gdpr.svg", alt: "GDPR compliant" },
  { src: "/images/footer/compliance-cmmi.svg", alt: "CMMI Level 5" },
];

const pillars: FeatureItem[] = [
  {
    icon: Lock,
    title: "Data Protection",
    description:
      "Encryption in transit and at rest, strict data-retention policies and least-privilege access keep sensitive information safe.",
  },
  {
    icon: KeyRound,
    title: "Identity & Access",
    description:
      "Single sign-on, multi-factor authentication and role-based controls ensure only the right people reach the right systems.",
  },
  {
    icon: FileCheck2,
    title: "Compliance",
    description:
      "ISO 27001-aligned management systems and GDPR-ready data handling give you audit-ready assurance.",
  },
  {
    icon: ServerCog,
    title: "Resilience",
    description:
      "Redundant infrastructure, tested backups and documented disaster-recovery plans keep services running.",
  },
];

const practices: FeatureItem[] = [
  {
    icon: Eye,
    title: "Continuous Monitoring",
    description:
      "24/7 logging, alerting and anomaly detection across infrastructure and applications.",
  },
  {
    icon: Bug,
    title: "Secure SDLC",
    description:
      "Threat modelling, code review and automated scanning built into every release pipeline.",
  },
  {
    icon: Network,
    title: "Segmented Architecture",
    description:
      "Network isolation and hardened environments limit blast radius if something goes wrong.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "How is client data segregated?",
    answer:
      "Each engagement operates within its own isolated environments and access boundaries. Production data is never mixed between clients, and access is provisioned on a strict need-to-know basis.",
  },
  {
    question: "Are you GDPR compliant?",
    answer:
      "Yes. We follow GDPR-aligned data-handling practices, including data-minimisation, lawful processing agreements and support for data-subject requests. Our compliance artefacts are available on request under NDA.",
  },
  {
    question: "Do you support security reviews and penetration tests?",
    answer:
      "Absolutely. We welcome client-led security assessments and can share results from independent penetration tests and our ISO-aligned control documentation as part of due diligence.",
  },
  {
    question: "What happens to our data after the engagement ends?",
    answer:
      "All data is returned and securely destroyed according to the agreed retention schedule. You receive written confirmation once deletion is complete.",
  },
];

export default function EnterpriseSecurityPage() {
  return (
    <main>
      <ResourceHero
        eyebrow="Resources · Enterprise-Grade Security"
        title="Security Engineered Into Everything"
        description="Your data and your customers' trust are our highest priority. We build, operate and deliver with defence-in-depth security and audit-ready compliance at every layer."
        image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1800&auto=format&fit=crop"
        imageAlt="Cybersecurity concept with digital lock and code"
      />

      <Section>
        <SectionHeader
          eyebrow="Compliance"
          title="Certified, aligned and audit-ready"
          description="Our controls are mapped to internationally recognised standards, so security is verifiable — not just promised."
          align="center"
        />
        <div className="mt-14">
          <LogoRow logos={complianceLogos} />
        </div>
      </Section>

      <Section className="bg-[#f4f8fc]">
        <SectionHeader eyebrow="Defence in Depth" title="Four layers of protection" />
        <div className="mt-14">
          <FeatureGrid items={pillars} columns={2} />
        </div>
      </Section>

      <Section>
        <SplitBlock
          image="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1600&auto=format&fit=crop"
          imageAlt="Security operations centre with monitoring dashboards"
          eyebrow="In Practice"
          title="Security that runs every day, not just at audit time"
          paragraphs={[
            "Security is embedded in our engineering culture. Every team follows hardened build pipelines, reviewed code and automated vulnerability scanning.",
            "Our security operations continuously monitor for threats and respond through documented incident procedures.",
          ]}
          bullets={[
            "Automated dependency and container scanning",
            "Reviewed, hardened build pipelines",
            "Documented incident-response playbooks",
          ]}
        />
        <div className="mt-20">
          <FeatureGrid items={practices} />
        </div>
      </Section>

      <Section className="bg-[#f4f8fc]">
        <SectionHeader
          eyebrow="Questions"
          title="Security & compliance FAQ"
          align="center"
        />
        <div className="mt-14">
          <FaqAccordion items={faqs} />
        </div>
      </Section>

      <CtaBanner
        title="Have a security review to complete?"
        description="We're ready to support your due-diligence and security-assessment process with full documentation."
        primary={{ label: "Contact Our Team", href: "/contact" }}
        secondary={{ label: "Learn About Sustainability", href: "/sustainability" }}
      />
    </main>
  );
}
