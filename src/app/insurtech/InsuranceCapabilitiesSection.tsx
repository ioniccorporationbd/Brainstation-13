import Link from "next/link";

type Capability = {
  title: string;
  description: string;
  image: string;
  href?: string;
};

const capabilities: Capability[] = [
  {
    title: "Insurance 360 App",
    description:
      "Policyholders manage policies, claims, services, track requests, access telemedicine, wellness tools, calculators, dashboards efficiently.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=90",
    href: "/products/insurance-360-app",
  },
  {
    title: "Integrated Claims Solution",
    description:
      "End-to-end claims lifecycle supports fraud detection, adjudication, payments, benefits, eligibility, notifications, and analytics efficiently real-time.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "Agent Onboarding System",
    description:
      "Digital onboarding enables registration, document verification, training, exam scheduling, evaluation, and large-scale agent progress tracking.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "Broker-Led Automation",
    description:
      "Email-to-ticket intake captures needs, distributes requests, tracks quotes, and generates smart customer comparison reports.",
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "AI Chatbot",
    description:
      "Chat-based assistant delivers real-time answers, simplifies claims, and ensures always-available, uninterrupted customer service experience.",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "AI Fraud Screening",
    description:
      "Detects anomalous claims, flags fraud risk, reads medical documents, and extracts clinical signals accurately fast.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=90",
  },
];

export default function InsuranceCapabilitiesSection() {
  return (
    <section className="w-full bg-white py-[72px] md:py-[86px] lg:py-[96px]">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 xl:px-0">
        <div className="text-center">
          <p className="text-[20px] font-normal leading-[1.35] text-[#2f8fcd]">
            Business Impact
          </p>

          <h2 className="mt-[18px] text-[42px] font-bold leading-[1.12] tracking-[-0.045em] text-black sm:text-[52px] lg:text-[58px]">
            Our Insurtech Capabilities
          </h2>
        </div>

        <div className="mx-auto mt-[58px] grid max-w-[1180px] grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <CapabilityCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({ item }: { item: Capability }) {
  return (
    <article className="group overflow-hidden rounded-[8px] border border-[#dcdfe3] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#05a4df] hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
      <div className="h-[190px] w-full overflow-hidden bg-gray-100">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="px-[30px] py-[30px]">
        <h3 className="text-[24px] font-semibold leading-[1.25] tracking-[-0.035em] text-black sm:text-[26px]">
          {item.title}
        </h3>

        <p className="mt-[16px] max-w-[320px] text-[16px] font-normal leading-[1.5] text-[#335e79] sm:text-[17px]">
          {item.description}
        </p>

        {item.href && (
          <Link
            href={item.href}
            className="mt-[12px] inline-flex text-[16px] font-medium text-[#058ec8] transition hover:text-[#006fa0]"
          >
            Read More
          </Link>
        )}
      </div>
    </article>
  );
}