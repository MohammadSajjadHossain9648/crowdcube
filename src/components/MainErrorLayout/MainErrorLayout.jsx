import React from 'react';
import { Outlet } from 'react-router-dom';

const MainErrorLayout = () => {
    return (
        <div>
            {/* content section */}
            <Outlet></Outlet>
        </div>
    );
};

export default MainErrorLayout;