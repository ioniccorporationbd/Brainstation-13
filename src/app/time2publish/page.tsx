import type { Metadata } from "next";
import StandardPage, { type PageData } from "@/components/resource-kit/StandardPage";

export const metadata: Metadata = {
  title: "Time2Publish | Brain Station 23",
  description: "Time2Publish is an end-to-end publishing platform for authoring, review, approval and digital distribution.",
};

const data: PageData = {
  "eyebrow": "Product · Publishing",
  "title": "Time2Publish — from manuscript to live in one flow",
  "description": "An end-to-end publishing platform for authoring, review, approval and digital distribution — without the spreadsheet chaos.",
  "intro": [
    "Publishing workflows are notoriously manual: drafts over email, review cycles that slip, and content that's hard to reuse. Time2Publish puts the whole pipeline in one place.",
    "Authors, editors and production teams collaborate in real time, with versioning and approvals that are impossible to lose track of."
  ],
  "featuresTitle": "Publishing, streamlined",
  "features": [
    {
      "icon": "pen",
      "title": "Collaborative authoring",
      "description": "Structured content creation with real-time editing."
    },
    {
      "icon": "check",
      "title": "Review & approval",
      "description": "Versioned, auditable editorial workflows."
    },
    {
      "icon": "send",
      "title": "Digital distribution",
      "description": "Publish to web, app and print-ready formats in one click."
    },
    {
      "icon": "book",
      "title": "Content reuse",
      "description": "Structured content that repurposes across channels."
    },
    {
      "icon": "chart",
      "title": "Analytics",
      "description": "Engagement and usage insight for every title."
    },
    {
      "icon": "lock",
      "title": "Access control",
      "description": "Role-based permissions across teams and titles."
    }
  ],
  "stats": [
    {
      "value": "60%",
      "label": "Faster turnaround"
    },
    {
      "value": "1M+",
      "label": "Pages published"
    },
    {
      "value": "100%",
      "label": "Auditable workflow"
    },
    {
      "value": "99.9%",
      "label": "Uptime"
    }
  ],
  "cta": {
    "title": "Modernise your publishing workflow",
    "description": "See how Time2Publish fits your editorial process.",
    "primaryLabel": "Book a demo",
    "primaryHref": "/schedule-a-call",
    "secondaryLabel": "Explore education",
    "secondaryHref": "/education"
  }
};

export default function Page() {
  return <StandardPage data={data} />;
}
