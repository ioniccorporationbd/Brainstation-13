import { Lightbulb, TrendingUp, Wrench } from "lucide-react";
import { getTranslator } from "@/i18n/server";

export default async function StockPriceAboutSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white py-[52px] text-[#0a0a0a] md:py-[96px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[860px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Overview")}</p>

          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("About Stock Price Prediction")}</h2>

          <p className="mx-auto mt-5 max-w-[780px] text-[16px] font-medium leading-[1.65] tracking-[-0.01em] text-[#565656] md:text-[17px]">{t("Our stock price prediction model can predict the most profitable time for buying or selling a stock. For this prediction, it needs a data-set of that stock so that the model can learn the price behavior of stocks through a timeline and can predict the next probable market price for a convenient action.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          <article className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
              <Wrench size={22} strokeWidth={1.8} />
            </div>

            <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.01em] text-[#0a0a0a]">{t("Problem")}</h3>

            <p className="mt-3 text-[15px] font-medium leading-[1.6] tracking-[-0.01em] text-[#565656]">{t("It's quite challenging for humans to predict the most accurate and profitable time to buy and sell a stock without analyzing its previous history of the price timeline.")}</p>
          </article>

          <article className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
              <Lightbulb size={22} strokeWidth={1.8} />
            </div>

            <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.01em] text-[#0a0a0a]">{t("Solution")}</h3>

            <p className="mt-3 text-[15px] font-medium leading-[1.6] tracking-[-0.01em] text-[#565656]">{t("Simple linear regression was used to predict the stock price ahead of time and the random seed was used to start the buying point, so individuals can buy and sell any stock with the most profitable action.")}</p>
          </article>

          <article className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
              <TrendingUp size={22} strokeWidth={1.8} />
            </div>

            <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.01em] text-[#0a0a0a]">{t("Business Impact")}</h3>

            <p className="mt-3 text-[15px] font-medium leading-[1.6] tracking-[-0.01em] text-[#565656]">{t("By predicting the appropriate time for stock exchange through an AI-enabled solution, one can eliminate the high risk of losing money in the stock market and stay safe.")}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
