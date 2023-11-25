import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { MovieCardType } from '@/types/types';
import MovieCard from './MovieCard';

const MoviesCarousel = () => {

    const movies: MovieCardType[] = [
        {
            title: "2001: A Space Odyssey",
            slug: "2001-a-space-odyssey",
            imageUrl: "https://media.timeout.com/images/101630933/1920/1080/image.jpg",
            _id: "1",
            rating: 9.1,
            type: "Science Fiction"
        },
        {
            title: "The Godfather",
            slug: "the-godfather-1972",
            imageUrl: "https://media.timeout.com/images/10822/1920/1080/image.jpg",
            _id: "2",
            rating: 8.6,
            type: "Thriller"
        },
        {
            title: "I am Legend",
            slug: "i-am-legend",
            imageUrl: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p170977_p_v7_ae.jpg",
            _id: "3",
            rating: 9.6,
            type: "Adventure"
        },
        {
            title: "Hannah and Her Sisters",
            slug: "hannah-and-her-sisters",
            imageUrl: "https://media.timeout.com/images/27630/1920/1080/image.jpg",
            _id: "4",
            rating: 7.4,
            type: "Thriller"
        },
        {
            title: "Addams Family Values",
            slug: "addams-family-values",
            imageUrl: "https://media.timeout.com/images/105835635/750/562/image.jpg",
            _id: "5",
            rating: 8.6,
            type: "Comedy"
        },
        ,
        {
            title: "Die Hard",
            slug: "die-hard",
            imageUrl: "https://media.timeout.com/images/101714419/1920/1080/image.jpg",
            _id: "6",
            rating: 9.8,
            type: "Thriller"
        },
        {
            title: "Gremlins",
            slug: "gremlins",
            imageUrl: "https://media.timeout.com/images/140901/1920/1080/image.jpg",
            _id: "7",
            rating: 9.6,
            type: "Comedy"
        },

    ]

    return (
        <div className='sliderout'>
            <Swiper
                slidesPerView={1}
                spaceBetween={1}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 2,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 2,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 2,
                    },
                    '@1.50': {
                        slidesPerView: 6,
                        spaceBetween: 2,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    movies?.map((movie,  index) => {
                        return (
                            <SwiperSlide key={index}>
                                <MovieCard {...movie} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default MoviesCarousel