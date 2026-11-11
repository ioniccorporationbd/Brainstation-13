import { Landmark, Sparkles } from "lucide-react";

const blocks = [
  {
    icon: Landmark,
    title: "Banking without boundaries",
    text: "Give your customers the freedom of banking from anywhere and anytime. We provide a complete range of the most secure software solutions developed for your banking business and financial institutions. Our offered solutions support mobile banking, online bill payments, remote access to accounts, online transactions and many more on-demand banking services you can ask for.",
  },
  {
    icon: Sparkles,
    title: "Future-ready financial technology",
    text: "Our futuristic solutions help empowering the financial institutions to be more competitive and develop lasting customer experience. By embracing the latest technologies, we build customized banking solutions and dedicated mobile apps to leverage your customer reach-ability and enhance flexibility.",
  },
];

export default function BankingFinancialIntroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[80px] pt-[8px] text-black md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
          Overview
        </p>
        <h2 className="mt-4 max-w-[720px] text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[38px]">
          Secure, customized banking software built around your institution
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {blocks.map((block) => (
            <article
              key={block.title}
              className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/40 md:p-8"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <block.icon size={22} />
              </span>

              <h3 className="mt-5 text-[19px] font-bold tracking-[-0.01em] text-black md:text-[21px]">
                {block.title}
              </h3>

              <p className="mt-3 text-[15px] leading-[1.75] text-[#55585e] md:text-[15.5px]">
                {block.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
