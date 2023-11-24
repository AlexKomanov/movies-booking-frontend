"use client"
import React from 'react'
import { BsShare } from 'react-icons/bs';
import { BsFillStarFill } from 'react-icons/bs';
import "./MoviePage.css";
import MoviesCarousel from '@/components/MoviesCarousel/MoviesCarousel';

const MoviePage = () => {

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
            }
        ],
        crew: [
            {
                _id: "1",
                name: "James Cameron",
                role: "Director",
                imageUrl: "https://variety.com/wp-content/uploads/2023/07/Screen-Shot-2023-07-19-at-10.15.32-AM.png"
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
                            <button className="bookbtn">Book Tickets</button>
                        </div>
                    </div>
                    <div className="right">
                        <button className="sharebtn"><BsShare className="shareicon" />Share</button>
                    </div>
                </div>
            </div>
            <div className="c2">
                <h1>About the Movie</h1>
                <p>{movie.about}</p>
                <div className="line"></div>
                <h2>Cast</h2>
                <div className="circle_and_slider"></div>
                <div className="line"></div>
                <h2>Crew</h2>
                <div className="circle_and_slider"></div>
                <div className="line"></div>
                <h2>You might also like</h2>
                <MoviesCarousel />
            </div>
        </div>
    )
}

export default MoviePage