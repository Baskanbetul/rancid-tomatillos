import React from 'react'
import ReactPlayer from 'react-player';

const MovieTrailer = ({trailer}) => {
    if(!trailer) {
      return
    }
  const findTrailer = trailer.find(video => {
    return video.type === "Trailer"
  })

  console.log(findTrailer, 'TRAILER')
  let url = ''
  if(findTrailer.site === 'Youtube') {
    url = `https://www.youtube.com/watch?v=${findTrailer.key}`
  } else {
    url = `https://www.vimeo.com/${findTrailer.key}`
  }
  return (
    // HERE
    <div>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${findTrailer.key}`} />
    </div>
  )
    }


export default MovieTrailer;
