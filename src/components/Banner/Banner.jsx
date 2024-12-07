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
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
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
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-5">
                            {/* Subtitle */}
                            <div className="flex items-center animate__animated animate__fadeInUp animate__delay-1s">
                                <div className="sm:w-20 md:w-32 h-0.5 border border-[#FFA500] rounded-lg"></div>
                                <h2 className="font-bold text-[#FFA500] mx-2">{banner.subtitle}</h2>
                                <div className="sm:w-20 md:w-32 h-0.5 border border-[#FFA500] rounded-lg"></div>
                            </div>
                            {/* title */}
                            <p className="mt-3 sm:w-3/5 md:w-3/4 lg:w-3/5 sm:text-4xl md:text-6xl font-bold text-white_color font_playfair_display animate__animated animate__fadeInUp animate__delay-2s">{banner.title}</p>
                            {/* button */}
                            <button className="btn border-none mt-5 font-bold bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-lg animate__animated animate__fadeInUp animate__delay-3s">
                                <Link><button onClick={scrollToSection}>Learn More</button></Link>
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
