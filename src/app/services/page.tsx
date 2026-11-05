import type { Metadata } from "next";
import StandardPage, { type PageData } from "@/components/resource-kit/StandardPage";

export const metadata: Metadata = {
  title: "Services | Brain Station 23",
  description: "Full-lifecycle engineering across AI, cloud and enterprise software — strategy, build and scale under one accountable team.",
};

const data: PageData = {
  "eyebrow": "Services",
  "title": "Full-lifecycle engineering, under one accountable team",
  "description": "Strategy, design, build and scale — AI, cloud and enterprise software delivered by specialists who own the outcome.",
  "intro": [
    "Brain Station 23 partners with ambitious teams to design, build and scale digital products that move the business forward.",
    "From first architecture decisions to post-launch optimisation, one senior team stays accountable for quality, velocity and long-term maintainability."
  ],
  "featuresTitle": "What we do",
  "features": [
    {
      "icon": "sparkles",
      "title": "AI & ML Development",
      "description": "Production-grade machine learning, LLM apps and intelligent automation.",
      "href": "/ml-ai-development"
    },
    {
      "icon": "cloud",
      "title": "Cloud & DevOps",
      "description": "Migration, infrastructure-as-code and reliability engineering on any cloud.",
      "href": "/cloud-solutions"
    },
    {
      "icon": "database",
      "title": "Data Engineering",
      "description": "Pipelines, warehouses and analytics foundations built to scale.",
      "href": "/data-engineering"
    },
    {
      "icon": "boxes",
      "title": "Enterprise Software",
      "description": "ERP, CRM and custom platforms that fit how your business really runs.",
      "href": "/erp-development"
    },
    {
      "icon": "check",
      "title": "QA & Automation",
      "description": "Test strategy and automation that protect every release.",
      "href": "/qa-testing-and-automation"
    },
    {
      "icon": "lock",
      "title": "Cyber Security",
      "description": "Threat modelling, hardening and compliance baked into delivery.",
      "href": "/cyber-security"
    }
  ],
  "stats": [
    {
      "value": "2500+",
      "label": "Projects delivered"
    },
    {
      "value": "130+",
      "label": "Industries served"
    },
    {
      "value": "800+",
      "label": "Specialists"
    },
    {
      "value": "18+",
      "label": "Years of expertise"
    }
  ],
  "cta": {
    "title": "Not sure where to start?",
    "description": "Tell us your goal — we'll map the fastest safe path to value.",
    "primaryLabel": "Book a discovery call",
    "primaryHref": "/schedule-a-call",
    "secondaryLabel": "See our work",
    "secondaryHref": "/case-studies"
  }
};

export default function Page() {
  return <StandardPage data={data} />;
}
