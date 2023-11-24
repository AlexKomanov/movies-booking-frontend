import React from 'react'

const MoviePage = () => {

const movie = {
    widePoster: "https://images2.alphacoders.com/674/674470.jpg",
    portraitPoster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
    title: "I am Legend",
    rating: 9.1,
    halls: [
        "2D", "3D"
    ],
    languages: [
        "Hebrew", "English", "Russian"
    ],
    duration: "2h 15m",
    type: "Action/Adventure",
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
    ]
    
}

  return (
    <div>MoviePage</div>
  )
}

export default MoviePage