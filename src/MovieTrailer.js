import React from 'react'

const MovieTrailer = ({trailer}) => {

  const findTrailer = trailer.find(video => {
    return video.type === "Trailer"
  })
  return (
    // HERE 
    <div>
      <video width="320" height="240" controls>
        <source src={`${findTrailer.site}.com/embed/${findTrailer.key}`}/>
      </video>
    </div>
  )
    }
  

export default MovieTrailer;