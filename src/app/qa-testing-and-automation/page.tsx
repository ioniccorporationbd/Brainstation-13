import React from 'react';
import SoftwareTestingHero from './SoftwareTestingHero';
import TestingIntroSection from './TestingIntroSection';
import OfferedServicesSection from './OfferedServicesSection';
import IndustriesWithClients from './IndustriesWithClients';


const page = () => {
    return (
        <div>
         <SoftwareTestingHero/>
         <TestingIntroSection/>
         <OfferedServicesSection/>
         <IndustriesWithClients/>
        </div>
    );
};

export default page;