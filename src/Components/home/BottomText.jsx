import React from 'react'
import { Link } from 'react-router-dom'

const BottomText = () => {
  return (
   <div className='font-[lusanne500] text-center pt-5 gap-10 flex justify-center'>
<Link className='text-[6vw] leading-[6vw] border-3 px-6 py-2 border-white rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50] transition' to='/projects'>Work</Link>
<Link className='text-[6vw] leading-[6vw] border-3 px-6 py-2 border-white rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50] transition' to='/agencs'>Agency</Link>
        
        <div className="absolute bottom-6 left-6 text-xl ">
          Bhilai_69:69:69
        </div>
   </div>
  )
}

export default BottomText