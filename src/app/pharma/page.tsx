import React from 'react';
import PharmaSolutionsIntroSection from './PharmaSolutionsIntroSection';
import PharmaSolutionsGridSection from './PharmaSolutionsGridSection';
import PharmaCustomerSuccessSection from './PharmaCustomerSuccessSection';
import PharmaFaqSection from './PharmaFaqSection';

const page = () => {
    return (
        <div>
            <PharmaSolutionsIntroSection/>
            <PharmaSolutionsGridSection/>
            <PharmaCustomerSuccessSection/>
            <PharmaFaqSection/>
        </div>
    );
};

export default page;