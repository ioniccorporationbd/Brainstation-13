import React from 'react';
import AemHeroSection from './AemHeroSection';
import AemDescriptionSection from './AemDescriptionSection';
import AemOfferedServicesSection from './AemOfferedServicesSection';
import AemIndustriesSection from './AemIndustriesSection';
import AemWorkedWithSection from './AemWorkedWithSection';
import AemProjectHelpSection from './AemProjectHelpSection';

const page = () => {
    return (
        <div>
            <AemHeroSection/>
            <AemDescriptionSection/>
            <AemOfferedServicesSection/>
            <AemIndustriesSection/>
            <AemWorkedWithSection/>
            <AemProjectHelpSection/>
        </div>
    );
};

export default page;