import React from 'react';
import StockPriceCaseStudyHero from './StockPriceCaseStudyHero';
import StockPriceAboutSection from './StockPriceAboutSection';
import StockPriceTechnologyCTASection from './StockPriceTechnologyCTASection';

const page = () => {
    return (
        <div>
            <StockPriceCaseStudyHero/>
            <StockPriceAboutSection/>
            <StockPriceTechnologyCTASection/>
        </div>
    );
};

export default page;