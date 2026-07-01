import React from 'react';
import RealEstateHeroSection from './RealEstateHeroSection';
import RealEstateHelpSection from './RealEstateHelpSection';
import RealEstateCaseStudiesSection from './RealEstateCaseStudiesSection';

const page = () => {
    return (
        <div>
            <RealEstateHeroSection/>
            <RealEstateHelpSection/>
            <RealEstateCaseStudiesSection/>
        </div>
    );
};

export default page;