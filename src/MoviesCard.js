import React, { Component }from "react";
import './MoviesCard.css';

const MoviesCard = (props) => {
	return <div className='card'>
    <h1>{props.title}</h1>
    <h1>{props.rating}</h1>
    <img className='movie-poster' src={props.imageUrl}></img>
  </div>;
};

export default MoviesCard;
