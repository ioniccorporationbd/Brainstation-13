import React from 'react';
import MoodleHeroSection from './MoodleHeroSection';
import MoodleFeaturesSection from './MoodleFeaturesSection';
import MoodleReadyPluginsSection from './MoodleReadyPluginsSection';
import ToolsAndTechSection from './ToolsAndTechSection';
import HowWeWorkSection from './HowWeWorkSection';

const page = () => {
    return (
        <div>
            <MoodleHeroSection/>
            <MoodleFeaturesSection/>
            <MoodleReadyPluginsSection/>
            <ToolsAndTechSection/>
            <HowWeWorkSection/>
        </div>
    );
};

export default page;
