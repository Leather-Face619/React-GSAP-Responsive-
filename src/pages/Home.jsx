import React from 'react'
import TopText from '../components/home/TopText'
import BottomText from '../components/home/BottomText'
import Video from '../components/home/Video'

const Home = () => {
  return (
    <div>
      <div className='w-screen h-screen fixed '>
        <Video />
      </div>
      <div className='w-screen h-screen relative flex flex-col justify-between'>

     <TopText />
     <BottomText />
      </div>
    
    </div>
  )
}

export default Home