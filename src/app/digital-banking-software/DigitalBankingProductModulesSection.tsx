import { CheckCircle2 } from "lucide-react";

const modules = [
  "Customer & Identity Management",
  "Digital Onboarding & eKYC",
  "Payments & Transfers Engine",
  "Merchant & Agent Management",
  "Wallet & Account Management",
  "Loyalty & Rewards Engine",
  "Billing & Reconciliation",
  "Reporting & Analytics",
  "Notification & Communication Service",
  "Integration & API Gateway",
];

const circles = Array.from({ length: 30 }, (_, index) => {
  const size = 180 + index * 34;
  return size;
});

export default function DigitalBankingProductModulesSection() {
  return (
    <section className="relative overflow-hidden bg-[#f4f8fc] px-6 py-[105px] text-[#050b18]">
      {/* Left Circle Background */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-full w-[48%] -translate-y-1/2 overflow-hidden">
        {circles.map((size, index) => (
          <div
            key={index}
            className="absolute left-[-260px] top-1/2 rounded-full border border-[#8fd4f4]/35"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              transform: "translateY(-50%)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1220px] grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1fr] lg:items-start">
        {/* Left Text */}
        <div>
          <h2 className="text-[42px] font-medium leading-[1.05] tracking-[-0.075em] text-[#050b18] md:text-[58px] lg:text-[64px]">
            Product Modules
          </h2>

          <p className="mt-8 max-w-[520px] text-[18px] font-medium leading-[1.35] tracking-[-0.04em] text-black md:text-[21px]">
            The platform is modular, allowing banks to deploy only the
            capabilities they need.
          </p>
        </div>

        {/* Right List */}
        <div className="lg:pl-10">
          <ul className="space-y-5">
            {modules.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[18px] font-medium leading-[1.2] tracking-[-0.04em] text-black md:text-[22px]"
              >
                <CheckCircle2
                  size={19}
                  strokeWidth={1.9}
                  className="mt-[2px] shrink-0 text-[#0087c8]"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}