"use client"
import React from 'react'
import { BsShare } from 'react-icons/bs';
import { BsFillStarFill } from 'react-icons/bs';
import "./MoviePage.css";
import MoviesCarousel from '@/components/MoviesCarousel/MoviesCarousel';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import CelebCard from '@/components/CelebCard/CelebCard';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const MoviePage = () => {

    const currentPagePath = usePathname();

    const movie = {
        widePoster: "https://cdn.wallpapersafari.com/56/33/aC1zVe.jpg",
        portraitPoster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p170977_p_v7_ae.jpg",
        title: "I am Legend",
        rating: 9.1,
        halls: [
            "2D", "3D"
        ],
        languages: [
            "Hebrew", "English", "Russian"
        ],
        duration: "2h 15m",
        genre: ["Action", "Adventure"],
        releaseDate: "14 Dec, 2007",
        cast: [
            {
                _id: "1",
                name: "Will Smith",
                role: "Actor",
                imageUrl: "https://pbs.twimg.com/profile_images/598193182833135616/H_H9SZgx_400x400.jpg"
            },
            {
                _id: "1",
                name: "Will Smith",
                role: "Actor",
                imageUrl: "https://pbs.twimg.com/profile_images/598193182833135616/H_H9SZgx_400x400.jpg"
            },
            {
                _id: "1",
                name: "Will Smith",
                role: "Actor",
                imageUrl: "https://pbs.twimg.com/profile_images/598193182833135616/H_H9SZgx_400x400.jpg"
            }
        ],
        crew: [
            {
                _id: "1",
                name: "James Cameron",
                role: "Director",
                imageUrl: "https://res.cloudinary.com/dxw0o8aaj/image/upload/c_fill,g_face:auto,w_640,h_640/v1/explorer_profiles/unf8o6see6wip8v5fsci"
            },
            {
                _id: "2",
                name: "James Cameron",
                role: "Director",
                imageUrl: "https://res.cloudinary.com/dxw0o8aaj/image/upload/c_fill,g_face:auto,w_640,h_640/v1/explorer_profiles/unf8o6see6wip8v5fsci"
            },
            {
                _id: "3",
                name: "James Cameron",
                role: "Director",
                imageUrl: "https://res.cloudinary.com/dxw0o8aaj/image/upload/c_fill,g_face:auto,w_640,h_640/v1/explorer_profiles/unf8o6see6wip8v5fsci"
            }
        ],
        about: "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure."

    }

    return (
        <div className='moviepage'>
            <div className="c1" style={{ backgroundImage: `url(${movie.widePoster})` }}>
                <div className="c11">
                    <div className="left">
                        <div className="movie_poster" style={{ backgroundImage: `url(${movie.portraitPoster})` }}>
                            <p>In cinemas</p>
                        </div>
                        <div className="movie_details">
                            <p className="title">{movie.title}</p>
                            <p className='rating'>
                                <BsFillStarFill className='star' /> &nbsp;&nbsp;
                                {movie.rating}/10
                            </p>
                            <div className='halls_languages'>
                                <p className='halls'>
                                    {
                                        movie.halls.map((hall, index) => {
                                            return (
                                                <span key={index}>{hall} </span>
                                            )
                                        })
                                    }
                                </p>
                                <p className='languages'>
                                    {movie.languages.map((language, index) => {
                                        return (
                                            <span key={index}> {language}</span>
                                        )
                                    })}
                                </p>
                            </div>
                            <p className='duration_type_releasedate'>
                                <span className='duration'>
                                    {movie.duration}
                                </span>
                                <span>•</span>
                                <span className='type'>
                                    {movie.genre.join(', ')}
                                </span>
                                <span>•</span>
                                <span className='releasedate'>
                                    {movie.releaseDate}
                                </span>
                            </p>
                            <Link href={`${currentPagePath}/buytickets`} className='linkstylenonr'>
                            <button className="bookbtn">Book Tickets</button>
                            </Link>
                        </div>
                    </div>
                    <div className="right">
                        <button className="sharebtn"><BsShare className="shareicon" />Share</button>
                    </div>
                </div>
            </div>
            <div className="c2">
                <h2>About the Movie</h2>
                <p>{movie.about}</p>
                <div className="circle_and_slider">
                <div className="line"></div>
                <h2>Cast</h2>
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
                        movie.cast.map((cast, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <CelebCard {...cast} />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                </div>
                <div className="circle_and_slider">
                <div className="line"></div>
                <h2>Crew</h2>
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
                        movie.crew.map((cast, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <CelebCard {...cast} />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                </div>
                <div className="line"></div>
                <h2>You might also like</h2>
                <MoviesCarousel />
            </div>
        </div>
    )
}

export default MoviePage