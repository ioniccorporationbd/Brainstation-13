import React from 'react';
import MvpDevelopmentHeroSection from './MvpDevelopmentHeroSection';
import MvpIntroSection from './MvpIntroSection';
import MvpBenefitsSection from './MvpBenefitsSection';
import MvpTraditionalVsAiSection from './MvpTraditionalVsAiSection';
import MvpAiDrivenSdlcProcessSection from './MvpAiDrivenSdlcProcessSection';
import MvpTechnologyStackSection from './MvpTechnologyStackSection';
import MvpFaqSection from './MvpFaqSection';


const page = () => {
    return (
        <div>
            <MvpDevelopmentHeroSection/>
            <MvpIntroSection/>
            <MvpBenefitsSection/>
            <MvpTraditionalVsAiSection/>
            <MvpAiDrivenSdlcProcessSection/>
            <MvpTechnologyStackSection/>
            <MvpFaqSection/>
        </div>
    );
};

export default page;