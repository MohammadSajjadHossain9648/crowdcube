import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import RunningCampaign from '../RunningCampaign/RunningCampaign';
import Advertisement from '../Advertisement/Advertisement';

const Home = () => {
    const {banners, campaigns} = useLoaderData();

    return (
        <div>
            {/* banner section */}
            <Banner banners={banners}></Banner>

            {/* categories section */}
            <Categories></Categories>

            {/* RunningCampaign section */}
            <RunningCampaign campaigns={campaigns}></RunningCampaign>

            {/* Advertisement section */}
            <Advertisement></Advertisement>
        </div>
    );
};

export default Home;