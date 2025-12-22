import React from 'react'
import bgVideo from '../../assets/bgVideo.mp4' 
const Video = () => {
  return (
    <div className='w-full h-full'>
         <video
        className="w-full h-full object-cover center "
        autoPlay
        loop
        muted
        src={bgVideo}
      >
        
        
      </video>
    </div>
  )
}

export default Video