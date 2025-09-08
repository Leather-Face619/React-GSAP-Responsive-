import React from 'react'
import bgVideo from '../../assets/bgVideo.mp4' 
const Video = () => {
  return (
    <div>
         <video
        className="w-full h-screen object-cover"
        autoPlay
        loop
        muted
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Video