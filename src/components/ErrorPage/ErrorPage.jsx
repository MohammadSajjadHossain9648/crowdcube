import React from 'react';
import { Link } from 'react-router-dom';
import { Fade, Flip } from "react-awesome-reveal";


const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black_bg_color">
            <Flip duration={4000}>
                <h1 className="text-6xl font-bold text-red_color mb-4">404</h1>
            </Flip>
            <Fade duration={8000}>
                <p className="text-2xl text-Shade_black_color_1 mb-8">Oops! The page you're looking for doesn't exist.</p>
            </Fade>
            <Link to="/">
                <button className="btn bg-green_color text-white px-6 py-2 rounded-lg hover:bg-green-700">
                    Go Back to Home
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;