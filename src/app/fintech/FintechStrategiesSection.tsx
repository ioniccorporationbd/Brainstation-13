import Link from "next/link";
import { ArrowRight, CreditCard, Landmark, Banknote, Globe2 } from "lucide-react";

const strategies = [
  {
    title: "Smart digital wallet for seamless financial control",
    description: "Wallet architecture, agent networks and cash-in/out flows designed for scale.",
    href: "/e-wallet-software",
    icon: CreditCard,
  },
  {
    title: "iBank23: secure and seamless digital banking app",
    description: "Account access, transfers, bill pay and onboarding in one mobile experience.",
    href: "/digital-banking-software",
    icon: Landmark,
  },
  {
    title: "Digital lending platform for modern financial services",
    description: "Origination, scoring, approval workflows and repayment tracking automated.",
    href: "/digital-lending-credit",
    icon: Banknote,
  },
  {
    title: "Cross-border payment innovation for global remittance",
    description: "Multi-currency wallets, real-time FX and local rail integrations.",
    href: "/cross-border-payments-solution",
    icon: Globe2,
  },
];

export default function FintechStrategiesSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[720px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Proven strategies
          </p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">
            How we solve complex banking challenges
          </h2>
          <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">
            Approach notes from the products we build, and the problems they
            solve for financial institutions.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {strategies.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex h-full flex-col rounded-xl border border-[#ececec] bg-white p-6 transition-colors duration-200 hover:border-[#c91f28]/50"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                <item.icon size={21} />
              </span>
              <h3 className="mt-5 text-[17px] font-semibold leading-[1.35] text-black">{item.title}</h3>
              <p className="mt-2 flex-1 text-[14px] leading-[1.65] text-[#55585e]">{item.description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-bold text-[#c91f28] transition-all duration-200 group-hover:gap-2.5">
                Read more
                <ArrowRight size={15} strokeWidth={2.2} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
