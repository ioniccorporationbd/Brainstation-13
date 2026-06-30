import React from 'react';
import EnterpriseMsfaAiRoadmapSection from './EnterpriseMsfaAiRoadmapSection';
import BankingFinancialIntroSection from './BankingFinancialIntroSection';
import BankingFinancialServicesSection from './BankingFinancialServicesSection';
import BankingFinancialTechnologiesSection from './BankingFinancialTechnologiesSection';
import BankingFinancialIndustriesSection from './BankingFinancialIndustriesSection';
import BankingFinancialClientsSection from './BankingFinancialClientsSection';

const page = () => {
    return (
        <div>
            <EnterpriseMsfaAiRoadmapSection/>
            <BankingFinancialIntroSection/>
            <BankingFinancialServicesSection/>
            <BankingFinancialTechnologiesSection/>
            <BankingFinancialIndustriesSection/>
            <BankingFinancialClientsSection/>
        </div>
    );
};

export default page;