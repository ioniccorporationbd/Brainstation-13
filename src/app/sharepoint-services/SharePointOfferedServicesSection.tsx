import {
  BarChart3,
  Briefcase,
  Code2,
  Gauge,
  Globe2,
  GraduationCap,
  Headset,
  Palette,
  RefreshCw,
  Workflow,
} from "lucide-react";

const services = [
  { title: "Enterprise Portal Development", icon: Globe2 },
  { title: "SharePoint Application Development", icon: Code2 },
  { title: "Business Application", icon: Briefcase },
  { title: "Workflow & Collaboration", icon: Workflow },
  { title: "Customization & Enhancement in Branding", icon: Palette },
  { title: "Consultation & Training", icon: GraduationCap },
  { title: "24/7 Advisory Support", icon: Headset },
  { title: "Performance Tuning", icon: Gauge },
  { title: "Migration and Upgrades", icon: RefreshCw },
  { title: "SharePoint BI Integration & Reporting", icon: BarChart3 },
];

export default function SharePointOfferedServicesSection() {
  return (
    <section className="w-full bg-white px-6 pb-[88px] text-[#0a0a0a] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            What We Can Do
          </p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">
            Offered Services
          </h2>

          <p className="mt-4 text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">
            Ten services across the SharePoint and Microsoft 365 estate.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={20} strokeWidth={2.1} />
                </span>

                <h3 className="mt-5 text-[15.5px] font-bold leading-[1.35] tracking-[-0.01em] text-[#0a0a0a]">
                  {service.title}
                </h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
