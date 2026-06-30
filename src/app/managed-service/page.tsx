import React from 'react';
import ManagedServiceHeroSection from './ManagedServiceHeroSection';
import ManagedServicesIntroSection from './ManagedServicesIntroSection';
import WhyChooseBrainStationSection from './WhyChooseBrainStationSection';
import TechnologyStackExpertiseSection from './TechnologyStackExpertiseSection';
import ManagedHowItWorksSection from './ManagedHowItWorksSection';
import EngagementModelsSection from './EngagementModelsSection';
import SuccessStoriesSection from './SuccessStoriesSection';
import ManagedServicesFaqSection from './ManagedServicesFaqSection';




const page = () => {
  return (
    <div>
<ManagedServiceHeroSection/>   
<ManagedServicesIntroSection/>
<WhyChooseBrainStationSection/>
<TechnologyStackExpertiseSection/>
<ManagedHowItWorksSection/>
<EngagementModelsSection/>
<SuccessStoriesSection/>
<ManagedServicesFaqSection/>
    </div>
  );
};

export default page;