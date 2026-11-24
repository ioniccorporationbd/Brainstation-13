import { Landmark, Sparkles } from "lucide-react";
import { getTranslator } from "@/i18n/server";

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

export default async function BankingFinancialIntroSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white pb-[52px] max-sm:pb-7 pt-[8px] text-black md:pb-[104px]">
      <div className="brand-container">
        <p className="text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:text-center">{t("Overview")}</p>
        <h2 className="max-sm:mx-auto max-sm:text-center mt-4 max-w-[720px] text-black font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Secure, customized banking software")}</h2>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 max-sm:gap-4">
          {blocks.map((block) => (
            <article
              key={block.title}
              className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/40 md:p-8 max-sm:p-4"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <block.icon size={22} />
              </span>

              <h3 className="mt-5 text-black font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px]">
                {t(block.title)}
              </h3>

              <p className="mt-3 text-[15px] leading-[1.6] text-[#52525B] md:text-[16px] text-pretty">
                {t(block.text)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
