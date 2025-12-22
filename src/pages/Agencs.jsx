import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react'

const Agencs = () => {
  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null);
  useGSAP(function(){
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger:imageDivRef.current,
        markers:true,
        start:"top 25%",
        end:"top -100%",
        pin:true,
        scrub:1
      },
      
    })
  })
  return (
   <div>
     <div className='section-1'>
      <div ref={imageDivRef} className='h-[20vw] w-[16vw] top-[12vw] z-0 left-[30vw] absolute rounded-3xl overflow-hidden'>
        <img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKAPbkvqVb0kd4UK-oS7VvuMf7_4Z9JFW-kA&s" alt="" />
      </div>
      <div className='w-screen h-screen z-10 relative text-black font-[lusanne500]'>
        <div className='mt-[55vh]'>
          <h1 className='text-[25vw] text-center uppercase leading-[19vw]'>S<span className='text-red-500 text-[29vw] font-[digital]'>6</span>X3Y
            Ni<span className='text-red-500 text-[29vw] font-[digital]'>9</span>ne</h1>
        </div>
        <div className=' pl-[40%] mt-20'>
          <p className='text-6xl'> &nbsp;&nbsp;We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
        </div>

      </div>
    </div>
    <div className='section-2 h-screen'>
      <div className='h-[20vw] w-[16vw] top-[52vw] z-0 left-[30vw] absolute rounded-3xl overflow-hidden'>
        <img className='w-full h-full' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
      </div>
      
    </div>
   </div>
  )
}

export default Agencs    