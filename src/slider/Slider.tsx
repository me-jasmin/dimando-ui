// @ts-nocheck

import React, { Children, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

/* import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination'; */

const Slider = ({ children, ...props }) => {
    const defaultProps = {
        slidesPerView: 3,
        autoHeight: true,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            clickable: true,
        },
        modules: [FreeMode, Pagination],
    };

    const slides = useMemo(() => Children.map(children, (child, index) => <SwiperSlide key={index}>{React.cloneElement(child, { style: { ...child.props } })}</SwiperSlide>), [children]);

    return (
        <Swiper {...defaultProps} {...props}>
            {slides}
        </Swiper>
    );
};

export default Slider;
