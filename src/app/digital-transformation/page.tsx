import React from 'react';
import DigitalTransformationHeroSection from './DigitalTransformationHeroSection';
import DigitalTransformationFindingsSection from './DigitalTransformationFindingsSection';
import WhyDigitalTransformationMattersSection from './WhyDigitalTransformationMattersSection';
import DigitalTransformationCoreCapabilitiesSection from './DigitalTransformationCoreCapabilitiesSection';
import DigitalTransformationApproachSection from './DigitalTransformationApproachSection';
import DigitalTransformationPartnerSection from './DigitalTransformationPartnerSection';
import DigitalTransformationSuccessStoriesSection from './DigitalTransformationSuccessStoriesSection';
import DigitalTransformationFaqSection from './DigitalTransformationFaqSection';

const page = () => {
    return (
        <div>
            <DigitalTransformationHeroSection/>
            <DigitalTransformationFindingsSection/>
            <WhyDigitalTransformationMattersSection/>
            <DigitalTransformationCoreCapabilitiesSection/>
            <DigitalTransformationApproachSection/>
            <DigitalTransformationPartnerSection/>
            <DigitalTransformationSuccessStoriesSection/>
            <DigitalTransformationFaqSection/>
        </div>
    );
};

export default page;