import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react'

const Agencs = () => {

  const imageArray=[
    'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
      "https://i.pinimg.com/736x/17/3b/62/173b628f03968e8a35cb1156f23e5f05.jpg",
      'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
      'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
      'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
      'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
      'https://i.pinimg.com/736x/5e/fc/fa/5efcfaa224a90f19015265ed4f6d5148.jpg','https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
      'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
      'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6','https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a','https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6','https://i.pinimg.com/1200x/38/67/11/3867115f25d475aa4a00d8e84f0bacaf.jpg','https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6'
    
  ]
  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(function(){
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger:imageDivRef.current,
        start:"top 25%",
        end:"top -150%",
        pin:true,
        scrub:1,
        onUpdate:(elem)=>{
          imageRef.current.src=imageArray[Math.floor(elem.progress * imageArray.length)]
        }
      },
      
    })
  })
  return (
   <div>
     <div className='section-1 pt-2 z-20'>
      <div ref={imageDivRef} className='h-[20vw] w-[16vw] top-[12vw] z-0 left-[30vw] absolute rounded-3xl overflow-hidden'>
        <img ref={imageRef} className='w-full '/>
      </div>
      <div className='w-screen h-screen z-10 relative text-black font-[lusanne500]'>
        <div className='mt-[55vh]'>
          <h1 className='text-[25vw] text-center uppercase leading-[19vw]'>S<span className='text-red-500 text-[29vw] font-[digital]'>6</span>X3Y
            Ni<span className='text-red-500 text-[29vw] font-[digital]'>9</span>ne</h1>
        </div>
        <div className=' pl-[40%] mt-20'>
          <p className='text-6xl leading-[4vw]'> &nbsp;&nbsp;We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
        </div>

      </div>
    </div>
    {/* <div className='section-2 h-screen'>
      
      
    </div> */}
   </div>
  )
}

export default Agencs    