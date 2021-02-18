import React from 'react'
import ReactPlayer from 'react-player'





export default ({url}) => {

    return (
        <div className="Video">
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player" 
              url={url}
              controls = "true"
              width='90%'
              height='100%'
            />
          </div>
          
        </div>  
    )
}
    
