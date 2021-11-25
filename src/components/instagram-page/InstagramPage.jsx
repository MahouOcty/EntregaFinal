import React from 'react';
import InstagramContent from './instagram-content/layout/InstagramContent';
import InstagramHeader from './header/Layout/InstagramHeader'
import RecommendedLayout from './instagram-content/components/Recommended/Layout/RecommendedLayout';

const InstagramPage = () => {
    return (
        <div>
            <InstagramHeader/>
            <InstagramContent/>
            <RecommendedLayout/>
        </div>
    );
};

export default InstagramPage;