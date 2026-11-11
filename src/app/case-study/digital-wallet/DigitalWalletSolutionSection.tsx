import {
  ChartColumn,
  Fingerprint,
  Lock,
  Server,
  Users,
  Wallet,
} from "lucide-react";

const features = [
  { title: "Onboarding & KYC", description: "Fast, compliant identity verification in minutes.", icon: Fingerprint },
  { title: "Wallet & transfers", description: "Peer-to-peer, merchant and bill payments with instant settlement.", icon: Wallet },
  { title: "Security", description: "Fraud detection, encryption and regulatory-grade controls.", icon: Lock },
  { title: "Scale", description: "Architecture built for millions of transactions.", icon: Server },
  { title: "Agent network", description: "Cash-in / cash-out through local agent points.", icon: Users },
  { title: "Analytics", description: "Real-time monitoring of transactions and risk.", icon: ChartColumn },
];

export default function DigitalWalletSolutionSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[720px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            The solution
          </p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">
            What we built
          </h2>
          <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">
            We built a compliant, mobile-first wallet platform that onboards
            users in minutes and handles high transaction volumes reliably.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col rounded-xl border border-[#ececec] bg-white p-5 transition-colors duration-200 hover:border-[#c91f28]/50 sm:min-h-[170px] sm:p-6"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                <item.icon size={21} />
              </span>
              <h3 className="mt-5 text-[16px] font-semibold leading-[1.3] text-black">{item.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.65] text-[#55585e]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
