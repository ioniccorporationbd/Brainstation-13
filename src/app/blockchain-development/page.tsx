import React from 'react';
import BlockchainHeroSection from './BlockchainHeroSection';
import BlockchainTrustedSection from './BlockchainTrustedSection';
import BlockchainCapabilitySection from './BlockchainCapabilitySection';
import BlockchainExcellenceSection from './BlockchainExcellenceSection';
import BlockchainInfrastructureSection from './BlockchainInfrastructureSection';
import BlockchainEnterpriseSection from './BlockchainEnterpriseSection';
import BlockchainGlobalAchievementsSection from './BlockchainGlobalAchievementsSection';
import TechStackSwiperSection from './TechStackSwiperSection';
import RelatedBlogsSection from './RelatedBlogsSection';

const page = () => {
    return (
        <div>
            <BlockchainHeroSection/>
            <BlockchainTrustedSection/>
            <BlockchainCapabilitySection/>
            <BlockchainExcellenceSection/>
            <BlockchainInfrastructureSection/>
            <BlockchainEnterpriseSection/>
            <BlockchainGlobalAchievementsSection/>
            <TechStackSwiperSection/>
            <RelatedBlogsSection/>
        </div>
    );
};

export default page;