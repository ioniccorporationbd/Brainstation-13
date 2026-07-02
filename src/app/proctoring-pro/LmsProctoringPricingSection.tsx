import Link from "next/link";
import { BadgeCheck, Crown, Rocket, ShieldCheck } from "lucide-react";

type PricingPlan = {
  name: string;
  price: string;
  description: string;
  buttonText: string;
  href: string;
  icon: React.ElementType;
  featured?: boolean;
  features: string[];
};

const pricingPlans: PricingPlan[] = [
  {
    name: "Proctoring Free",
    price: "$0",
    description:
      "Perfect for trial to test out product features by yourself.",
    buttonText: "Buy now",
    href: "/contact",
    icon: BadgeCheck,
    features: [
      "Basic webcam image capture",
      "Trial access for testing",
      "Limited reporting access",
    ],
  },
  {
    name: "Proctoring Pro",
    price: "$1199/lifetime",
    description:
      "Perfect for single-site use, this one-time purchase includes lifetime updates and full technical support.",
    buttonText: "Buy now",
    href: "/contact",
    icon: Rocket,
    featured: true,
    features: [
      "Single-site lifetime license",
      "Full technical support",
      "Lifetime product updates",
    ],
  },
  {
    name: "Proctoring Pro SaaS",
    price: "$ Custom pricing",
    description:
      "Flexible SaaS plan for institutions that want managed hosting, easy scaling, and ongoing support.",
    buttonText: "Get Started",
    href: "/contact",
    icon: ShieldCheck,
    features: [
      "Managed cloud deployment",
      "Flexible monthly or yearly plan",
      "Scalable for growing institutions",
    ],
  },
  {
    name: "Proctoring Pro Enterprise",
    price: "$ Custom pricing",
    description:
      "The Enterprise plan offers multiple site licenses and support, custom features, and dedicated assistance.",
    buttonText: "Get Started",
    href: "/contact",
    icon: Crown,
    features: [
      "Multiple site licenses",
      "Custom feature development",
      "Dedicated enterprise assistance",
    ],
  },
];

export default function LmsProctoringPricingSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] px-6 py-[105px] text-[#07112b]">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-[220px] top-[120px] h-[520px] w-[520px] rounded-full bg-[#08a7df]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-[240px] bottom-[80px] h-[560px] w-[560px] rounded-full bg-[#111E40]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1220px]">
        {/* Header */}
        <div className="mx-auto max-w-[760px] text-center">
          <span className="inline-flex rounded-full bg-white px-5 py-2 text-[14px] font-bold tracking-[-0.02em] text-[#079ed8] shadow-[0_12px_30px_rgba(17,30,64,0.06)]">
            Pricing Plans
          </span>

          <h2 className="mt-6 text-[42px] font-black leading-[1.06] tracking-[-0.075em] text-[#07112b] md:text-[58px] lg:text-[64px]">
            Flexible Pricing
          </h2>

          <p className="mx-auto mt-6 max-w-[640px] text-[17px] font-medium leading-[1.55] tracking-[-0.035em] text-[#42637a] md:text-[19px]">
            Choose the right Moodle proctoring package for trial, single-site
            deployment, SaaS operation, or enterprise-scale implementation.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-[72px] grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan) => {
            const Icon = plan.icon;

            return (
              <article
                key={plan.name}
                className={`group relative min-h-[390px] overflow-hidden rounded-[28px] border p-8 transition duration-300 hover:-translate-y-2 ${
                  plan.featured
                    ? "border-[#08a7df]/60 bg-[#111E40] text-white shadow-[0_34px_95px_rgba(17,30,64,0.24)]"
                    : "border-[#e2edf5] bg-white text-[#07112b] shadow-[0_20px_60px_rgba(17,30,64,0.07)] hover:border-[#08a7df]/60 hover:shadow-[0_34px_95px_rgba(17,30,64,0.14)]"
                }`}
              >
                {/* Top line */}
                <div
                  className={`absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-[#08a7df] via-[#54c8ee] to-[#ffab2e] transition duration-300 ${
                    plan.featured
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />

                {/* Decorative circle */}
                <div
                  className={`absolute -right-20 -top-20 h-56 w-56 rounded-full border ${
                    plan.featured ? "border-white/10" : "border-[#08a7df]/10"
                  }`}
                />
                <div
                  className={`absolute -right-10 -top-10 h-40 w-40 rounded-full border ${
                    plan.featured ? "border-white/10" : "border-[#08a7df]/10"
                  }`}
                />

                <div className="relative z-10">
                  <div
                    className={`flex h-[64px] w-[64px] items-center justify-center rounded-[18px] transition duration-300 ${
                      plan.featured
                        ? "bg-white/10 text-[#54c8ee] group-hover:bg-[#08a7df] group-hover:text-white"
                        : "bg-[#eaf6fc] text-[#08a7df] group-hover:bg-[#08a7df] group-hover:text-white"
                    }`}
                  >
                    <Icon size={34} strokeWidth={1.8} />
                  </div>

                  <h3
                    className={`mt-8 text-[26px] font-black leading-[1.12] tracking-[-0.055em] md:text-[30px] ${
                      plan.featured ? "text-white" : "text-[#07112b]"
                    }`}
                  >
                    {plan.name}
                  </h3>

                  <p
                    className={`mt-3 text-[19px] font-black tracking-[-0.035em] ${
                      plan.featured ? "text-[#ffab2e]" : "text-[#08a7df]"
                    }`}
                  >
                    {plan.price}
                  </p>

                  <p
                    className={`mt-6 min-h-[78px] text-[15px] font-semibold leading-[1.55] tracking-[-0.025em] md:text-[16px] ${
                      plan.featured ? "text-white/78" : "text-[#42637a]"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span
                          className={`mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full ${
                            plan.featured ? "bg-[#54c8ee]" : "bg-[#08a7df]"
                          }`}
                        />
                        <span
                          className={`text-[14px] font-medium leading-[1.45] tracking-[-0.025em] ${
                            plan.featured ? "text-white/78" : "text-[#42637a]"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.href}
                    className="mt-8 inline-flex rounded-full bg-[#ffab2e] px-7 py-3.5 text-[14px] font-black tracking-[-0.02em] text-black transition duration-300 hover:bg-[#ffc15a] hover:shadow-[0_18px_45px_rgba(255,171,46,0.25)]"
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}