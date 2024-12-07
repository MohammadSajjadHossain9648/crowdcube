import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    const banners = useLoaderData();

    return (
        <div>
            {/* banner section */}
            <Banner banners={banners}></Banner>

            {/* categories section */}
            <Categories></Categories>
        </div>
    );
};

export default Home;