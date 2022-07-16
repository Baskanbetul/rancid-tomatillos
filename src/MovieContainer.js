import React from "react";
import MoviesCard from './MoviesCard.js';
import './MovieContainer.css';

const MovieContainer = ({movies, handleChange}) => {
  console.log('look',movies)
  const cards = movies.map(movie => {
    return (
      <MoviesCard
      title={movie.title}
      id={movie.id}
      key={movie.id}
      imageUrl={movie.poster_path}
      rating={movie.average_rating}
      handleChange={handleChange}
      />
      );
    });
  return (
    <div className='movie-container'>{cards}</div>
  )
}

export default MovieContainer;
