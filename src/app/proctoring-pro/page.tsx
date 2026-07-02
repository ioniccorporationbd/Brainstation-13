import React from 'react';
import LmsProctoringHeroVideoSection from './LmsProctoringHeroVideoSection';
import LmsProctoringCoreFeaturesSection from './LmsProctoringCoreFeaturesSection';
import LmsProctoringPricingSection from './LmsProctoringPricingSection';
import LmsTrustedInstitutionsSection from './LmsTrustedInstitutionsSection';
import LmsCaseStudiesSection from './LmsCaseStudiesSection';

const page = () => {
    return (
        <div>
            <LmsProctoringHeroVideoSection/>
            <LmsProctoringCoreFeaturesSection/>
            <LmsProctoringPricingSection/>
            <LmsTrustedInstitutionsSection/>
            <LmsCaseStudiesSection/>
        </div>
    );
};

export default page;