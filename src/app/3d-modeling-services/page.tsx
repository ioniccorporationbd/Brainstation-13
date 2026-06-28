import React from 'react';
import ThreeDModelingHeroSection from './ThreeDModelingHeroSection';
import ThreeDToolsSliderSection from './ThreeDToolsSliderSection';
import HoloGuideSection from './HoloGuideSection';
import ModelingServicesSection from './ModelingServicesSection';
import RenderingServicesSection from './RenderingServicesSection';
import CaseStudiesFaqSection from './CaseStudiesFaqSection';
;



const page = () => {
    return (
        <div>
            <ThreeDModelingHeroSection />
            <ThreeDToolsSliderSection />
            <ModelingServicesSection />
            <RenderingServicesSection />
            <HoloGuideSection />
            <CaseStudiesFaqSection />



        </div>
    );
};

export default page;