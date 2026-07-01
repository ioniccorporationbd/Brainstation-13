import React from 'react';
import RetailHeroSection from './RetailHeroSection';
import RetailHelpSection from './RetailHelpSection';
import RetailCaseStudiesSection from './RetailCaseStudiesSection';

const page = () => {
    return (
        <div>
            <RetailHeroSection/>
            <RetailHelpSection/>
            <RetailCaseStudiesSection/>
        </div>
    );
};

export default page;