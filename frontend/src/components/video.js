import React from 'react'
import ReactPlayer from 'react-player'





export default ({url}) => {

    return (
      <div className="video-player">
         <div className="video">
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player" 
              url={url}
              controls = "true"
              width="100%"
              height="100%"
            />
          </div>
          
        </div>  
      </div>
       
    )
}
    
