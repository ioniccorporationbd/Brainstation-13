import React from 'react';
import DataMigrationHeroSection from './DataMigrationHeroSection';
import DataMigrationServicesSection from './DataMigrationServicesSection';
import DataMigrationTechnologiesSection from './DataMigrationTechnologiesSection';
import DataMigrationIndustriesSection from './DataMigrationIndustriesSection';
import DataMigrationWorkedWithSection from './DataMigrationWorkedWithSection';
import DataMigrationCapabilitiesSection from './DataMigrationCapabilitiesSection';
import DataMigrationFAQSection from './DataMigrationFAQSection';

const page = () => {
    return (
        <div>
            <DataMigrationHeroSection/>
            <DataMigrationServicesSection/>
            <DataMigrationTechnologiesSection/>
            <DataMigrationIndustriesSection/>
            <DataMigrationWorkedWithSection/>
            <DataMigrationCapabilitiesSection/>
            <DataMigrationFAQSection/>
        </div>
    );
};

export default page;