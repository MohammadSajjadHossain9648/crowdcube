import React from "react";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "animate.css";
import { Link } from "react-router-dom";

const Banner = ({ banners }) => {
    const scrollToSection = () => {
        document.getElementById('runningCampaign').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                className="w-full"
            >
                {banners.map((banner, index) => (
                    <SwiperSlide key={index} className="relative">

                        {/* Background Image */}
                        <img className="w-full" src={banner.image} alt="banner background image" />

                        {/* Overlay Content */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white_color p-5">
                            {/* Subtitle */}
                            <div className="flex items-center animate__animated animate__fadeInUp animate__delay-1s">
                                <h2 className="font-bold text-white_color mx-2">{banner.subtitle}</h2>
                            </div>
                            {/* title */}
                            <p className="mt-3 sm:w-3/5 md:w-3/4 lg:w-3/5 sm:text-4xl md:text-6xl font-bold text-white_color animate__animated animate__fadeInUp animate__delay-2s">{banner.title}</p>
                            {/* button */}
                            <button onClick={scrollToSection} className="btn border-none mt-5 font-bold bg-orange_color hover:bg-orange_bg_color text-white_color py-2 px-4 rounded-lg animate__animated animate__fadeInUp animate__delay-3s">
                                Learn More
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
