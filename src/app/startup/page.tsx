import React from 'react';
import StartupHeroSection from './StartupHeroSection';
import StartupHelpSection from './StartupHelpSection';
import StartupCaseStudiesSection from './StartupCaseStudiesSection';

const page = () => {
    return (
        <div>
            <StartupHeroSection/>
            <StartupHelpSection/>
            <StartupCaseStudiesSection/>
        </div>
    );
};

export default page;