import type { Metadata } from "next";
import StandardPage, { type PageData } from "@/components/resource-kit/StandardPage";

export const metadata: Metadata = {
  title: "ERP Development | Brain Station 23",
  description: "Custom ERPNext, Frappe and enterprise systems that unify operations, automate workflows and scale with your business.",
};

const data: PageData = {
  "eyebrow": "Service · ERP Development",
  "title": "ERP platforms tailored to how you actually work",
  "description": "Custom ERPNext, Frappe and enterprise systems that unify operations, automate workflows and scale with the business.",
  "intro": [
    "Off-the-shelf ERP forces you to bend your processes to the software. We build on ERPNext, Frappe and modern frameworks so the system bends to you — modules, integrations and workflows that match reality.",
    "From finance and inventory to HR and field operations, we deliver ERP that people actually adopt."
  ],
  "featuresTitle": "ERP capabilities",
  "features": [
    {
      "icon": "boxes",
      "title": "Custom ERP modules",
      "description": "Purpose-built modules for your sales, finance and operations flow."
    },
    {
      "icon": "workflow",
      "title": "Workflow automation",
      "description": "Approvals, notifications and automations that remove manual work."
    },
    {
      "icon": "plug",
      "title": "Integrations",
      "description": "Connect ERP to payment, logistics, CRM and BI tools."
    },
    {
      "icon": "chart",
      "title": "Reporting & BI",
      "description": "Real-time dashboards and reports leaders trust."
    },
    {
      "icon": "lock",
      "title": "Role-based security",
      "description": "Granular permissions and audit trails out of the box."
    },
    {
      "icon": "database",
      "title": "Data migration",
      "description": "Clean, validated migration from legacy systems with zero data loss."
    }
  ],
  "stats": [
    {
      "value": "500+",
      "label": "ERP projects"
    },
    {
      "value": "70%",
      "label": "Less manual work"
    },
    {
      "value": "130+",
      "label": "Integrations shipped"
    },
    {
      "value": "18+",
      "label": "Years on ERP"
    }
  ],
  "cta": {
    "title": "Outgrowing your current ERP?",
    "description": "Let's map the modules and integrations you need first.",
    "primaryLabel": "Book an ERP consult",
    "primaryHref": "/schedule-a-call",
    "secondaryLabel": "See our work",
    "secondaryHref": "/case-studies"
  }
};

export default function Page() {
  return <StandardPage data={data} />;
}
