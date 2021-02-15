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
              width='1280px'
              height='720px'
            />
          </div>
          
        </div>  
    )
}
    
