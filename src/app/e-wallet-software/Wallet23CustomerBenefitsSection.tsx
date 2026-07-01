import {
  BadgeCheck,
  Clock3,
  FileSearch,
  HeartHandshake,
  Landmark,
  MapPinCheck,
} from "lucide-react";

type CustomerBenefit = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const customerBenefits: CustomerBenefit[] = [
  {
    title: "Faster Payments, Everywhere",
    description:
      "Instant P2P transfers, QR/NFC merchant pay, and seamless bill payments—all in one app.",
    icon: Landmark,
  },
  {
    title: "Clear, Honest Transparency",
    description:
      "Real-time balances, upfront fees, and complete transaction history give users full confidence in every payment.",
    icon: FileSearch,
  },
  {
    title: "More Ways They Can Pay",
    description:
      "Wallet balance, cards, loyalty points, promotions, and multi-currency options make every purchase simple and flexible.",
    icon: MapPinCheck,
  },
  {
    title: "Security They Can Trust",
    description:
      "Device/SIM binding, biometrics, fraud monitoring, and bank-grade compliance keep every account safe from threats.",
    icon: BadgeCheck,
  },
  {
    title: "Rewards That Truly Matter",
    description:
      "Loyalty points, cashback options, and personalized offers build continuous engagement and repeat transactions.",
    icon: Clock3,
  },
  {
    title: "Access Anytime, Anywhere",
    description:
      "High-availability cloud infrastructure ensures the wallet stays fast, stable, and accessible 24/7—even at peak load.",
    icon: HeartHandshake,
  },
];

export default function Wallet23CustomerBenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[105px] text-[#07112b]">
      <div className="mx-auto max-w-[1180px]">
        {/* Title */}
        <div className="max-w-[620px]">
          <span className="inline-flex rounded-full bg-[#eaf6fc] px-5 py-2 text-[14px] font-bold tracking-[-0.02em] text-[#079ed8]">
            Customer Experience
          </span>

          <h2 className="mt-6 text-[42px] font-medium leading-[1.08] tracking-[-0.075em] text-[#07112b] md:text-[58px] lg:text-[64px]">
            What Your Customers
            <br />
            Get Through You
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-[82px] grid grid-cols-1 gap-y-[70px] md:grid-cols-2 lg:grid-cols-3">
          {customerBenefits.map((item, index) => {
            const Icon = item.icon;
            const hasLeftBorder = index % 3 !== 0;

            return (
              <article
                key={item.title}
                className={`group relative px-0 transition duration-300 md:px-8 ${
                  hasLeftBorder ? "lg:border-l lg:border-[#dfeaf3]" : ""
                }`}
              >
                <div className="mb-12 flex h-[54px] w-[54px] items-center justify-center text-[#08a7df] transition duration-300 group-hover:-translate-y-1 group-hover:text-[#ffab2e]">
                  <Icon size={42} strokeWidth={1.7} />
                </div>

                <h3 className="max-w-[360px] text-[32px] font-medium leading-[1.08] tracking-[-0.075em] text-[#07112b] md:text-[40px]">
                  {item.title}
                </h3>

                <p className="mt-8 max-w-[380px] text-[16px] font-medium leading-[1.55] tracking-[-0.03em] text-[#25364a] md:text-[17px]">
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