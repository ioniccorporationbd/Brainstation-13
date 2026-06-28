import React from 'react';
import InsuranceHeroSection from './InsuranceHeroSection';
import InsuranceCapabilitiesSection from './InsuranceCapabilitiesSection';
import InsuranceProvenResultsSection from './InsuranceProvenResultsSection';
import InsuranceWhatWeSolveSection from './InsuranceWhatWeSolveSection';
import InsuranceWhatWeDeliverSection from './InsuranceWhatWeDeliverSection';
import InsuranceTechnologySolutionsSection from './InsuranceTechnologySolutionsSection';

const page = () => {
    return (
        <div>
            <InsuranceHeroSection/>
            <InsuranceCapabilitiesSection/>
            <InsuranceProvenResultsSection/>
            <InsuranceWhatWeSolveSection/>
            <InsuranceWhatWeDeliverSection/>
            <InsuranceTechnologySolutionsSection/>
        </div>
    );
};

export default page;