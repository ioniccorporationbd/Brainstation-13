import React from 'react';
import CaseStudyHeroSection from './CaseStudyHeroSection';
import CaseStudyOverviewSection from './CaseStudyOverviewSection';
import CaseStudySolutionImpactSection from './CaseStudySolutionImpactSection';
import CaseStudyRelatedSection from './CaseStudyRelatedSection';

const page = () => {
    return (
        <div>
            <CaseStudyHeroSection/>
            <CaseStudyOverviewSection/>
            <CaseStudySolutionImpactSection/>
            <CaseStudyRelatedSection/>
        </div>
    );
};

export default page;