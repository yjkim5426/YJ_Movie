import React from 'react';

function Movie({posterPath, title, releaseDate, overview}){
  return (
    /* <h1>{posterPath}</h1>
    <h1>{title}</h1>
    <h1>{releaseDate}</h1>
    <h1>{overview}</h1> */
    <div className='movieCard'>
      <div className='moviePoster'>
        <MoviePoster poster={posterPath} alt={title} />
      </div>
      <div className='movieTitle'>
        <h1>{title}</h1>
      </div>
      <div className='movieReleaseDate'>
        <h3>{releaseDate}</h3>
      </div>
      <div className='movieSummary'>
        <p>{overview}</p>
      </div>
    </div>
  )
}

function MoviePoster({poster, alt}) {
  const prePath = 'https://image.tmdb.org/t/p/w500/';
  return(
    // <>
    // {poster}
    // {alt}
    // </>
    <img className='posterImg' src={prePath + poster} alt={alt} />
  )
}

export default Movie