import React from 'react';
import DataEngineeringHeroSection from './DataEngineeringHeroSection';
import DataCoreServicesSection from './DataCoreServicesSection';
import DataCertificationsSection from './DataCertificationsSection';
import DataToolsSection from './DataToolsSection';
import DataIndustriesCoveredSection from './DataIndustriesCoveredSection';
import DataCaseStudiesSection from './DataCaseStudiesSection';
import DataWhyBrainStationSection from './DataWhyBrainStationSection';

const page = () => {
    return (
        <div>
            <DataEngineeringHeroSection/>
            <DataCoreServicesSection/>
            <DataCertificationsSection/>
            <DataToolsSection/>
            <DataIndustriesCoveredSection/>
            <DataCaseStudiesSection/>
            <DataWhyBrainStationSection/>
        </div>
    );
};

export default page;