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
              width="101.4rem"
              height="57.4rem"
            />
          </div>
          
        </div>  
      </div>
       
    )
}
    
