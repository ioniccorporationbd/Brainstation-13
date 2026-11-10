import React from 'react';
import SoftwareTestingHero from './SoftwareTestingHero';
import TestingIntroSection from './TestingIntroSection';
import OfferedServicesSection from './OfferedServicesSection';
import ToolsSliderSection from './ToolsSliderSection';

const page = () => {
    return (
        <div>
            <SoftwareTestingHero/>
            <TestingIntroSection/>
            <OfferedServicesSection/>
            <ToolsSliderSection/>
        </div>
    );
};

export default page;
