import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';
import { FILM_BANNERS } from './films-banners';

const width = window?.innerWidth;
const height = window?.innerHeight;

const HomeSlider = () => {

    const [banners, setBanners] = useState(FILM_BANNERS)

    return (
        <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
        >
            
            {
                banners.map((banner, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Image src={banner.imgUrl} alt={`banner_${index+1}`} 
                                   width={width} height={height / 2} 
                                     style={{objectFit: "fill"}}/>
                        </SwiperSlide>
                    )
                })
            }

        </Swiper>
    )
}

export default HomeSlider