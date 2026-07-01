import {
  BarChart3,
  Building2,
  CheckCircle2,
  FileKey2,
  FolderSync,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

type IntegrationCard = {
  title: string;
  items: string[];
};

type FeatureBlock = {
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
  items: string[];
  reverse?: boolean;
};

const integrationCards: IntegrationCard[] = [
  {
    title: "Payments Networks",
    items: [
      "Card networks such as Visa and Mastercard",
      "Payment gateways",
      "National payment switches",
    ],
  },
  {
    title: "Identity & Verification",
    items: [
      "National identity systems",
      "Document verification providers",
      "Biometric authentication services",
    ],
  },
  {
    title: "Risk & Compliance",
    items: [
      "AML and sanction screening systems",
      "Fraud monitoring platforms",
      "Transaction monitoring engines",
    ],
  },
  {
    title: "Communication Services",
    items: ["SMS gateways", "Email notification services", "Push notification platforms"],
  },
];

const featureBlocks: FeatureBlock[] = [
  {
    title: "Enterprise Architecture",
    description:
      "Built using modern technology to support high-performance digital banking operations.",
    image:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1200&auto=format&fit=crop",
    icon: Building2,
    items: [
      "Microservice-based architecture",
      "API-first platform design",
      "Horizontal scalability for millions of users",
      "Container-ready deployment",
      "High availability and fault tolerance",
    ],
  },
  {
    title: "Operational Control & Compliance",
    description:
      "Designed to meet the operational governance and compliance requirements of regulated financial institutions.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
    icon: FileKey2,
    reverse: true,
    items: [
      "Role-based access control (RBAC)",
      "Maker-checker approval workflows",
      "Configurable transaction limits and policies",
      "Real-time transaction monitoring",
      "Comprehensive audit logs and reporting",
      "Secure APIs with authentication and encryption",
    ],
  },
  {
    title: "Security & Reliability",
    description:
      "Financial-grade security ensures protection of customer data and transactions.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    icon: ShieldCheck,
    items: [
      "End-to-end encryption",
      "Secure authentication mechanisms",
      "Protection against fraud and unauthorized access",
      "Continuous monitoring and system alerts",
      "High-availability infrastructure",
    ],
  },
  {
    title: "Flexible Deployment Options",
    description:
      "iBank23 supports multiple deployment models to meet regulatory and infrastructure requirements.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    icon: FolderSync,
    reverse: true,
    items: [
      "Cloud deployment",
      "On-premise deployment",
      "Hybrid infrastructure",
      "Banks can deploy the platform according to their compliance and operational policies.",
    ],
  },
  {
    title: "Why iBank23",
    description:
      "Banks choose iBank23 to accelerate digital transformation.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop",
    icon: BarChart3,
    items: [
      "Faster time-to-market for digital banking services",
      "Reduced infrastructure and operational complexity",
      "Modular platform architecture",
      "Scalable infrastructure supporting millions of users",
      "Proven deployments in financial institutions",
    ],
  },
  {
    title: "Business Value",
    description:
      "iBank23 enables financial institutions to:",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    icon: TrendingUp,
    reverse: true,
    items: [
      "Launch new digital products faster",
      "Expand digital financial services",
      "Improve customer experience",
      "Increase operational efficiency",
      "Support future growth and innovation",
    ],
  },
];

export default function DigitalBankingEcosystemIntegrationsSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[86px] text-[#050b18]">
      <div className="mx-auto max-w-[1180px]">
        {/* Header */}
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[38px] font-medium leading-[1.06] tracking-[-0.075em] text-[#050b18] md:text-[52px]">
            Ecosystem Integrations
          </h2>

          <p className="mt-5 text-[15px] font-medium leading-[1.45] tracking-[-0.035em] text-black md:text-[16px]">
            iBank23 integrates with the financial ecosystem to enable end-to-end
            digital banking services.
          </p>
        </div>

        {/* Top Integration Cards */}
        <div className="mx-auto mt-10 grid max-w-[880px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {integrationCards.map((card) => (
            <article
              key={card.title}
              className="min-h-[190px] border border-[#d8e1ea] bg-white px-6 py-6 transition duration-300 hover:-translate-y-1 hover:border-[#21a7df] hover:shadow-[0_18px_50px_rgba(17,30,64,0.08)]"
            >
              <h3 className="text-[15px] font-bold leading-[1.2] tracking-[-0.04em] text-[#0087c8]">
                {card.title}
              </h3>

              <ul className="mt-5 space-y-3">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-[13px] font-medium leading-[1.25] tracking-[-0.03em] text-black"
                  >
                    <CheckCircle2
                      size={14}
                      strokeWidth={1.9}
                      className="mt-[1px] shrink-0 text-[#0087c8]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Feature Blocks */}
        <div className="mx-auto mt-[70px] grid max-w-[880px] grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2">
          {featureBlocks.map((block) => {
            const Icon = block.icon;

            return (
              <div key={block.title} className="space-y-4">
                {block.reverse ? (
                  <>
                    <ContentBlock block={block} Icon={Icon} />
                    <ImageBlock block={block} />
                  </>
                ) : (
                  <>
                    <ImageBlock block={block} />
                    <ContentBlock block={block} Icon={Icon} />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ImageBlock({ block }: { block: FeatureBlock }) {
  return (
    <div className="group overflow-hidden rounded-[6px] bg-[#111E40] shadow-[0_18px_55px_rgba(17,30,64,0.12)]">
      <img
        src={block.image}
        alt={block.title}
        className="h-[230px] w-full object-cover transition duration-700 group-hover:scale-[1.06]"
      />
    </div>
  );
}

function ContentBlock({
  block,
  Icon,
}: {
  block: FeatureBlock;
  Icon: React.ElementType;
}) {
  return (
    <article>
      <div className="mb-5 flex h-[28px] w-[28px] items-center justify-center rounded-[3px] bg-[#12a7df] text-white">
        <Icon size={16} strokeWidth={1.9} />
      </div>

      <h3 className="text-[28px] font-medium leading-[1.05] tracking-[-0.075em] text-[#050b18] md:text-[34px]">
        {block.title}
      </h3>

      <p className="mt-3 max-w-[420px] text-[14px] font-medium leading-[1.4] tracking-[-0.035em] text-[#42637a]">
        {block.description}
      </p>

      <ul className="mt-4 space-y-2">
        {block.items.map((item) => (
          <li
            key={item}
            className="flex gap-2 text-[13px] font-medium leading-[1.25] tracking-[-0.03em] text-black"
          >
            <CheckCircle2
              size={14}
              strokeWidth={1.9}
              className="mt-[1px] shrink-0 text-[#0087c8]"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}