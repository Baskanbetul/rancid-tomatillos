import React from 'react'
import ReactPlayer from 'react-player';

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
        <ReactPlayer url={`https://www.youtube.com/watch?v=${findTrailer.key}`} />
  )
    }


export default MovieTrailer;
