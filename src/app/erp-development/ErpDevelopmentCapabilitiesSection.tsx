import { BarChart3, Boxes, Database, Lock, Plug, Workflow } from "lucide-react";

const capabilities = [
  {
    title: "Custom ERP modules",
    description: "Purpose-built modules for your sales, finance and operations flow.",
    icon: Boxes,
  },
  {
    title: "Workflow automation",
    description: "Approvals, notifications and automations that remove manual work.",
    icon: Workflow,
  },
  {
    title: "Integrations",
    description: "Connect ERP to payment, logistics, CRM and BI tools.",
    icon: Plug,
  },
  {
    title: "Reporting & BI",
    description: "Real-time dashboards and reports leaders trust.",
    icon: BarChart3,
  },
  {
    title: "Role-based security",
    description: "Granular permissions and audit trails out of the box.",
    icon: Lock,
  },
  {
    title: "Data migration",
    description: "Clean, validated migration from legacy systems with zero data loss.",
    icon: Database,
  },
];

export default function ErpDevelopmentCapabilitiesSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[680px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            What we deliver
          </p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">
            ERP capabilities
          </h2>
          <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">
            Six building blocks that make an ERP system usable from day one.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col rounded-xl border border-[#ececec] bg-white p-5 transition-colors duration-200 hover:border-[#c91f28]/50 sm:min-h-[180px] sm:p-6"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                <item.icon size={21} />
              </span>

              <h3 className="mt-5 text-[16.5px] font-semibold leading-[1.3] text-black">
                {item.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.65] text-[#55585e]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
