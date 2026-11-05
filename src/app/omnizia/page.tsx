import type { Metadata } from "next";
import StandardPage, { type PageData } from "@/components/resource-kit/StandardPage";

export const metadata: Metadata = {
  title: "Omnizia | Brain Station 23",
  description: "Omnizia unifies fragmented healthcare data into one secure platform for clinical insight and faster decisions.",
};

const data: PageData = {
  "eyebrow": "Product · Healthcare",
  "title": "Omnizia — unified healthcare intelligence",
  "description": "Bring fragmented patient and operational data into one secure platform, turning it into clinical insight and faster decisions.",
  "intro": [
    "Healthcare data lives in silos — EHRs, labs, imaging and billing rarely speak the same language. Omnizia unifies those sources into a governed, privacy-first data layer.",
    "Clinicians and administrators get real-time dashboards, predictive insights and automated workflows, without wrestling spreadsheets."
  ],
  "featuresTitle": "Inside Omnizia",
  "features": [
    {
      "icon": "database",
      "title": "Unified patient data",
      "description": "Ingest and normalise records across EHR, lab and imaging systems."
    },
    {
      "icon": "activity",
      "title": "Clinical insights",
      "description": "Predictive risk scores and trend analysis for better decisions."
    },
    {
      "icon": "workflow",
      "title": "Workflow automation",
      "description": "Alerts, referrals and tasks triggered by the data itself."
    },
    {
      "icon": "plug",
      "title": "Interoperability",
      "description": "HL7, FHIR and custom connectors for your existing stack."
    },
    {
      "icon": "lock",
      "title": "Security & compliance",
      "description": "HIPAA-aligned controls, encryption and full audit trails."
    },
    {
      "icon": "chart",
      "title": "Dashboards",
      "description": "Role-based views for clinicians, operations and leadership."
    }
  ],
  "stats": [
    {
      "value": "12M+",
      "label": "Records unified"
    },
    {
      "value": "35%",
      "label": "Faster decisions"
    },
    {
      "value": "HIPAA",
      "label": "Aligned controls"
    },
    {
      "value": "99.9%",
      "label": "Availability"
    }
  ],
  "cta": {
    "title": "See Omnizia on your data",
    "description": "Book a guided demo with a healthcare data specialist.",
    "primaryLabel": "Book a demo",
    "primaryHref": "/schedule-a-call",
    "secondaryLabel": "Explore products",
    "secondaryHref": "/industries"
  }
};

export default function Page() {
  return <StandardPage data={data} />;
}
