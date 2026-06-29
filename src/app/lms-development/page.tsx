import React from 'react';
import MoodleHeroSection from './MoodleHeroSection';
import MoodleFeaturesSection from './MoodleFeaturesSection';
import MoodleReadyPluginsSection from './MoodleReadyPluginsSection';
import TrustedCompaniesSection from './TrustedCompaniesSection';
import HowWeWorkSection from './HowWeWorkSection';

const page = () => {
    return (
        <div>
            <MoodleHeroSection/>
            <MoodleFeaturesSection/>
            <MoodleReadyPluginsSection/>
            <TrustedCompaniesSection/>
            <HowWeWorkSection/>
        </div>
    );
};

export default page;