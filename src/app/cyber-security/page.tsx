import React from 'react';
import CyberSecurityBanner from './CyberSecurityBanner';
import OurFindings from './OurFindings';
import WhyCyberSecurityMatters from './WhyCyberSecurityMatters';
import CoreCapabilities from './CoreCapabilities';
import SecurityApproach from './SecurityApproach';
import WhyPartner from './WhyPartner';
import SuccessStories from './SuccessStories';
import FaqSection from './FaqSection';

const page = () => {
    return (
        <div>
            <CyberSecurityBanner/>
            <OurFindings/>
            <WhyCyberSecurityMatters/>
            <CoreCapabilities/>
            <SecurityApproach/>
            <WhyPartner/>
            <SuccessStories/>
            <FaqSection/>
         

        </div>
    );
};

export default page;