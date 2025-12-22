
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Agencs from './pages/Agencs'
import Projects from './pages/projects'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const App = () => {
  
  useGSAP(function(){
    const tl = gsap.timeline()
    tl.from('.stair',{
      height:0,
      stagger:{
        amount:-0.6,
      },
      
    })
    .to('.stair',{
      y:'100%',
      stagger:{
        amount:0.6,
      },
      
    })
  })
  return (
  <div className='text-white'>
    
   <div className='h-screen flex w-screen fixed z-50'>
    <div className='stair h-full w-1/6 bg-black'></div> 
    <div className='stair h-full w-1/6 bg-white'></div>
    <div className='stair h-full w-1/6 bg-black'></div>
    <div className='stair h-full w-1/6 bg-white'></div>
    <div className='stair h-full w-1/6 bg-black'></div>
    <div className='stair h-full w-1/6 bg-white'></div>
   </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Agencs' element={<Agencs/>}/>
      <Route path='/Projects' element={<Projects/>}/>

    </Routes>
  </div>
  )
}

export default App