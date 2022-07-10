import React from 'react'

const FocusCard = ({movie}) => {
	console.log(movie, "LABELLLL")
		return <div className='focus-card'>
		<div>
		{/* <h1>{movie.backdrop_path}</h1> */}
			<h1 className='movie-rating'>{movie.average_rating.toFixed(1)}</h1>
		</div>
    <img className='movie-poster' src={movie.poster_path}>
		</img>
		<h1 className='movie-title'>{movie.title}</h1>

  </div>;
}

export default FocusCard;