import React from 'react';
import MediaHeroSection from './MediaHeroSection';
import MediaVisualSection from './MediaVisualSection';
import MediaPrintSection from './MediaPrintSection';
import MediaGallerySection from './MediaGallerySection';

const page = () => {
    return (
        <div>
            <MediaHeroSection/>
            <MediaVisualSection/>
            <MediaPrintSection/>
            <MediaGallerySection/>
        </div>
    );
};

export default page;