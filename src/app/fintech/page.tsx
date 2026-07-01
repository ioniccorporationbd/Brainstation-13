import React from 'react';
import FintechHeroVideoSection from './FintechHeroVideoSection';
import FintechSolutionsTabsSection from './FintechSolutionsTabsSection';
import FintechTrustedTeamsSection from './FintechTrustedTeamsSection';
import FintechDeliveryModelsSection from './FintechDeliveryModelsSection';
import FintechCaseStudiesSection from './FintechCaseStudiesSection';
import FintechSecurityReliabilitySection from './FintechSecurityReliabilitySection';
import FintechSecurityReliabilitySection1 from './FintechSecurityReliabilitySection1';
import FintechStrategiesVideosSection from './FintechStrategiesVideosSection';


const page = () => {
    return (
        <div>
        <FintechHeroVideoSection/>
        <FintechSolutionsTabsSection/>
        <FintechTrustedTeamsSection/>
        <FintechDeliveryModelsSection/>
        <FintechCaseStudiesSection/>
        <FintechSecurityReliabilitySection/>
        <FintechSecurityReliabilitySection1/>
        <FintechStrategiesVideosSection/>
        </div>
    );
};

export default page;