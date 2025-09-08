import React from 'react'

const BottomText = () => {
  return (
   <div>
    
        {/* Bottom buttons */}
        <div className="absolute bottom-10 flex gap-6">
          <button className="px-8 py-3 border-2 border-white rounded-full text-xl font-bold hover:bg-white hover:text-black transition">
            WORK
          </button>
          <button className="px-8 py-3 border-2 border-white rounded-full text-xl font-bold hover:bg-white hover:text-black transition">
            AGENCY
          </button>
        </div>

        {/* Bottom-left time */}
        <div className="absolute bottom-6 left-6 text-sm text-gray-300">
          MONTREAL_10:18:19
        </div>
   </div>
  )
}

export default BottomText