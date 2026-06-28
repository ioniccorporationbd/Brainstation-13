import React from 'react';
import MLAIHeroSection from './MLAIHeroSection';
import MLAIServicesSection from './MLAIServicesSection';
import MLAITechnologiesSection from './MLAITechnologiesSection';
import MLAIIndustriesSection from './MLAIIndustriesSection';
import MLAIWorkedWithSection from './MLAIWorkedWithSection';
import MLAICapabilitiesSection from './MLAICapabilitiesSection';
import MLAIFAQSection from './MLAIFAQSection';



const page = () => {
  return (
    <div>
      <MLAIHeroSection/>
      <MLAIServicesSection/>
      <MLAITechnologiesSection/>
      <MLAIIndustriesSection/>
      <MLAIWorkedWithSection/>
      <MLAICapabilitiesSection/>
      <MLAIFAQSection/>
      
    </div>
  );
};

export default page;