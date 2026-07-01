import React from 'react';
import DigitalBankingHeroSection from './DigitalBankingHeroSection';
import DigitalBankingTrustedBanksSection from './DigitalBankingTrustedBanksSection';
import DigitalBankingCapabilitiesSection from './DigitalBankingCapabilitiesSection';
import DigitalBankingProductModulesSection from './DigitalBankingProductModulesSection';
import DigitalBankingPlatformPerformanceSection from './DigitalBankingPlatformPerformanceSection';
import DigitalBankingCoreIntegrationSection from './DigitalBankingCoreIntegrationSection';
import DigitalBankingEcosystemIntegrationsSection from './DigitalBankingEcosystemIntegrationsSection';

const page = () => {
    return (
        <div>
            <DigitalBankingHeroSection/>
            <DigitalBankingTrustedBanksSection/>
            <DigitalBankingCapabilitiesSection/>
            <DigitalBankingProductModulesSection/>
            <DigitalBankingPlatformPerformanceSection/>
            <DigitalBankingCoreIntegrationSection/>
            <DigitalBankingEcosystemIntegrationsSection/>
        </div>
    );
};

export default page;