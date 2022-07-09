import React from "react";
import MoviesCard from './MoviesCard.js';

const MovieContainer = ({movies}) => {
  const cards = movies.map(movie => {
    return (
      <MoviesCard 
      title={movie.title}
      id={movie.id}
      key={movie.id}
      imageUrl={movie.poster_path}
      rating={movie.average_rating} 
      />
      );
    });
  return (
    <div>{cards}</div>
  )
}

export default MovieContainer;