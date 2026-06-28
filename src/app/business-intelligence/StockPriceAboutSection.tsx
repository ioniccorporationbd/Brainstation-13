import React from "react";

export default function StockPriceAboutSection() {
  return (
    <section className="w-full bg-white py-[70px] md:py-[86px] lg:py-[96px]">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 xl:px-0">
        {/* Top About */}
        <div>
          <h2 className="text-[30px] font-bold leading-[1.25] tracking-[-0.025em] text-black sm:text-[34px] lg:text-[36px]">
            About Stock Price Prediction
          </h2>

          <p className="mt-[26px] max-w-[1120px] text-[23px] font-light italic leading-[1.65] tracking-[-0.02em] text-[#7b7f86] sm:text-[26px] lg:text-[28px]">
            Our stock price prediction model can predict the most profitable
            time for buying or selling a stock. For this prediction, it needs a
            data-set of that stock so that the model can learn the price
            behavior of stocks through a timeline and can predict the next
            probable market price for a convenient action.
          </p>
        </div>

        {/* Problem Solution */}
        <div className="mt-[52px] grid grid-cols-1 gap-[58px] md:grid-cols-2 md:gap-[90px]">
          <div>
            <h3 className="text-[30px] font-bold leading-[1.25] tracking-[-0.025em] text-black sm:text-[34px]">
              Problem
            </h3>

            <p className="mt-[20px] max-w-[500px] text-[20px] font-normal leading-[1.5] tracking-[-0.015em] text-[#6f747b] sm:text-[22px]">
              It’s quite challenging for humans to predict the most accurate
              &amp; profitable time to buy and sell a stock without analyzing
              its previous history of the price timeline.
            </p>
          </div>

          <div>
            <h3 className="text-[30px] font-bold leading-[1.25] tracking-[-0.025em] text-black sm:text-[34px]">
              Solution
            </h3>

            <p className="mt-[20px] max-w-[520px] text-[20px] font-normal leading-[1.5] tracking-[-0.015em] text-[#6f747b] sm:text-[22px]">
              Simple linear regression was used to predict the stock price
              ahead of time and the random seed was used to start the buying
              point. So that with this model individuals can buy and sell any
              stock ensuring the most profitable action.
            </p>
          </div>
        </div>

        {/* Business Impact */}
        <div className="mt-[86px]">
          <h3 className="text-[30px] font-bold leading-[1.25] tracking-[-0.025em] text-black sm:text-[34px]">
            Business Impact
          </h3>

          <p className="mt-[22px] max-w-[1060px] text-[23px] font-light leading-[1.55] tracking-[-0.02em] text-[#7b7f86] sm:text-[26px] lg:text-[28px]">
            By predicting the appropriate time for stock exchange by AI-enabled
            solution one can eliminate the high risk of losing money in the
            stock exchange market and can play safe all the time.
          </p>
        </div>
      </div>
    </section>
  );
}