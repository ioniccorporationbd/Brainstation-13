import React from 'react';
import NonProfitHeroSection from './NonProfitHeroSection';
import NonProfitHelpSection from './NonProfitHelpSection';
import NonProfitCaseStudiesSection from './NonProfitCaseStudiesSection';

const page = () => {
    return (
        <div>
            <NonProfitHeroSection/>  
            <NonProfitHelpSection/>  
            <NonProfitCaseStudiesSection/>  
        </div>
    );
};

export default page;