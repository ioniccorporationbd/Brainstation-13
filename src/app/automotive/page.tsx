import React from 'react';
import AutomotiveHeroSection from './AutomotiveHeroSection';
import AutomotiveHelpSection from './AutomotiveHelpSection';
import AutomotiveCaseStudiesSection from './AutomotiveCaseStudiesSection';

const page = () => {
    return (
        <div>
            <AutomotiveHeroSection/>
            <AutomotiveHelpSection/>
            <AutomotiveCaseStudiesSection/>
        </div>
    );
};

export default page;