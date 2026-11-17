import React from 'react';
import GameStudioHero from './GameStudioHero';
import BuildGameSection from './BuildGameSection';
import OurServiceSection from './OurServiceSection';
import PlatformsSection from './PlatformsSection';
import RecentGamesSection from './RecentGamesSection';
import WhyChooseJourneySection from './WhyChooseJourneySection';

import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";
import { pageMetadata } from "@/i18n/seo";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return pageMetadata({
    route: "/game-studio",
    title: t("Game Development Studio | Magnetic Solution Limited"),
    description: t("Full-cycle game development for PC, console and mobile — from concept and art direction to engineering, testing and launch."),
  });
}


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