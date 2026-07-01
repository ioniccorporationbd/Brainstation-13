import { CheckCircle2 } from "lucide-react";

type CapabilityCard = {
  title: string;
  items: string[];
};

const capabilities: CapabilityCard[] = [
  {
    title: "Customer Banking",
    items: [
      "Account management",
      "Wallet services",
      "Peer-to-peer transfers",
      "Bill payment and airtime recharge",
      "QR code payments",
      "Transaction history and notifications",
    ],
  },
  {
    title: "Merchant & Agent Banking",
    items: [
      "Merchant onboarding and management",
      "Static and dynamic QR payments",
      "Agent-assisted services",
      "Merchant settlement and reporting",
    ],
  },
  {
    title: "Business Banking",
    items: [
      "Payroll processing",
      "Bulk payments and collections",
      "Corporate user management",
      "Transaction approval workflows",
    ],
  },
  {
    title: "Customer Engagement",
    items: [
      "Cashback and loyalty programs",
      "Discount and promotion engine",
      "Notifications and alerts",
    ],
  },
];

export default function DigitalBankingCapabilitiesSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[86px] text-[#050b18]">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="text-[42px] font-medium leading-[1.05] tracking-[-0.075em] text-[#050b18] md:text-[58px] lg:text-[64px]">
            Platform Capabilities
          </h2>

          <p className="mt-7 text-[18px] font-medium leading-[1.45] tracking-[-0.04em] text-black md:text-[21px]">
            Everything required to launch and operate a modern digital bank.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-[56px] grid max-w-[1210px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((card) => (
            <article
              key={card.title}
              className="min-h-[360px] border border-[#d8e1ea] bg-white px-8 py-9 transition duration-300 hover:-translate-y-2 hover:border-[#3f93cf] hover:shadow-[0_24px_70px_rgba(17,30,64,0.10)]"
            >
              <h3 className="text-[23px] font-bold leading-[1.08] tracking-[-0.045em] text-[#007bb7]">
                {card.title}
              </h3>

              <ul className="mt-7 space-y-4">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[18px] font-medium leading-[1.35] tracking-[-0.04em] text-black"
                  >
                    <CheckCircle2
                      size={18}
                      strokeWidth={1.9}
                      className="mt-[3px] shrink-0 text-[#0087c8]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}