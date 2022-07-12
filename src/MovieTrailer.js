import React from 'react'
import ReactPlayer from 'react-player';

const MovieTrailer = ({trailer}) => {

  const findTrailer = trailer.find(video => {
    return video.type === "Trailer"
  })
  return (
    // HERE
    <div>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${findTrailer.key}`} />
    </div>
  )
    }


export default MovieTrailer;
