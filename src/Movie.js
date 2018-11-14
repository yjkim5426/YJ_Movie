import React from 'react';

function Movie({posterPath, title, releaseDate, overview}){
  return (
    /* <h1>{posterPath}</h1>
    <h1>{title}</h1>
    <h1>{releaseDate}</h1>
    <h1>{overview}</h1> */
    <div className='movieCard'>
      <div className='moviePoster'>
      </div>
      <div className='movieTitle'>
      </div>
      <div className='movieReleaseDate'>
      </div>
      <div className='movieSummary'>
      </div>
    </div>
  )
}

export default Movie