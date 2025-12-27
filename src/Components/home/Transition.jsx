
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'
const Transition = (props) => {
    const parentStairRef = useRef(null)
    const pageRef = useRef(null)
    const currentPath = useLocation().pathname
    useGSAP(function () {
 
    const tl = gsap.timeline()

    tl.to(parentStairRef.current, {
      display: 'block',
    })

    tl.from('.stair', {
      height: 0,
      stagger: {
        amount: -0.6,
      },
    })
    tl.to('.stair', {
        y: '100%',
        stagger: {
          amount: 0.6,
        },
      })
      tl.to(parentStairRef.current, {
      opacity:0,
      duration:0.5,
    })
    tl.to(parentStairRef.current, {
      display: 'none',
    })
    tl.to('.stair', {
      y: '0%'
    })

    // gsap.from(pageRef.current,{
    //   opacity:0,delay:1.5
    // })
  },[currentPath])
  return (
   <>
   <div ref={parentStairRef} className='fixed h-screen w-full z-50 top-0 left-0 bg-gray-800'>
        <div className='h-full flex w-full ' >
          <div className='stair h-full w-1/6 bg-black'></div>
          <div className='stair h-full w-1/6 bg-black'></div>
          <div className='stair h-full w-1/6 bg-black'></div>
          <div className='stair h-full w-1/6 bg-black'></div>
          <div className='stair h-full w-1/6 bg-black'></div>
          <div className='stair h-full w-1/6 bg-black'></div>
        </div>
      </div>
      <div ref={pageRef}>
      {props.children}
      </div>
   </>
  )
}

export default Transition