import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import RunningCampaign from '../RunningCampaign/RunningCampaign';

const Home = () => {
    const {banners, campaigns} = useLoaderData();
    console.log(banners, campaigns);

    return (
        <div>
            {/* banner section */}
            <Banner banners={banners}></Banner>

            {/* categories section */}
            <Categories></Categories>

            {/* RunningCampaign section */}
            <RunningCampaign campaigns={campaigns}></RunningCampaign>
        </div>
    );
};

export default Home;