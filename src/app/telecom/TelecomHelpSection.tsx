import {
  BrainCircuit,
  Cloud,
  Laptop,
  MonitorUp,
  Network,
  RefreshCcw,
  Share2,
  Users,
} from "lucide-react";

type HelpItem = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const helpItems: HelpItem[] = [
  {
    title: "Custom App Development",
    description:
      "We develop custom application solutions that work faithfully according to any telco requirements.",
    icon: MonitorUp,
  },
  {
    title: "Training platform/ solution",
    description:
      "We provide LMS platforms for enterprise employee training, helping the whole training process streamlined for the organization.",
    icon: RefreshCcw,
  },
  {
    title: "ERP Solutions",
    description:
      "Our Odoo powered ERP solutions help enterprises automate their resource management and miscellaneous activities.",
    icon: Users,
  },
  {
    title: "Cloud Solutions",
    description:
      "Our cloud computing services help telecom companies to adopt flexible computing resources and data collection.",
    icon: Laptop,
  },
  {
    title: "AR/VR Applications",
    description:
      "Our AR/VR experts help telecom enterprises to build engaging solutions to help them build their brand and attract more customers.",
    icon: Cloud,
  },
  {
    title: "Enterprise CMS",
    description:
      "We have AEM and Sitecore experts to help telecom enterprises cater curated content to their millions of customers.",
    icon: Users,
  },
  {
    title: "BI/Analytical Tools",
    description:
      "We help telecom enterprises adopt analytical tools and Business Intelligence solutions to help monitor and strategize business performance effectively.",
    icon: BrainCircuit,
  },
  {
    title: "SharePoint",
    description:
      "We deliver SharePoint services to telecom enterprises to enable the whole organization to collaborate within one platform.",
    icon: Share2,
  },
];

export default function TelecomHelpSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[96px] text-[#11182f]">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="text-[42px] font-medium leading-[1.08] tracking-[-0.07em] text-[#050b18] md:text-[58px]">
          How We Can Help
        </h2>

        <div className="mt-[76px] grid grid-cols-1 gap-y-[70px] md:grid-cols-2 lg:grid-cols-3">
          {helpItems.map((item, index) => {
            const Icon = item.icon;
            const hasLeftBorder = index % 3 !== 0;

            return (
              <article
                key={item.title}
                className={`group relative min-h-[230px] px-0 transition duration-300 md:px-8 ${
                  hasLeftBorder ? "lg:border-l lg:border-[#e2ebf3]" : ""
                }`}
              >
                <div className="mb-14 flex h-[42px] w-[42px] items-center justify-center text-[#3f93cf] transition duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:text-[#ffab2e]">
                  <Icon size={38} strokeWidth={1.6} />
                </div>

                <h3 className="max-w-[300px] text-[32px] font-medium leading-[1.08] tracking-[-0.065em] text-[#050b18] transition duration-300 group-hover:text-[#3f93cf] md:text-[38px]">
                  {item.title}
                </h3>

                <p className="mt-7 max-w-[340px] text-[17px] font-medium leading-[1.45] tracking-[-0.035em] text-[#42637a] md:text-[18px]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}