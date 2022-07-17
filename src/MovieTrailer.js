import React from 'react'
import ReactPlayer from 'react-player';
import './MovieTrailer.css'

const MovieTrailer = ({trailer}) => {
    if(!trailer) {return}
  const findTrailer = trailer.find(video => {
    return video.type === "Trailer"
  })
  let url = ''
  findTrailer.site === 'Youtube' ?
    url = `https://www.youtube.com/watch?v=${findTrailer.key}` :
    url = `https://www.vimeo.com/${findTrailer.key}`

  return (
			<ReactPlayer url={`https://www.youtube.com/watch?v=${findTrailer.key}`}
      width= '60%'
      height= '60%'    
			/>
	);
    }


export default MovieTrailer;
