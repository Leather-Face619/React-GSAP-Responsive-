import React from 'react'

const TopText = () => {
  return (
    <div className="relative w-full h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background (replace video/image with color) */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900"></div>

      {/* Overlay content */}
      <div className="relative flex flex-col items-center justify-center h-full px-6">
        {/* Logo */}
        <div className="absolute top-6 left-6 text-3xl font-extrabold tracking-widest">
          K72
        </div>

        {/* Top-right hamburger */}
        <div className="absolute top-6 right-6 w-10 h-1 bg-white before:content-[''] before:block before:w-10 before:h-1 before:bg-white before:mt-2 after:content-[''] after:block after:w-10 after:h-1 after:bg-white after:mt-2"></div>

        {/* Hero Heading */}
        <h1 className="text-center font-extrabold leading-tight text-5xl md:text-7xl">
          THE SPARK FOR <br /> ALL THINGS <br />
          <span className="relative inline-block">
            CREATIVE
            {/* Yellow oval around "CREATIVE" */}
            <span className="absolute inset-0 border-4 border-yellow-400 rounded-full scale-125 -z-10"></span>
          </span>
        </h1>

        {/* Description text */}
        <p className="absolute right-6 bottom-40 max-w-sm text-sm md:text-base text-gray-300">
          K72 is an agency that builds brands from every angle. Today, tomorrow
          and years from now. We think the best sparks fly when comfort zones
          get left behind and friction infuses our strategies, brands and
          communications with real feeling. We’re transparent, honest and say
          what we mean, and when we believe in something, we’re all in.
        </p>

      </div>
    </div>
  )
}

export default TopText