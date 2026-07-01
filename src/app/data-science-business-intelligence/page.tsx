import React from 'react';
import DataScienceBusinessIntelligenceHeroSection from './DataScienceBusinessIntelligenceHeroSection';
import DataScienceBusinessIntelligenceIntroSection from './DataScienceBusinessIntelligenceIntroSection';
import DataSciencePipelineSection from './DataSciencePipelineSection';
import DataScienceResourcesSection from './DataScienceResourcesSection';
import DataSciencePartnersSection from './DataSciencePartnersSection';
import DataScienceIndustriesCtaSection from './DataScienceIndustriesCtaSection';


const page = () => {
    return (
        <div>
            <DataScienceBusinessIntelligenceHeroSection/>
            <DataScienceBusinessIntelligenceIntroSection/>
            <DataSciencePipelineSection/>
            <DataScienceResourcesSection/>
            <DataSciencePartnersSection/>
            <DataScienceIndustriesCtaSection/>
   
            
        </div>
    );
};

export default page;