import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Home = () => {
    const banners = useLoaderData();

    return (
        <div>
            {/* banner section */}
            <Banner banners={banners}></Banner>
        </div>
    );
};

export default Home;