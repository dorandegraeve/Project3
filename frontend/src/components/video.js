
import React from "react"

const Video = ({videoSrcURL, ...props }) => (
    
  <div className="video">
    <iframe
      className="video__frame"
      src={videoSrcURL}
      title="Video"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      width="600" 
      height="400"
    />
  </div>
)
export default Video

