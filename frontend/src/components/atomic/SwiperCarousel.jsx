"use client";

import 'swiper/css';
import 'swiper/css/pagination';
// import '../../assets/style/customSwiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

export const SwiperCarousel = ({ swiperContainerStyle = '', swiperStates, children }) => {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            loop={swiperStates.loop}
            autoplay={swiperStates.autoplay}
            pagination={swiperStates.pagination}
            breakpoints={swiperStates.breakpoints}
            spaceBetween={swiperStates.spaceBetween}
            slidesPerView={swiperStates.slidesPerView}
            className={`${swiperContainerStyle} w-full h-full`}
        >
            {children?.map((slide, index) => (
                <SwiperSlide key={index}>
                    {slide}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
