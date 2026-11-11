import {
  BrainCircuit,
  Cloud,
  Laptop,
  MonitorUp,
  Users,
  RefreshCcw,
  Share2,
} from "lucide-react";

type ServiceItem = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const services: ServiceItem[] = [
  {
    title: "Custom App Development",
    description:
      "We develop custom application solutions that work faithfully according to any telco requirements.",
    icon: MonitorUp,
  },
  {
    title: "Training platform / solution",
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
    title: "BI / Analytical Tools",
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

export default function TelecomServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[720px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Services
          </p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">
            How we can help
          </h2>
          <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">
            Holistic software and technical solutions for telecom enterprises.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col rounded-xl border border-[#ececec] bg-white p-6 transition-colors duration-200 hover:border-[#c91f28]/50"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                <item.icon size={21} />
              </span>
              <h3 className="mt-5 text-[16px] font-semibold leading-[1.3] text-black">{item.title}</h3>
              <p className="mt-2 text-[13.5px] leading-[1.65] text-[#55585e]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
