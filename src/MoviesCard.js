import React, { Component }from "react";
import './MoviesCard.css';

const MoviesCard = (props) => {
	return <div className='card'>
		<div className='rating-container'>
			<h1 className='movie-rating'>{props.rating.toFixed(1)}</h1>
		</div>
    <img className='movie-poster' src={props.imageUrl}>
		</img>
		<h1 className='movie-title'>{props.title}</h1>

  </div>;
};

export default MoviesCard;
