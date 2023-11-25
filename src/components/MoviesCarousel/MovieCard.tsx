import React from 'react'
import { MovieCardType } from '@/types/types'
import { BsFillStarFill } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import './MovieCard.css'

const MovieCard = (data: MovieCardType) => {
    const router = useRouter();
    const city = "telaviv";
    const { title, slug, imageUrl, _id, rating, type } = data;
  return (
    <div className='moviecard' onClick={() => {
        router.push(`/${city}/movies/${slug}`)
    }}>
        <div className="movieimg" style={{backgroundImage: `url(${imageUrl})`}}>
               <p className='rating'>
                    <BsFillStarFill className='star' />&nbsp;&nbsp;
                    {rating}/10</p>
        
        </div>
        <div className="details">
            <p className="title">{title}</p>
            <p className="type">{type}</p>
        </div>

    </div>
  )
}

export default MovieCard