import {
  BarChart3,
  CreditCard,
  Repeat,
  ShoppingBag,
  Target,
  Truck,
} from "lucide-react";

type ServiceItem = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const services: ServiceItem[] = [
  {
    title: "Storefront experiences",
    description:
      "Fast, accessible, mobile-first storefronts that reflect your brand.",
    icon: ShoppingBag,
  },
  {
    title: "Payments & checkout",
    description:
      "Local and global gateways, wallets, BNPL and abandoned-cart recovery.",
    icon: CreditCard,
  },
  {
    title: "Logistics & fulfilment",
    description:
      "Inventory sync, shipping and order orchestration across channels.",
    icon: Truck,
  },
  {
    title: "Growth analytics",
    description:
      "Attribution, funnel and cohort analytics to guide merchandising.",
    icon: BarChart3,
  },
  {
    title: "Omnichannel",
    description:
      "Connected web, app, market and store experiences with one source of truth.",
    icon: Repeat,
  },
  {
    title: "Conversion optimisation",
    description:
      "Experimentation and Core Web Vitals tuning to raise revenue per visit.",
    icon: Target,
  },
];

export default function EcommerceServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-white px-6 pb-[88px] pt-[64px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[720px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Services
          </p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">
            What we build in commerce
          </h2>
          <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">
            Storefront, payments, fulfilment and the data layer &mdash; delivered as one joined-up platform.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
