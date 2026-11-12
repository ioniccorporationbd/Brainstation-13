import React from 'react';
import { getTranslator } from "@/i18n/server";
import DigitalTransformationHeroSection from './DigitalTransformationHeroSection';
import DigitalTransformationFindingsSection from './DigitalTransformationFindingsSection';
import WhyDigitalTransformationMattersSection from './WhyDigitalTransformationMattersSection';
import DigitalTransformationCoreCapabilitiesSection from './DigitalTransformationCoreCapabilitiesSection';
import DigitalTransformationApproachSection from './DigitalTransformationApproachSection';
import DigitalTransformationPartnerSection from './DigitalTransformationPartnerSection';
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
            <DigitalTransformationFaqSection/>
        </div>
    );
};

export default page;
