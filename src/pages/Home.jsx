import React from 'react'
import TopText from '../Components/home/TopText'
import BottomText from '../Components/home/BottomText'
import Video from '../Components/home/video'

const Home = () => {    
  return (
    <div>
    <div className=' w-full h-screen fixed'>
      <Video/>
          </div>
      <div className=' w-full h-screen  bg-amber-900 text-3xl relative'>

   <TopText/>
          </div>

   {/* <BottomText/> */}
    </div>
  )
}

export default Home