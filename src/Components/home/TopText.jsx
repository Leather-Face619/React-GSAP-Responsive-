import React from 'react'
import Video from './Video'

const TopText = () => {
  return (
    <div className="font-[lusanne500] text-center pt-5">
      <div className='text-[9vw] flex items-center justify-center uppercase leading-[8.5vw]'>
        The spark for  
      </div>
      <div className='text-[9vw] flex items-center justify-center uppercase leading-[8.5vw]'>
       all <div className='h-[8vw] w-[15vw] rounded-full overflow-hidden'><Video/></div> things 
      </div>
      <div className='text-[9vw] flex items-center justify-center uppercase leading-[8.5vw]'>
       creative
      </div>


    </div>
  )
}

export default TopText