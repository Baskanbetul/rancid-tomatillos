import React, { Component }from "react";
import './MoviesCard.css';
import { Link } from 'react-router-dom'

const MoviesCard = (props) => {
	return (
		<Link to={`/${props.id}`}>
				<div className='card' onClick={() => props.handleChange(props.id)}>
				<div className='rating-container'>
					<h1 className='movie-rating'>{props.rating.toFixed(1)}</h1>
				</div>
		    <img className='movie-poster' src={props.imageUrl}>
				</img>
				<h1 className='movie-title'>{props.title}</h1>

		  	</div>
		</Link>)
};

export default MoviesCard;
