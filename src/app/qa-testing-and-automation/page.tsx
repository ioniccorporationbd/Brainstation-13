import React from 'react';
import SoftwareTestingHero from './SoftwareTestingHero';
import TestingIntroSection from './TestingIntroSection';
import OfferedServicesSection from './OfferedServicesSection';



const page = () => {
    return (
        <div>
         <SoftwareTestingHero/>
         <TestingIntroSection/>
         <OfferedServicesSection/>
        
        </div>
    );
};

export default page;