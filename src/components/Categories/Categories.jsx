import React from 'react';
import { FaBook, FaBriefcaseMedical } from 'react-icons/fa';
import { GiTravelDress } from 'react-icons/gi';
import { ImVideoCamera } from 'react-icons/im';
import { MdDesignServices } from 'react-icons/md';

const Categories = () => {
    return (
        <div className="py-12 px-8 bg-blue_bg_color">
            <div>
                <p className="mb-3 font-bold text-white_color">EXPLORE CATEGORIES</p>
                <h2 className="text-4xl font-bold text-white_color">Which Category Interest You</h2>
            </div>
            <div className="grid grid-cols-5 gap-8 mt-8">
                <div className="bg-white_color p-4 flex flex-col justify-center items-center">
                    <FaBriefcaseMedical className='h-12 w-12 text-orange_bg_color'/>
                    <span className="text-xl font-bold text-blue_color pt-4">Medical</span>
                </div>
                <div className="bg-white_color p-4 flex flex-col justify-center items-center">
                    <GiTravelDress className='h-12 w-12 text-orange_bg_color'/>
                    <span className="text-xl font-bold text-blue_color pt-4">Fashion</span>
                </div>
                <div className="bg-white_color p-4 flex flex-col justify-center items-center">
                    <ImVideoCamera className='h-12 w-12 text-orange_bg_color'/>
                    <span className="text-xl font-bold text-blue_color pt-4">Videos</span>
                </div>
                <div className="bg-white_color p-4 flex flex-col justify-center items-center">
                    <FaBook className='h-12 w-12 text-orange_bg_color'/>
                    <span className="text-xl font-bold text-blue_color pt-4">Education</span>
                </div>
                <div className="bg-white_color p-4 flex flex-col justify-center items-center">
                    <MdDesignServices className='h-12 w-12 text-orange_bg_color'/>
                    <span className="text-xl font-bold text-blue_color pt-4">Design</span>
                </div>
            </div>
        </div>
    );
};

export default Categories;