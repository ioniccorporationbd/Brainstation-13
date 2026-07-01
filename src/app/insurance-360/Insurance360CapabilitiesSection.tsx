import { CheckCircle2 } from "lucide-react";

type CapabilityItem = {
  title: string;
  image: string;
  imageAlt: string;
  points: string[];
  imageFirst?: boolean;
};

const capabilities: CapabilityItem[] = [
  {
    title: "Unified Insurance Dashboard",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=900&auto=format&fit=crop",
    imageAlt: "Insurance dashboard on mobile phone",
    points: [
      "View policies, premiums, loyalty cards, and wellness services from one centralized dashboard.",
      "Access quick actions like premium payments, claims, and service requests instantly.",
      "Gain a connected overview of the entire insurance experience in one place.",
    ],
  },
  {
    title: "Digital Premium Payments",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=900&auto=format&fit=crop",
    imageAlt: "Digital premium payment using mobile phone",
    imageFirst: true,
    points: [
      "Pay insurance premiums through a simple guided payment flow.",
      "Secure verification using OTP ensures safe and compliant transactions.",
      "Receive instant payment confirmation and updated policy status.",
    ],
  },
  {
    title: "Unified Policy Management",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=900&auto=format&fit=crop",
    imageAlt: "Insurance policy management documents",
    points: [
      "Manage individual policies and view full policy details in one structured interface.",
      "Access coverage information, riders, payment history, and policy status easily.",
      "Navigate policy-related services such as claims, transactions, and documents.",
    ],
  },
  {
    title: "Real-Time Claims Processing",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=900&auto=format&fit=crop",
    imageAlt: "Healthcare insurance claims processing",
    imageFirst: true,
    points: [
      "Submit claims digitally with guided forms and document uploads.",
      "Track claim status through clear stages like submission, review, approval, and settlement.",
      "Maintain full transparency with real-time claim updates.",
    ],
  },
  {
    title: "Automated Service Requests & Profile Updates",
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=900&auto=format&fit=crop",
    imageAlt: "Automated service request on digital platform",
    points: [
      "Digitize service requests such as contact, address, and signature updates.",
      "Allow beneficiary changes and bank account updates through structured forms.",
      "Use secure verification to maintain accuracy and compliance in service changes.",
    ],
  },
  {
    title: "Quote & Plan Configuration Tools",
    image:
      "https://images.unsplash.com/photo-1554224154-26032fced8bd?q=80&w=900&auto=format&fit=crop",
    imageAlt: "Insurance quote and plan configuration",
    imageFirst: true,
    points: [
      "Generate insurance quotes through guided information and plan selection.",
      "Configure terms, sum assured, and financial preferences easily.",
      "Receive instant premium breakdowns for better coverage decisions.",
    ],
  },
  {
    title: "Wellness & Daily Care Features",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=900&auto=format&fit=crop",
    imageAlt: "Wellness and healthcare service",
    points: [
      "Offer wellness services like BMI calculators and health tools.",
      "Provide access to hospitals, ambulance services, and health partners.",
      "Keep users engaged beyond insurance transactions with everyday care features.",
    ],
  },
];

export default function Insurance360CapabilitiesSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[96px] text-[#07112b]">
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-[780px] text-center">
          <span className="inline-flex rounded-full bg-[#eaf6fc] px-5 py-2 text-[14px] font-bold tracking-[-0.02em] text-[#079ed8]">
            Insurance 360 Features
          </span>

          <h2 className="mt-6 text-[40px] font-black leading-[1.06] tracking-[-0.075em] text-[#07112b] md:text-[56px] lg:text-[62px]">
            Key Capabilities That Drive Insurance Growth
          </h2>

          <p className="mx-auto mt-6 max-w-[680px] text-[17px] font-medium leading-[1.55] tracking-[-0.035em] text-[#42637a] md:text-[19px]">
            A complete digital insurance experience for policy management,
            premium payments, claims, services, wellness, and customer
            engagement.
          </p>
        </div>

        <div className="mt-[82px] space-y-[88px]">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20"
            >
              <div className={item.imageFirst ? "lg:order-2" : "lg:order-1"}>
                <h3 className="max-w-[520px] text-[30px] font-black leading-[1.12] tracking-[-0.065em] text-[#07112b] md:text-[40px]">
                  {item.title}
                </h3>

                <ul className="mt-7 space-y-4">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <CheckCircle2
                        size={18}
                        strokeWidth={1.9}
                        className="mt-[3px] shrink-0 text-[#079ed8]"
                      />

                      <p className="max-w-[560px] text-[15px] font-medium leading-[1.55] tracking-[-0.025em] text-[#42637a] md:text-[16px]">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`flex ${
                  item.imageFirst
                    ? "justify-center lg:order-1 lg:justify-start"
                    : "justify-center lg:order-2 lg:justify-end"
                }`}
              >
                <div className="relative w-full max-w-[520px] overflow-hidden rounded-[24px] bg-[#f4f8fc] p-3 shadow-[0_24px_70px_rgba(17,30,64,0.10)]">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-[310px] w-full rounded-[18px] object-cover md:h-[360px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}