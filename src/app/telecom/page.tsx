import React from 'react';
import TelecomHeroSection from './TelecomHeroSection';
import TelecomHelpSection from './TelecomHelpSection';
import TelecomCaseStudiesSection from './TelecomCaseStudiesSection';

const page = () => {
    return (
        <div>
            <TelecomHeroSection/>
            <TelecomHelpSection/>
            <TelecomCaseStudiesSection/>
        </div>
    );
};

export default page;