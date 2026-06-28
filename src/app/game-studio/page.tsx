import React from 'react';
import GameStudioHero from './GameStudioHero';
import BuildGameSection from './BuildGameSection';
import OurServiceSection from './OurServiceSection';
import PlatformsSection from './PlatformsSection';
import RecentGamesSection from './RecentGamesSection';
import WhyChooseJourneySection from './WhyChooseJourneySection';

const page = () => {
    return (
        <div>
            <GameStudioHero/>
            <BuildGameSection/>
            <OurServiceSection/>
            <PlatformsSection/>
            <RecentGamesSection/>
            <WhyChooseJourneySection/>
        </div>
    );
};

export default page;