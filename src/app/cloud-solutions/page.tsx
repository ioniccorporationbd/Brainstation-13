import type { Metadata } from "next";
import StandardPage, { type PageData } from "@/components/resource-kit/StandardPage";

export const metadata: Metadata = {
  title: "Cloud Solutions | Brain Station 23",
  description: "Cloud migration, infrastructure-as-code and observability that make systems faster, safer and cheaper to run.",
};

const data: PageData = {
  "eyebrow": "Service · Cloud Solutions",
  "title": "Cloud platforms built for reliability and speed",
  "description": "Migration, infrastructure-as-code and observability that make your systems faster, safer and cheaper to run.",
  "intro": [
    "The cloud only pays off when it's architected deliberately. We design landing zones, automate infrastructure and instrument systems so your team ships faster with fewer 3am pages.",
    "Whether you're migrating monoliths or scaling microservices, we bring a security-first, cost-aware approach."
  ],
  "featuresTitle": "Cloud capabilities",
  "features": [
    {
      "icon": "cloud",
      "title": "Cloud migration",
      "description": "Safe, staged moves from on-prem or legacy clouds to modern platforms."
    },
    {
      "icon": "git",
      "title": "Infrastructure as code",
      "description": "Reproducible environments with Terraform and CI/CD automation."
    },
    {
      "icon": "gauge",
      "title": "Observability",
      "description": "Metrics, logging and tracing so incidents are caught before users notice."
    },
    {
      "icon": "lock",
      "title": "Security & compliance",
      "description": "Guardrails, IAM and compliance controls built into the pipeline."
    },
    {
      "icon": "line",
      "title": "Cost optimisation",
      "description": "Right-sizing and FinOps practices that cut cloud spend."
    },
    {
      "icon": "boxes",
      "title": "Kubernetes & containers",
      "description": "Scalable orchestration with operational excellence baked in."
    }
  ],
  "stats": [
    {
      "value": "40%",
      "label": "Avg. cost reduction"
    },
    {
      "value": "99.99%",
      "label": "Achieved uptime"
    },
    {
      "value": "60%",
      "label": "Faster deployments"
    },
    {
      "value": "200+",
      "label": "Cloud migrations"
    }
  ],
  "cta": {
    "title": "Get more from your cloud",
    "description": "Request a free architecture and cost review.",
    "primaryLabel": "Book a cloud review",
    "primaryHref": "/schedule-a-call",
    "secondaryLabel": "See our work",
    "secondaryHref": "/case-studies"
  }
};

export default function Page() {
  return <StandardPage data={data} />;
}
