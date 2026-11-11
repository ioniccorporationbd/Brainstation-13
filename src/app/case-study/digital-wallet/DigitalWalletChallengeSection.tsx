import { Clock, Landmark, SmartphoneNfc } from "lucide-react";

const problems = [
  {
    title: "Costly banking rails",
    description: "Traditional infrastructure was too expensive and slow to extend to new customers.",
    icon: Landmark,
  },
  {
    title: "Days-long onboarding",
    description: "Opening an account required paperwork, branches and waiting.",
    icon: Clock,
  },
  {
    title: "Cash-first communities",
    description: "Millions transact only in cash, with no safe path into digital payments.",
    icon: SmartphoneNfc,
  },
];

export default function DigitalWalletChallengeSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] pt-[8px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
              The problem
            </p>
            <h2 className="mt-4 max-w-[560px] text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">
              Banking built for a different customer
            </h2>

            <p className="mt-5 text-[15.5px] leading-[1.8] text-[#55585e]">
              Access to simple financial services &mdash; payments, transfers,
              savings &mdash; remains out of reach for millions. Traditional
              banking infrastructure was too costly and slow to extend.
            </p>

            <ul className="mt-8 space-y-3">
              {problems.map((item) => (
                <li
                  key={item.title}
                  className="group flex items-start gap-4 rounded-xl border border-[#ececec] bg-white p-5 transition-colors duration-200 hover:border-[#c91f28]/50"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                    <item.icon size={19} />
                  </span>
                  <div>
                    <h3 className="text-[15.5px] font-semibold text-black">{item.title}</h3>
                    <p className="mt-1 text-[14px] leading-[1.6] text-[#55585e]">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#ececec] lg:sticky lg:top-24">
            <img
              src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop"
              alt="Revenue dashboard with charts open on a laptop"
              className="h-[260px] w-full object-cover md:h-[360px] lg:h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
