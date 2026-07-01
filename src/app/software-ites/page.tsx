import React from 'react';
import SoftwareItesHeroSection from './SoftwareItesHeroSection';
import SoftwareItesHelpSection from './SoftwareItesHelpSection';
import SoftwareItesCaseStudiesSection from './SoftwareItesCaseStudiesSection';

const page = () => {
    return (
        <div>
            <SoftwareItesHeroSection/>
            <SoftwareItesHelpSection/>
            <SoftwareItesCaseStudiesSection/>
        </div>
    );
};

export default page;