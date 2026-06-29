import React from 'react';
import ShopifyHeroSection from './ShopifyHeroSection';
import ShopifySolutionsSection from './ShopifySolutionsSection';
import ShopifyTestimonialsSection from './ShopifyTestimonialsSection';
import ShopifyAppsSection from './ShopifyAppsSection';
import ShopifySuccessStoriesSection from './ShopifySuccessStoriesSection';

const page = () => {
    return (
        <div>
            <ShopifyHeroSection/>
            <ShopifySolutionsSection/>
            <ShopifyTestimonialsSection/>
            <ShopifyAppsSection/>
            <ShopifySuccessStoriesSection/>
        </div>
    );
};

export default page;