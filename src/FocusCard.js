import React from 'react'
import './FocusCard.css'

const FocusCard = ({movie}) => {
		return (
			<div className='focus-card' style={{backgroundImage: `url(${movie.backdrop_path})`,
			backgroundRepeat: "no-repeat", backgroundSize: 'cover',}}>
    		<img className='movie-poster-large' src={movie.poster_path}></img>
				<div className='movie-overview'>
					<h1>{movie.title}</h1>
					<p>{movie.overview}</p>
					<div> Movie TRAILER </div>
				</div>
				<div className='movie-specs'>
					<h1 className='details'>{movie.genre}</h1>
					<h1 className='details'>Released: {movie.release_date}</h1>
					<h1 className='details'>Runtime: {movie.runtime} minutes</h1>
					<h1 className='details'>Budget: {movie.budget}</h1>
					<h1 className='details'>Revenue: {movie.revenue}</h1>
					<div>
					<h1 className='details'>Rating: {movie.average_rating.toFixed(1)}</h1>
					</div>
				</div>
  		</div>);
}

export default FocusCard;
