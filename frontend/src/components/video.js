
import React from "react"
import ReactPlayer from 'react-player'

const Video = ({url }) => (
    
  
  
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player" 
              url={url}
              controls = "true"
              width='100%'
              height='100%'
            />
          </div>
          
    
  
)
export default Video

