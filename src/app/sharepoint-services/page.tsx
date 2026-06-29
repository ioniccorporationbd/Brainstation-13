import React from 'react';
import SharePointHeroSection from './SharePointHeroSection';
import SharePointDescriptionSection from './SharePointDescriptionSection';
import SharePointOfferedServicesSection from './SharePointOfferedServicesSection';
import SharePointBottomSections from './SharePointBottomSections';

const page = () => {
    return (
        <div>
            <SharePointHeroSection/>
            <SharePointDescriptionSection/>
            <SharePointOfferedServicesSection/>
            <SharePointBottomSections/>
        </div>
    );
};

export default page;