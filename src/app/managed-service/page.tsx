import React from 'react';
import ManagedServiceHeroSection from './ManagedServiceHeroSection';
import ManagedServicesIntroSection from './ManagedServicesIntroSection';
import WhyChooseBrainStationSection from './WhyChooseBrainStationSection';
import ManagedHowItWorksSection from './ManagedHowItWorksSection';
import EngagementModelsSection from './EngagementModelsSection';
import ManagedServicesFaqSection from './ManagedServicesFaqSection';

const page = () => {
  return (
    <div>
      <ManagedServiceHeroSection />
      <ManagedServicesIntroSection />
      <WhyChooseBrainStationSection />
      <ManagedHowItWorksSection />
      <EngagementModelsSection />
      <ManagedServicesFaqSection />
    </div>
  );
};

export default page;
