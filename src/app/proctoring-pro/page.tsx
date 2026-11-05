import type { Metadata } from "next";
import StandardPage, { type PageData } from "@/components/resource-kit/StandardPage";

export const metadata: Metadata = {
  title: "Proctoring Pro | Brain Station 23",
  description: "Secure, AI-assisted online proctoring that protects exam integrity while staying fair and simple for every candidate.",
};

const data: PageData = {
  "eyebrow": "Product · LMS",
  "title": "Proctoring Pro — trustworthy online exams",
  "description": "Secure, AI-assisted proctoring that protects exam integrity while staying fair and simple for every candidate.",
  "intro": [
    "Moving assessments online shouldn't mean losing trust. Proctoring Pro combines live supervision, AI integrity checks and a frictionless candidate experience.",
    "Institutions scale exams with confidence — and candidates sit them without unnecessary stress."
  ],
  "featuresTitle": "Exam integrity, end to end",
  "features": [
    {
      "icon": "video",
      "title": "Live proctoring",
      "description": "Real-time supervision with flexible scheduling."
    },
    {
      "icon": "eye",
      "title": "AI integrity checks",
      "description": "Behavioural and object detection flags genuine risks, not noise."
    },
    {
      "icon": "fingerprint",
      "title": "Identity verification",
      "description": "Biometric and ID checks before the exam begins."
    },
    {
      "icon": "lock",
      "title": "Browser lockdown",
      "description": "A focused exam environment that blocks distractions."
    },
    {
      "icon": "chart",
      "title": "Reports & audit",
      "description": "Detailed session reports and evidence for every candidate."
    },
    {
      "icon": "users",
      "title": "Scale",
      "description": "From a single cohort to tens of thousands, reliably."
    }
  ],
  "stats": [
    {
      "value": "99.9%",
      "label": "Exam uptime"
    },
    {
      "value": "50k+",
      "label": "Concurrent seats"
    },
    {
      "value": "<1%",
      "label": "False-flag rate"
    },
    {
      "value": "100%",
      "label": "Audit trail"
    }
  ],
  "cta": {
    "title": "Protect your assessments",
    "description": "Book a walkthrough with an assessment specialist.",
    "primaryLabel": "Book a demo",
    "primaryHref": "/schedule-a-call",
    "secondaryLabel": "Explore education",
    "secondaryHref": "/education"
  }
};

export default function Page() {
  return <StandardPage data={data} />;
}
