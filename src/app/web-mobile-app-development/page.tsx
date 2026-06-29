import React from 'react';
import MobileAppHeroSection from './MobileAppHeroSection';
import MobileAppDescriptionSection from './MobileAppDescriptionSection';
import OfferedServicesSection from './OfferedServicesSection';
import TechnologiesSection from './TechnologiesSection';
import IndustriesSection from './IndustriesSection';
import WorkedWithSection from './WorkedWithSection';
import MobileAppTypesSection from './MobileAppTypesSection';
import { MobileAppProcessSection } from './MobileAppProcessSection';





const page = () => {
    return (
        <div>
     <MobileAppHeroSection/>
     <MobileAppDescriptionSection/>
     <OfferedServicesSection/>
        <TechnologiesSection/>
        <IndustriesSection/>
        <WorkedWithSection/>
        <MobileAppTypesSection/>
       <MobileAppProcessSection/>
        </div>
    );
};

export default page;