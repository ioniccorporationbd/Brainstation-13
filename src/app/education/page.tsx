import type { Metadata } from "next";
import StandardPage, { type PageData } from "@/components/resource-kit/StandardPage";

export const metadata: Metadata = {
  title: "Education | Brain Station 23",
  description: "Learning platforms, assessment and content systems that make education more accessible, measurable and engaging.",
};

const data: PageData = {
  "eyebrow": "Industry · Education",
  "title": "Learning technology for modern institutions",
  "description": "We build learning platforms, assessment tools and content systems that make education more accessible, measurable and engaging.",
  "intro": [
    "Education is moving online and hybrid — and the technology has to keep up with pedagogy, not the other way round. We help universities, training providers and EdTech companies ship platforms learners actually finish.",
    "From LMS to secure assessment, we cover the learner journey end to end."
  ],
  "featuresTitle": "Education solutions",
  "features": [
    {
      "icon": "graduation",
      "title": "Learning management",
      "description": "Custom LMS, course delivery and progress tracking.",
      "href": "/lms-development"
    },
    {
      "icon": "monitor",
      "title": "Assessment & proctoring",
      "description": "Online exams with AI-assisted integrity and live proctoring.",
      "href": "/proctoring-pro"
    },
    {
      "icon": "book",
      "title": "Content publishing",
      "description": "Authoring, review and digital publishing workflows.",
      "href": "/time2publish"
    },
    {
      "icon": "users",
      "title": "Student engagement",
      "description": "Portals, communities and personalised learning paths."
    },
    {
      "icon": "chart",
      "title": "Learning analytics",
      "description": "Outcome tracking and at-risk learner insights."
    },
    {
      "icon": "globe",
      "title": "Accessibility",
      "description": "WCAG-compliant, inclusive experiences for every learner."
    }
  ],
  "stats": [
    {
      "value": "1M+",
      "label": "Learners supported"
    },
    {
      "value": "50+",
      "label": "Education platforms"
    },
    {
      "value": "99.9%",
      "label": "Exam uptime"
    },
    {
      "value": "30%",
      "label": "Completion lift"
    }
  ],
  "cta": {
    "title": "Building for learners?",
    "description": "Talk to a team that has shipped education products at scale.",
    "primaryLabel": "Talk to an expert",
    "primaryHref": "/schedule-a-call",
    "secondaryLabel": "View case studies",
    "secondaryHref": "/case-studies"
  }
};

export default function Page() {
  return <StandardPage data={data} />;
}
